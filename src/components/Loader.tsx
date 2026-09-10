import { useEffect, useState } from 'react';
import { heroImage } from '../data/portfolio';
import s from './Loader.module.css';

/** Tune here: how long the intro plays, exit transition length, hard timeout. */
const INTRO_MS = 2200;
const REDUCED_INTRO_MS = 300;
const EXIT_MS = 1300;
const TIMEOUT_MS = 8000;

type Props = { preview?: boolean; onClose: () => void };

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Real readiness: fonts, hero image, DOM parsed, window load. Each task counts as one step; a failing task still counts. */
function readinessTasks(): Promise<unknown>[] {
  return [
    'fonts' in document ? document.fonts.ready : Promise.resolve(),
    new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = img.onerror = () => resolve();
      img.src = heroImage.src;
      if (img.complete) resolve();
    }),
    document.readyState !== 'loading'
      ? Promise.resolve()
      : new Promise<void>((r) => document.addEventListener('DOMContentLoaded', () => r(), { once: true })),
    document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((r) => window.addEventListener('load', () => r(), { once: true })),
  ];
}

export function Loader({ preview = false, onClose }: Props) {
  const [progress, setProgress] = useState(0); // 0..1
  const [introDone, setIntroDone] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [reduced] = useState(reducedMotion);
  const ready = progress >= 1 && introDone;

  // progress: real tasks, or a demo counter in preview mode
  useEffect(() => {
    let alive = true;
    let raf = 0;
    const timeout = setTimeout(() => alive && setProgress(1), TIMEOUT_MS);
    if (preview) {
      const start = performance.now();
      const tick = (t: number) => {
        if (!alive) return;
        const p = Math.min(1, (t - start) / 1900);
        setProgress(p);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    } else {
      const tasks = readinessTasks();
      let done = 0;
      tasks.forEach((t) => t.then(
        () => alive && setProgress(Math.min(1, ++done / tasks.length)),
        () => alive && setProgress(Math.min(1, ++done / tasks.length)),
      ));
    }
    return () => { alive = false; clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [preview]);

  // minimum display: the intro animation
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), reduced ? REDUCED_INTRO_MS : INTRO_MS);
    return () => clearTimeout(t);
  }, [reduced]);

  // ready → (pause on «Готово к работе») → leaving → onClose
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setLeaving(true), reduced ? 100 : 450);
    return () => clearTimeout(t);
  }, [ready, reduced]);
  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(onClose, reduced ? 300 : EXIT_MS);
    return () => clearTimeout(t);
  }, [leaving, onClose, reduced]);

  // scroll lock while visible
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = prev; };
  }, []);

  const percent = Math.round(progress * 100);
  return (
    <div
      className={`${s.root} ${reduced ? s.reduced : ''} ${leaving ? s.leaving : ''} ${ready ? s.ready : ''}`}
      role="status"
      aria-live="polite"
      aria-label={ready ? 'Готово к работе' : `Загружаю портфолио, ${percent}%`}
    >
      <header className={s.top}>
        <span className={s.mark}>ms<span className={s.dot}>.</span></span>
        <span className={s.role}>CTO / Head of Development</span>
      </header>

      <div className={s.center}>
        <svg className={s.mono} viewBox="0 0 210 236" width="210" height="236" aria-hidden="true">
          {/* M: four strokes, assembled in sequence */}
          <polygon className={`${s.m} ${s.m1}`} points="22,22 44,22 44,118 22,118" />
          <polygon className={`${s.m} ${s.m2}`} points="30,22 54,22 72,76 72,106" />
          <polygon className={`${s.m} ${s.m3}`} points="90,22 114,22 72,106 72,76" />
          <polygon className={`${s.m} ${s.m4}`} points="100,22 122,22 122,118 100,118" />
          {/* S: drawn along its contour, an orange run follows */}
          <g transform="translate(8 12)">
            <path className={s.s} pathLength={1} d="M174 132c0-16-15-24-40-24s-42 9-42 24 16 22 42 25 42 10 42 27-17 26-42 26-44-10-44-26" />
            <path className={s.sRun} pathLength={1} d="M174 132c0-16-15-24-40-24s-42 9-42 24 16 22 42 25 42 10 42 27-17 26-42 26-44-10-44-26" />
            <circle className={s.point} cx="188" cy="208" r="8" />
          </g>
        </svg>
        <div className={s.nameMask}><p className={s.name}>Михаил Сивоконь</p></div>
        <p className={s.words}>
          <span className={s.w1}>Системы</span><span className={s.sep}>—</span>
          <span className={s.w2}>Люди</span><span className={s.sep}>—</span>
          <span className={s.w3}>Развитие</span>
        </p>
      </div>

      <footer className={s.bottom}>
        <div className={s.bar}><i style={{ transform: `scaleX(${ready ? 1 : progress})` }} /></div>
        <div className={s.meta}>
          <span>{ready ? 'Готово к работе' : 'Загружаю портфолио'}</span>
          <span className={s.pct}>{ready ? '100%' : `${percent}%`}</span>
        </div>
      </footer>
    </div>
  );
}
