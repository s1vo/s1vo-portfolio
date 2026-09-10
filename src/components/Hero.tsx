import { Link } from 'react-router-dom';
import { heroCaptions, heroImage, profile } from '../data/portfolio';
import { ArrowDown, ArrowRight, ArrowUpRight } from './Icons';
import s from './Hero.module.css';

export function Hero() {
  const pdf = profile.resumePdfUrl;
  return (
    <section className={`container ${s.hero}`} aria-labelledby="hero-title">
      <div className={s.text}>
        <p className="eyebrow">{profile.heroLabel}</p>
        <h1 id="hero-title" className={s.name}>
          <span className={s.line}>{profile.firstName}</span>
          <span className={s.line}>{profile.lastName}<span className={s.dot}>.</span></span>
        </h1>
        <p className={s.tagline}>
          {profile.tagline.map((t) => <span key={t} className={s.line}>{t}</span>)}
        </p>
        <p className={s.summary}>{profile.summary}</p>
        <div className={s.actions}>
          <Link to="/#projects" className="btn btn--action">Смотреть проекты <ArrowUpRight /></Link>
          {pdf
            ? <a href={pdf} download className="btn btn--ghost">Резюме <ArrowDown /></a>
            : <Link to="/resume" className="btn btn--ghost">Резюме <ArrowRight /></Link>}
        </div>
      </div>
      <figure className={s.figure}>
        <div className={s.inner}>
        <img
          src={heroImage.src}
          width={heroImage.width}
          height={heroImage.height}
          alt={heroImage.alt}
          fetchpriority="high"
          decoding="async"
          className={s.img}
        />
        <p className={`${s.caption} ${s.captionTop}`} aria-hidden="true">
          {heroCaptions.top.map((c) => <span key={c}>{c}</span>)}
        </p>
        <p className={`${s.caption} ${s.captionBottom}`} aria-hidden="true">
          {heroCaptions.bottom.map((c) => <span key={c}>{c}</span>)}
        </p>
        </div>
      </figure>
    </section>
  );
}
