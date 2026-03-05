import {
  aboutParagraphs,
  approachItems,
  contacts,
  heroBadges,
  processSteps,
  projects,
  serviceCards,
  sidebarGroups,
  skillBars,
  stats,
  techCategories,
  titleTabs,
  whatIDoCards,
  whyItems,
} from '../data/portfolioData';

function SectionHeader({ cmd, title, sub }) {
  return (
    <>
      <div className="sec-cmd">
        <span className="t-sym">$</span> {cmd}
      </div>
      <div className="sec-title">{title}</div>
      {sub ? <div className="sec-sub">{sub}</div> : null}
    </>
  );
}

function Prompt({ cmd, cursor, style }) {
  return (
    <div className="t-prompt" style={style}>
      <span className="t-user">mikhail</span>
      <span className="t-at">@</span>
      <span className="t-host">sivokon</span>
      <span className="t-path"> ~/portfolio</span>
      <span className="t-sym">$</span>
      {cursor ? <span className="t-cursor" /> : <span className="t-cmd">{cmd}</span>}
    </div>
  );
}

function ProjectTask({ task }) {
  if (typeof task === 'string') {
    return <div className="proj-task">{task}</div>;
  }

  const parts = task.text.split(': ');
  if (parts.length === 2) {
    return (
      <div className="proj-task">
        {parts[0]}:{' '}
        <a href={task.href} target="_blank" rel="noopener noreferrer">
          {parts[1]}
        </a>
      </div>
    );
  }

  return (
    <div className="proj-task">
      <a href={task.href} target="_blank" rel="noopener noreferrer">
        {task.text}
      </a>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <div id="boot">
        <div className="boot-title">mikhail@sivokon:~/portfolio</div>
        <div className="boot-bar-wrap">
          <div className="boot-bar" id="boot-bar" />
        </div>
        <div className="boot-msg" id="boot-msg">
          Initializing...
        </div>
      </div>

      <div id="progress" />
      <div id="cur-dot" />
      <div id="cur-ring" />

      <div className="titlebar">
        <div className="tb-dots">
          <div className="tb-dot r" />
          <div className="tb-dot y" />
          <div className="tb-dot g" />
        </div>

        <div className="tb-tabs">
          {titleTabs.map((tab, idx) => (
            <a
              key={`${tab.href}-${tab.label}`}
              href={tab.href}
              className={`tb-tab${idx === 0 ? ' active' : ''}`}
            >
              <span>{tab.icon}</span> {tab.label}
            </a>
          ))}
        </div>

        <div className="tb-right">
          <div className="tb-online" />
          <span>доступен для проектов</span>
        </div>
      </div>

      <div className="app">
        <nav className="sidebar">
          {sidebarGroups.map((group, groupIdx) => (
            <div className="sb-group" key={group.label}>
              <div className="sb-label">{group.label}</div>
              {group.items.map((item, itemIdx) => (
                <a
                  key={`${item.label}-${itemIdx}`}
                  href={item.href}
                  className={`sb-item${groupIdx === 0 && itemIdx === 0 ? ' active' : ''}${item.sub ? ' sub' : ''}`}
                >
                  <span className="ic">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          ))}

          <div className="sb-footer">
            <div className="sb-footer-title">● TERMINAL</div>
            <div>node v20.11 · ts 5.3</div>
          </div>
        </nav>

        <div className="main">
          <section className="hero" id="hero">
            <div className="hero-badges">
              {heroBadges.map((badge) => (
                <span key={badge.text} className={badge.className}>
                  {badge.text}
                </span>
              ))}
            </div>

            <Prompt cmd="whoami" style={{ marginBottom: 16 }} />

            <div className="hero-name" data-glitch="Михаил Сивоконь">
              <span className="accent">Михаил</span> Сивоконь
            </div>
            <div className="hero-role">Fullstack Developer &amp; Technical Lead</div>
            <div className="hero-desc">
              Проектирую и разрабатываю сложные веб-системы — от архитектуры до деплоя.
              Специализируюсь на высоконагруженных приложениях, аналитических платформах и
              корпоративных решениях. Закрываю весь стек самостоятельно.
            </div>

            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                <span>▸</span> посмотреть проекты
              </a>
              <a href="#contact" className="btn btn-ghost">
                <span>✉</span> написать
              </a>
            </div>

            <Prompt cursor />
          </section>

          <div className="stats">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <div className="stat-n">{item.value}</div>
                <div className="stat-l">{item.label}</div>
              </div>
            ))}
          </div>

          <section className="sec" id="about">
            <SectionHeader
              cmd="cat about.md"
              title="Обо мне"
              sub="# fullstack-developer · technical-lead · 8+ years"
            />

            <div className="about-grid">
              <div className="about-text">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="codeblock" style={{ margin: 0 }}>
                <div className="codeblock-hd">
                  <span className="codeblock-lang">TypeScript</span>
                  <span className="codeblock-file">developer.ts</span>
                </div>
                <div className="codeblock-body">
                  <div>
                    <span className="ln">1</span>
                    <span className="kw">const</span> <span className="obj">mikhail</span>{' '}
                    <span className="pnc">= {'{'}</span>
                  </div>
                  <div>
                    <span className="ln">2</span>&nbsp;&nbsp;<span className="prp">role</span>
                    <span className="pnc">:</span> <span className="str">'Fullstack Dev / Tech Lead'</span>
                    <span className="pnc">,</span>
                  </div>
                  <div>
                    <span className="ln">3</span>&nbsp;&nbsp;<span className="prp">exp</span>
                    <span className="pnc">:</span> <span className="str">'8+ years'</span>
                    <span className="pnc">,</span>
                  </div>
                  <div>
                    <span className="ln">4</span>&nbsp;&nbsp;<span className="prp">focus</span>
                    <span className="pnc">: [</span>
                  </div>
                  <div>
                    <span className="ln">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">
                      'highload systems'
                    </span>
                    <span className="pnc">,</span>
                  </div>
                  <div>
                    <span className="ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">
                      'analytics platforms'
                    </span>
                    <span className="pnc">,</span>
                  </div>
                  <div>
                    <span className="ln">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">
                      'system architecture'
                    </span>
                    <span className="pnc">,</span>
                  </div>
                  <div>
                    <span className="ln">8</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="str">'devops'</span>
                  </div>
                  <div>
                    <span className="ln">9</span>&nbsp;&nbsp;<span className="pnc">],</span>
                  </div>
                  <div>
                    <span className="ln">10</span>&nbsp;&nbsp;<span className="prp">available</span>
                    <span className="pnc">:</span> <span className="kw">true</span>
                    <span className="pnc">,</span>
                  </div>
                  <div>
                    <span className="ln">11</span>&nbsp;&nbsp;<span className="prp">location</span>
                    <span className="pnc">:</span> <span className="str">'Remote / Worldwide'</span>
                  </div>
                  <div>
                    <span className="ln">12</span>
                    <span className="pnc">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="sec" id="whatido">
            <SectionHeader cmd="node whatido.js" title="Чем я занимаюсь" />
            <div className="cards">
              {whatIDoCards.map((card) => (
                <div className="card" key={card.title}>
                  <div className="card-icon">{card.icon}</div>
                  <div className="card-title">{card.title}</div>
                  <div className="card-desc">{card.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="skills">
            <SectionHeader cmd="cat skills.json | jq" title="Навыки" />

            <div className="codeblock">
              <div className="codeblock-hd">
                <span className="codeblock-lang">JSON</span>
                <span className="codeblock-file">skills.json</span>
              </div>
              <div className="codeblock-body">
                <div>
                  <span className="pnc">{'{'}</span>
                </div>
                <div>
                  &nbsp;&nbsp;<span className="str">"frontend"</span>
                  <span className="pnc">: [</span>
                  <span className="str">"React"</span>
                  <span className="pnc">,</span> <span className="str">"Next.js"</span>
                  <span className="pnc">,</span> <span className="str">"TypeScript"</span>
                  <span className="pnc">,</span> <span className="str">"JavaScript"</span>
                  <span className="pnc">,</span> <span className="str">"SCSS"</span>
                  <span className="pnc">,</span> <span className="str">"Tailwind"</span>
                  <span className="pnc">],</span>
                </div>
                <div>
                  &nbsp;&nbsp;<span className="str">"backend"</span>
                  <span className="pnc">: [</span>
                  <span className="str">"Node.js"</span>
                  <span className="pnc">,</span> <span className="str">"NestJS"</span>
                  <span className="pnc">,</span> <span className="str">"Express.js"</span>
                  <span className="pnc">,</span> <span className="str">"PHP"</span>
                  <span className="pnc">],</span>
                </div>
                <div>
                  &nbsp;&nbsp;<span className="str">"databases"</span>
                  <span className="pnc">: [</span>
                  <span className="str">"PostgreSQL"</span>
                  <span className="pnc">,</span> <span className="str">"ClickHouse"</span>
                  <span className="pnc">,</span> <span className="str">"MongoDB"</span>
                  <span className="pnc">,</span> <span className="str">"MySQL"</span>
                  <span className="pnc">],</span>
                </div>
                <div>
                  &nbsp;&nbsp;<span className="str">"devops"</span>
                  <span className="pnc">: [</span>
                  <span className="str">"Docker"</span>
                  <span className="pnc">,</span> <span className="str">"GitLab CI"</span>
                  <span className="pnc">,</span> <span className="str">"Nginx"</span>
                  <span className="pnc">,</span> <span className="str">"Traefik"</span>
                  <span className="pnc">,</span> <span className="str">"Linux"</span>
                  <span className="pnc">],</span>
                </div>
                <div>
                  &nbsp;&nbsp;<span className="str">"tools"</span>
                  <span className="pnc">: [</span>
                  <span className="str">"Git"</span>
                  <span className="pnc">,</span> <span className="str">"Vite"</span>
                  <span className="pnc">,</span> <span className="str">"Webpack"</span>
                  <span className="pnc">,</span> <span className="str">"Figma"</span>
                  <span className="pnc">,</span> <span className="str">"OpenAPI"</span>
                  <span className="pnc">,</span> <span className="str">"Postman"</span>
                  <span className="pnc">]</span>
                </div>
                <div>
                  <span className="pnc">{'}'}</span>
                </div>
              </div>
            </div>

            <div className="skillbars">
              <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 10 }}>// proficiency</div>
              {skillBars.map((bar) => (
                <div className="skillbar" key={bar.label}>
                  <span className="skillbar-label">{bar.label}</span>
                  <div className="skillbar-track">
                    <div
                      className={`skillbar-fill${bar.blue ? ' blue' : ''}`}
                      style={{ width: bar.value }}
                    />
                  </div>
                  <span className="skillbar-pct">{bar.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="stack">
            <SectionHeader cmd="cat stack.config.js" title="Технологический стек" />
            <div className="tech-grid">
              {techCategories.map((category) => (
                <div className="tech-cat" key={category.title}>
                  <div className="tech-cat-hd">
                    <span>{category.icon}</span> {category.title}
                  </div>
                  <div className="tech-cat-body">
                    {category.pills.map((pill) => (
                      <span className="pill" style={pill.style} key={pill.text}>
                        {pill.text}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="projects">
            <SectionHeader
              cmd="ls -la ./projects"
              title="Проекты"
              sub="// выборка из закрытых и коммерческих работ"
            />

            <div className="projects">
              {projects.map((project) => (
                <div className="project" key={project.name}>
                  <div className="project-hd">
                    <div className="proj-dots">
                      <span style={{ background: '#ff5f57' }} />
                      <span style={{ background: '#febc2e' }} />
                      <span style={{ background: '#28c840' }} />
                    </div>
                    <span className="proj-type">{project.type}</span>
                  </div>
                  <div className="project-body">
                    <div className="proj-name">
                      <span className="pref">/</span> {project.name}
                    </div>
                    <div className="proj-desc">{project.desc}</div>
                    <div className="proj-tasks">
                      {project.tasks.map((task, idx) => (
                        <ProjectTask task={task} key={`${project.name}-task-${idx}`} />
                      ))}
                    </div>
                    <div className="proj-stack">
                      {project.stack.map((tag) => (
                        <span className="proj-tag" key={`${project.name}-${tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="approach">
            <SectionHeader cmd="cat approach.md" title="Подход к разработке" />
            <div className="codeblock">
              <div className="codeblock-hd">
                <span className="codeblock-lang">Markdown</span>
                <span className="codeblock-file">approach.md</span>
              </div>
              <div className="codeblock-body" style={{ fontFamily: 'var(--sans)', fontSize: 13 }}>
                {approachItems.map((item, idx) => (
                  <div key={item.title}>
                    <div style={{ marginBottom: 8 }}>
                      <span className="t-ok">##</span>{' '}
                      <span style={{ color: 'var(--text)' }}>{item.title}</span>
                    </div>
                    <div
                      style={{
                        color: 'var(--text-2)',
                        marginBottom: idx === approachItems.length - 1 ? 0 : 16,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="sec" id="services">
            <SectionHeader cmd="node services.js --list" title="Услуги" />
            <div className="cards">
              {serviceCards.map((card) => (
                <div className="card" key={card.title}>
                  <div className="card-icon">{card.icon}</div>
                  <div className="card-title">{card.title}</div>
                  <div className="card-desc">{card.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="why">
            <SectionHeader cmd="cat why-me.txt" title="Почему со мной работают" />
            <div className="why-grid">
              {whyItems.map((item) => (
                <div className="why-item" key={item.title}>
                  <div className="why-check">✓</div>
                  <div className="why-title">{item.title}</div>
                  <div className="why-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="process">
            <SectionHeader cmd="bash process.sh" title="Процесс работы" />
            <div className="process">
              {processSteps.map((step) => (
                <div className="proc-step" key={step.number}>
                  <div className="proc-n">{step.number}</div>
                  <div className="proc-title">{step.title}</div>
                  <div className="proc-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="contact">
            <SectionHeader
              cmd="bash contact.sh --open"
              title="Контакты"
              sub="// доступен для новых проектов и задач"
            />

            <div className="t-out t-ok" style={{ margin: '16px 0' }}>
              ✓ готов к обсуждению задачи. среднее время ответа — несколько часов.
            </div>

            <div className="contact-grid">
              {contacts.map((contact) => (
                <a
                  key={contact.value}
                  href={contact.href}
                  className="contact-card"
                  target={contact.blank ? '_blank' : undefined}
                  rel={contact.blank ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div>
                    <div className="contact-lbl">{contact.label}</div>
                    <div className="contact-val">{contact.value}</div>
                  </div>
                  <div className="contact-arr">→</div>
                </a>
              ))}
            </div>

            <div className="iterm">
              <div className="iterm-hd">
                <span className="iterm-hd-left">bash — interactive.sh</span>
                <span className="iterm-hd-right">↵ Enter · попробуй: help, whoami, projects</span>
              </div>
              <div id="iterm-out" className="iterm-out">
                <div className="t-out t-ok">✓ Терминал инициализирован. Введи 'help' для списка команд.</div>
              </div>
              <div className="iterm-input-row">
                <span className="t-user">mikhail</span>
                <span className="t-at">@</span>
                <span className="t-host">sivokon</span>
                <span className="t-path"> ~/portfolio</span>
                <span className="t-sym">$</span>
                <input
                  id="iterm-input"
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="введи команду..."
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="statusbar">
        <span className="sb-i hl">NORMAL</span>
        <span className="sb-sep">│</span>
        <span className="sb-i">⎇ main</span>
        <span className="sb-sep">│</span>
        <span className="sb-i">portfolio.html</span>

        <div className="sb-right">
          <span className="sb-i">UTF-8</span>
          <span className="sb-sep">│</span>
          <span className="sb-i hl">Fullstack Developer</span>
          <span className="sb-sep">│</span>
          <span className="sb-i hl" id="sb-time">
            --:--:--
          </span>
        </div>
      </div>
    </>
  );
}
