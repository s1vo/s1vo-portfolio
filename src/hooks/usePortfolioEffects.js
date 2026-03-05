import { useEffect } from 'react';
import { terminalCommands } from '../data/portfolioData';

function useBootLoader() {
  useEffect(() => {
    const bar = document.getElementById('boot-bar');
    const msg = document.getElementById('boot-msg');
    const boot = document.getElementById('boot');

    if (!bar || !msg || !boot) {
      return undefined;
    }

    const messages = [
      'Initializing runtime...',
      'Loading modules...',
      'Compiling TypeScript...',
      'Building assets...',
      'Starting server...',
      'Ready.',
    ];

    let progress = 0;
    let outTimer = null;
    let removeTimer = null;

    const intervalId = window.setInterval(() => {
      progress += Math.random() * 20 + 6;
      if (progress > 100) progress = 100;

      bar.style.width = `${progress}%`;
      msg.textContent = messages[Math.min(Math.floor(progress / 20), messages.length - 1)];

      if (progress >= 100) {
        window.clearInterval(intervalId);
        outTimer = window.setTimeout(() => {
          boot.classList.add('out');
          removeTimer = window.setTimeout(() => boot.remove(), 450);
        }, 250);
      }
    }, 100);

    return () => {
      window.clearInterval(intervalId);
      if (outTimer) window.clearTimeout(outTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
    };
  }, []);
}

function useScrollProgress() {
  useEffect(() => {
    const progressEl = document.getElementById('progress');
    if (!progressEl) return undefined;

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = total > 0 ? window.scrollY / total : 0;
      progressEl.style.transform = `scaleX(${value})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

function useCustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');

    if (!dot || !ring) return undefined;

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;

    const onMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    let rafId = 0;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = window.requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMouseMove);
    rafId = window.requestAnimationFrame(tick);

    const hoverSelector =
      'a,button,.card,.project,.contact-card,.pill,.proc-step,.why-item,.sb-item,.tb-tab';
    const hoverTargets = Array.from(document.querySelectorAll(hoverSelector));

    const onEnter = () => document.body.classList.add('h');
    const onLeave = () => document.body.classList.remove('h');

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.cancelAnimationFrame(rafId);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      document.body.classList.remove('h');
    };
  }, []);
}

function useScrollSpy() {
  useEffect(() => {
    const sidebarItems = Array.from(document.querySelectorAll('.sb-item'));
    const titleTabs = Array.from(document.querySelectorAll('.tb-tab'));

    if (!sidebarItems.length && !titleTabs.length) return undefined;

    const spy = () => {
      let currentSection = '';
      document.querySelectorAll('section[id]').forEach((section) => {
        if (section.getBoundingClientRect().top <= 80) {
          currentSection = section.id;
        }
      });

      sidebarItems.forEach((el) => {
        el.classList.toggle('active', el.getAttribute('href') === `#${currentSection}`);
      });
      titleTabs.forEach((el) => {
        el.classList.toggle('active', el.getAttribute('href') === `#${currentSection}`);
      });
    };

    window.addEventListener('scroll', spy, { passive: true });
    spy();

    return () => {
      window.removeEventListener('scroll', spy);
    };
  }, []);
}

function useClock() {
  useEffect(() => {
    const clock = document.getElementById('sb-time');
    if (!clock) return undefined;

    const update = () => {
      clock.textContent = new Date().toLocaleTimeString('ru', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    };

    update();
    const intervalId = window.setInterval(update, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
}

function useReveal() {
  useEffect(() => {
    const selector =
      '.card, .why-item, .proc-step, .project, .tech-cat, .contact-card, .stat, .skillbar, .about-grid';
    const revealNodes = Array.from(document.querySelectorAll(selector));

    revealNodes.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const parent = entry.target.parentElement;
          if (!parent) return;

          const siblings = Array.from(parent.querySelectorAll('.reveal'));
          const index = siblings.indexOf(entry.target);
          window.setTimeout(() => entry.target.classList.add('in'), index * 70);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealNodes.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}

function useSkillBars() {
  useEffect(() => {
    const fills = Array.from(document.querySelectorAll('.skillbar-fill'));

    fills.forEach((bar) => {
      bar.dataset.w = bar.style.width;
      bar.style.width = '0';
    });

    const timeoutIds = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.querySelectorAll('.skillbar-fill').forEach((bar, index) => {
            const timeoutId = window.setTimeout(() => {
              bar.style.width = bar.dataset.w || '0';
            }, index * 120 + 100);
            timeoutIds.push(timeoutId);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    const skillSection = document.getElementById('skills');
    if (skillSection) observer.observe(skillSection);

    return () => {
      observer.disconnect();
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, []);
}

function useProjectTilt() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.project'));
    const handlers = [];

    cards.forEach((card) => {
      const onMove = (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        card.style.transform =
          `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-3px)`;
        card.style.boxShadow = '0 20px 50px rgba(0,0,0,.45), 0 0 30px rgba(0,210,106,.07)';
        card.style.borderColor = 'var(--green-dim)';
      };

      const onLeave = () => {
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.borderColor = '';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      handlers.push([card, onMove, onLeave]);
    });

    return () => {
      handlers.forEach(([card, onMove, onLeave]) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
}

function useHeroTypewriter() {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return undefined;

    const activeTimeouts = new Set();
    const activeIntervals = new Set();

    const setSafeTimeout = (fn, delay) => {
      const id = window.setTimeout(() => {
        activeTimeouts.delete(id);
        fn();
      }, delay);
      activeTimeouts.add(id);
      return id;
    };

    const setSafeInterval = (fn, delay) => {
      const id = window.setInterval(fn, delay);
      activeIntervals.add(id);
      return id;
    };

    const terminalWindow = document.createElement('div');
    terminalWindow.style.cssText = `
      margin-top: 32px;
      background: #0a0a0a;
      border: 1px solid #1f1f1f;
      border-radius: 8px;
      overflow: hidden;
      max-width: 600px;
      font-size: 12.5px;
      box-shadow: 0 24px 60px rgba(0,0,0,.6);
    `;

    const titleBar = document.createElement('div');
    titleBar.style.cssText = `
      display: flex; align-items: center; gap: 6px;
      padding: 9px 14px; background: #141414;
      border-bottom: 1px solid #1a1a1a;
    `;
    titleBar.innerHTML = `
      <span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:block"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:block"></span>
      <span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:block"></span>
      <span style="flex:1;text-align:center;font-size:11px;color:#444;margin-left:-60px">mikhail@sivokon — portfolio</span>
    `;

    const outputBody = document.createElement('div');
    outputBody.style.cssText = 'padding: 16px; min-height: 160px; line-height: 1.75;';

    terminalWindow.appendChild(titleBar);
    terminalWindow.appendChild(outputBody);
    hero.appendChild(terminalWindow);

    const createPrompt = () => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;flex-wrap:wrap;gap:0;margin-bottom:2px';
      row.innerHTML =
        '<span style="color:#00d26a">mikhail</span><span style="color:#444">@</span>' +
        '<span style="color:#3b9eff">sivokon</span><span style="color:#bf5af2"> ~/portfolio</span>' +
        '<span style="color:#555;margin:0 7px">$</span>';
      return row;
    };

    const script = [
      {
        cmd: 'neofetch --minimal',
        pause: 120,
        out: [
          { text: '  OS      Ubuntu 22.04 LTS / macOS Sonoma', cls: 'color:#888' },
          { text: '  Shell   zsh 5.9  ·  node v20.11  ·  ts 5.3', cls: 'color:#888' },
          { text: '  Editor  VS Code + Neovim', cls: 'color:#888' },
          { text: '  Stack   React · NestJS · PostgreSQL · Docker', cls: 'color:#00d26a' },
        ],
      },
      {
        cmd: 'git log --oneline --graph -4',
        pause: 180,
        out: [
          { text: '* a3f91c2  feat: highload analytics platform', hash: 'a3f91c2' },
          { text: '* 8b2de17  feat: geo-information system v2', hash: '8b2de17' },
          { text: '* c509a1f  refactor: monitoring service arch', hash: 'c509a1f' },
          { text: '* f120e3d  fix: clickhouse query optimization', hash: 'f120e3d' },
        ],
      },
      {
        cmd: 'npm run build',
        pause: 100,
        progress: true,
        out: [
          { text: '> portfolio@1.0.0 build', cls: 'color:#555' },
          { text: '> next build', cls: 'color:#555' },
          { text: '', cls: '' },
          { text: '✓  Compiled successfully', cls: 'color:#00d26a;font-weight:600' },
          { text: '✓  Linting and checking validity of types', cls: 'color:#00d26a' },
          { text: '✓  Collecting page data', cls: 'color:#00d26a' },
          { text: '', cls: '' },
          { text: '   Route          Size     First Load JS', cls: 'color:#555;font-size:11px' },
          { text: '   ○  /           4.2 kB        92.1 kB', cls: 'color:#888;font-size:11px' },
          { text: '   ○  /projects   2.8 kB        90.7 kB', cls: 'color:#888;font-size:11px' },
        ],
      },
      {
        cmd: './check-availability.sh',
        pause: 160,
        out: [
          { text: 'Checking schedule...', cls: 'color:#555', pause: 400 },
          { text: '● status    ONLINE', cls: 'color:#00d26a;font-weight:600' },
          { text: '● mode      Remote / Worldwide', cls: 'color:#3b9eff' },
          { text: '● response  < several hours', cls: 'color:#888' },
          { text: '', cls: '' },
          { text: '  → Write me: mikhail@sivokon.dev', cls: 'color:#bf5af2' },
        ],
      },
    ];

    let cursor = null;

    const removeCursor = () => {
      if (cursor) {
        cursor.remove();
        cursor = null;
      }
    };

    const addCursor = (container) => {
      cursor = document.createElement('span');
      cursor.textContent = '█';
      cursor.style.cssText = 'color:#00d26a;animation:blink 1s step-end infinite;margin-left:1px';
      container.appendChild(cursor);
    };

    const typeText = (el, text, speed, callback) => {
      let i = 0;
      const tick = () => {
        if (i < text.length) {
          el.textContent += text[i++];
          setSafeTimeout(tick, speed + Math.random() * 15);
          return;
        }

        if (callback) callback();
      };
      tick();
    };

    const renderProgress = (callback) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = 'margin-bottom:6px';

      const label = document.createElement('div');
      label.style.cssText = 'color:#555;font-size:11px;margin-bottom:4px';
      label.textContent = 'Building...';

      const track = document.createElement('div');
      track.style.cssText = 'height:2px;background:#1f1f1f;border-radius:2px;overflow:hidden;width:220px';

      const fill = document.createElement('div');
      fill.style.cssText = 'height:100%;background:#00d26a;width:0;border-radius:2px';
      track.appendChild(fill);
      wrap.appendChild(label);
      wrap.appendChild(track);
      outputBody.appendChild(wrap);

      let progress = 0;
      const steps = [12, 8, 15, 7, 20, 10, 18, 10];
      let stepIndex = 0;

      const intervalId = setSafeInterval(() => {
        if (stepIndex < steps.length) {
          progress = Math.min(progress + steps[stepIndex++], 95);
        }

        fill.style.width = `${progress}%`;

        if (stepIndex >= steps.length) {
          window.clearInterval(intervalId);
          activeIntervals.delete(intervalId);
          fill.style.width = '100%';
          label.textContent = 'Build complete';
          label.style.color = '#00d26a';
          setSafeTimeout(callback, 200);
        }
      }, 120);
    };

    const renderOut = (lines, idx, callback) => {
      if (idx >= lines.length) {
        if (callback) callback();
        return;
      }

      const line = lines[idx];
      const delay = line.pause || 0;

      setSafeTimeout(() => {
        if (line.text === '' && !line.hash) {
          outputBody.appendChild(document.createElement('div'));
          renderOut(lines, idx + 1, callback);
          return;
        }

        const row = document.createElement('div');
        row.style.cssText = `margin-bottom:2px;${line.cls || 'color:#888'}`;

        if (line.hash) {
          const hash = document.createElement('span');
          hash.style.color = '#bf5af2';
          hash.textContent = `* ${line.hash}`;

          const rest = document.createElement('span');
          rest.style.color = '#555';
          rest.textContent = line.text.slice((`* ${line.hash}`).length);

          row.appendChild(hash);
          row.appendChild(rest);
          row.style.cssText = 'margin-bottom:1px;font-size:12px';
          outputBody.appendChild(row);
          setSafeTimeout(() => renderOut(lines, idx + 1, callback), 60);
          return;
        }

        outputBody.appendChild(row);
        typeText(row, line.text, 7, () => {
          setSafeTimeout(() => renderOut(lines, idx + 1, callback), 35);
        });
      }, delay);
    };

    const runScript = (idx) => {
      if (idx >= script.length) {
        const finalPrompt = createPrompt();
        addCursor(finalPrompt);
        outputBody.appendChild(finalPrompt);
        return;
      }

      const step = script[idx];
      const row = createPrompt();
      const command = document.createElement('span');
      command.style.color = '#e2e2e2';
      addCursor(command);
      row.appendChild(command);
      outputBody.appendChild(row);

      let charIndex = 0;
      const typeCommand = () => {
        if (charIndex < step.cmd.length) {
          removeCursor();
          command.textContent += step.cmd[charIndex++];
          addCursor(command);
          setSafeTimeout(typeCommand, 38 + Math.random() * 22);
          return;
        }

        setSafeTimeout(() => {
          removeCursor();

          const gap = document.createElement('div');
          gap.style.height = '2px';
          outputBody.appendChild(gap);

          const afterOut = () => {
            const gap2 = document.createElement('div');
            gap2.style.height = '8px';
            outputBody.appendChild(gap2);
            setSafeTimeout(() => runScript(idx + 1), step.pause);
          };

          if (step.progress) {
            renderProgress(() => renderOut(step.out, 0, afterOut));
          } else {
            renderOut(step.out, 0, afterOut);
          }
        }, 200);
      };

      typeCommand();
    };

    setSafeTimeout(() => runScript(0), 800);

    return () => {
      activeTimeouts.forEach((id) => window.clearTimeout(id));
      activeTimeouts.clear();

      activeIntervals.forEach((id) => window.clearInterval(id));
      activeIntervals.clear();

      terminalWindow.remove();
    };
  }, []);
}

function useHeroGlitch() {
  useEffect(() => {
    const heroName = document.querySelector('.hero-name');
    if (!heroName) return undefined;

    const timeoutIds = new Set();

    const intervalId = window.setInterval(() => {
      heroName.classList.add('glitch');
      const timeoutId = window.setTimeout(() => {
        timeoutIds.delete(timeoutId);
        heroName.classList.remove('glitch');
      }, 300);
      timeoutIds.add(timeoutId);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
      timeoutIds.forEach((id) => window.clearTimeout(id));
      timeoutIds.clear();
      heroName.classList.remove('glitch');
    };
  }, []);
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  const timeoutId = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);

  return timeoutId;
}

function useContactCopy() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.contact-card'));
    const timeoutIds = new Set();

    const handlers = cards.map((card) => {
      const onClick = (event) => {
        const value = card.querySelector('.contact-val')?.textContent;
        if (!value || !navigator.clipboard) return;

        event.preventDefault();

        navigator.clipboard.writeText(value).then(() => {
          const toastTimeout = showToast(`Скопировано: ${value}`);
          timeoutIds.add(toastTimeout);

          const openTimeout = window.setTimeout(() => {
            timeoutIds.delete(openTimeout);
            if (card.href && card.href !== '#') {
              window.open(card.href, card.target || '_self');
            }
          }, 300);
          timeoutIds.add(openTimeout);
        });
      };

      card.addEventListener('click', onClick);
      return [card, onClick];
    });

    return () => {
      handlers.forEach(([card, onClick]) => {
        card.removeEventListener('click', onClick);
      });

      timeoutIds.forEach((id) => window.clearTimeout(id));
      timeoutIds.clear();
    };
  }, []);
}

function appendTerminalLine(out, cls, text) {
  const line = document.createElement('div');
  line.className = `t-out ${cls}`.trim();
  line.textContent = text;
  out.appendChild(line);
}

function appendPromptEcho(out, value) {
  const prompt = document.createElement('div');
  prompt.className = 't-prompt';

  const segments = [
    ['t-user', 'mikhail'],
    ['t-at', '@'],
    ['t-host', 'sivokon'],
    ['t-path', ' ~/portfolio'],
    ['t-sym', '$'],
    ['t-cmd', value],
  ];

  segments.forEach(([className, text]) => {
    const span = document.createElement('span');
    span.className = className;
    span.textContent = text;
    prompt.appendChild(span);
  });

  out.appendChild(prompt);
}

function useInteractiveTerminal() {
  useEffect(() => {
    const input = document.getElementById('iterm-input');
    const output = document.getElementById('iterm-out');
    if (!input || !output) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== 'Enter') return;

      const value = input.value.trim().toLowerCase();
      if (!value) return;

      appendPromptEcho(output, value);
      input.value = '';

      if (value === 'clear') {
        output.innerHTML = '';
        return;
      }

      const lines = terminalCommands[value];
      if (lines) {
        lines.forEach(([cls, text]) => appendTerminalLine(output, cls, text));
      } else {
        appendTerminalLine(output, 't-err', `bash: ${value}: command not found. Type 'help'.`);
      }

      output.scrollTop = output.scrollHeight;
    };

    input.addEventListener('keydown', onKeyDown);

    return () => {
      input.removeEventListener('keydown', onKeyDown);
    };
  }, []);
}

function useStatCounters() {
  useEffect(() => {
    const stats = Array.from(document.querySelectorAll('.stat-n'));

    stats.forEach((el) => {
      const text = el.textContent?.trim() || '';
      if (text === '∞') return;

      const num = Number.parseInt(text, 10);
      if (Number.isNaN(num)) return;

      const suffix = text.replace(String(num), '');
      el.dataset.count = String(num);
      el.dataset.sfx = suffix;
      el.textContent = `0${suffix}`;
    });

    const intervals = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const raw = el.dataset.count;
          const suffix = el.dataset.sfx || '';
          if (!raw || raw === '∞') return;

          const target = Number.parseInt(raw, 10);
          if (Number.isNaN(target)) return;

          let current = 0;
          const step = Math.max(1, Math.ceil(target / 40));

          const intervalId = window.setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = `${current}${suffix}`;

            if (current >= target) {
              window.clearInterval(intervalId);
              intervals.delete(intervalId);
            }
          }, 28);

          intervals.add(intervalId);
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const countNodes = Array.from(document.querySelectorAll('.stat-n[data-count]'));
    countNodes.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      intervals.forEach((id) => window.clearInterval(id));
      intervals.clear();
    };
  }, []);
}

export function usePortfolioEffects() {
  useBootLoader();
  useScrollProgress();
  useCustomCursor();
  useScrollSpy();
  useClock();
  useReveal();
  useSkillBars();
  useProjectTilt();
  useHeroTypewriter();
  useHeroGlitch();
  useContactCopy();
  useInteractiveTerminal();
  useStatCounters();
}
