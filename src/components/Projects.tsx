import { Link } from 'react-router-dom';
import { projects, type Project } from '../data/portfolio';
import { ArrowRight } from './Icons';
import s from './Projects.module.css';

function Card({ p }: { p: Project }) {
  const cls = p.featured ? s.featured : s.small;
  return (
    <Link to={`/projects/${p.slug}`} className={`${s.card} ${cls}`} aria-label={`Проект: ${p.title}`}>
      <div className={s.body}>
        <p className="eyebrow">{p.category}</p>
        <h3 className={s.title}>{p.title}</h3>
        <p className={s.summary}>{p.summary}</p>
        <ul className={s.tags} aria-label="Технологии">
          {p.tags.map((t) => <li key={t} className="tag">{t}</li>)}
        </ul>
        <span className={`arrow-circle ${s.arrow}`} aria-hidden="true"><ArrowRight size={18} /></span>
      </div>
      <img
        src={p.image.src}
        width={p.image.width}
        height={p.image.height}
        alt={p.image.alt}
        loading="lazy"
        decoding="async"
        className={s.img}
      />
    </Link>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="projects" className={`container ${s.section}`} aria-labelledby="projects-title">
      <p className="eyebrow">01 / Избранное</p>
      <h2 id="projects-title" className={`h2 ${s.heading}`}>Системы, над которыми работаю</h2>
      <div className={s.grid}>
        <Card p={featured} />
        {rest.map((p) => <Card key={p.id} p={p} />)}
      </div>
    </section>
  );
}
