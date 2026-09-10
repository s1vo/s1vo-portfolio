import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Scrolls to `#hash` targets after route change; plain route change resets to top. */
export function useHashScroll() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let raf = 0;
    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      if (tries++ < 20) raf = requestAnimationFrame(attempt); // ponytail: 20 frames covers route mount; no observer needed
    };
    attempt();
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);
}

export function useMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [title, description]);
}
