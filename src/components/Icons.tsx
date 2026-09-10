import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = ({ size = 16, ...rest }: P): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
  ...rest,
});

export const ArrowUpRight = (p: P) => (
  <svg {...base(p)} className={`icon icon--up-right ${p.className ?? ''}`}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base(p)} className={`icon icon--right ${p.className ?? ''}`}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowDown = (p: P) => (
  <svg {...base(p)} className={`icon icon--down ${p.className ?? ''}`}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
);
export const Menu = (p: P) => <svg {...base(p)} className="icon"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
export const Close = (p: P) => <svg {...base(p)} className="icon"><path d="M6 6l12 12M18 6 6 18" /></svg>;
export const Print = (p: P) => (
  <svg {...base(p)} className="icon"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v7H6z" /></svg>
);
