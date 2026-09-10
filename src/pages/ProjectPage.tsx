import { Link, useParams } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { ArrowRight } from '../components/Icons';
import { findProject, profile, projects } from '../data/portfolio';
import { useMeta } from '../hooks';
import { NotFoundPage } from './NotFoundPage';
import s from './ProjectPage.module.css';

export function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);
  useMeta(project ? `${project.title} — ${profile.name}` : 'Проект не найден', project?.description ?? '');
  if (!project) return <NotFoundPage />;

  const others = projects.filter((p) => p.id !== project.id);
  return (
    <>
      <article className={`container ${s.page}`}>
        <Link to="/#projects" className={`text-link ${s.back}`}>К проектам</Link>
        <header className={s.head}>
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1 className={s.title}>{project.title}</h1>
            <p className={s.lead}>{project.summary}</p>
            <ul className={s.tags} aria-label="Технологии">
              {project.stack.map((t) => <li key={t} className="tag">{t}</li>)}
            </ul>
          </div>
          <div className={s.imgBox}>
          <img
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
            alt={project.image.alt}
            className={s.img}
            fetchpriority="high"
          />
          </div>
        </header>

        <div className={s.blocks}>
          <section className={s.block} aria-labelledby={`${project.id}-task`}>
            <h2 id={`${project.id}-task`} className={s.h2}>Задача</h2>
            <p>{project.description}</p>
          </section>
          {project.role && (
            <section className={s.block}><h2 className={s.h2}>Моя роль</h2><p>{project.role}</p></section>
          )}
          <section className={s.block} aria-labelledby={`${project.id}-work`}>
            <h2 id={`${project.id}-work`} className={s.h2}>Направления работы</h2>
            <ul className={s.list}>{project.workAreas.map((w) => <li key={w}>{w}</li>)}</ul>
          </section>
          {project.results && project.results.length > 0 && (
            <section className={s.block}><h2 className={s.h2}>Результат</h2><ul className={s.list}>{project.results.map((r) => <li key={r}>{r}</li>)}</ul></section>
          )}
        </div>

        <nav className={s.others} aria-label="Другие проекты">
          <h2 className={s.h2}>Другие проекты</h2>
          <ul className={s.otherList}>
            {others.map((p) => (
              <li key={p.id}>
                <Link to={`/projects/${p.slug}`} className={s.otherLink}>
                  <span className="eyebrow">{p.category}</span>
                  <span className={s.otherTitle}>{p.title} <ArrowRight size={18} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
      <Contact />
    </>
  );
}
