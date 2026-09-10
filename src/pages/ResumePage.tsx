import { Link } from 'react-router-dom';
import { ArrowUpRight, Print } from '../components/Icons';
import { contacts, profile, projects } from '../data/portfolio';
import { useMeta } from '../hooks';
import s from './ResumePage.module.css';

export function ResumePage() {
  useMeta(`Резюме — ${profile.name}, ${profile.role}`, profile.resumeHighlights[0]);
  return (
    <article className={`container ${s.page}`}>
      <header className={s.head}>
        <div>
          <p className="eyebrow">{profile.role}</p>
          <h1 className={s.name}>{profile.name}</h1>
          <p className={s.lead}>{profile.summary}</p>
        </div>
        <div className={`${s.actions} no-print`}>
          <button type="button" className="btn btn--dark" onClick={() => window.print()}>
            Печать / PDF <Print />
          </button>
        </div>
      </header>

      <div className={s.grid}>
        <section aria-labelledby="r-profile">
          <h2 id="r-profile" className={s.h2}>Профиль</h2>
          <p>{profile.experienceText}</p>
          <ul className={s.list}>{profile.resumeHighlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </section>

        <section aria-labelledby="r-comp">
          <h2 id="r-comp" className={s.h2}>Компетенции</h2>
          <ul className={s.list}>{profile.competencies.map((c) => <li key={c}>{c}</li>)}</ul>
          <h2 className={s.h2}>Путь</h2>
          <p className={s.path}>{profile.careerSteps.join(' → ')}</p>
          <p className={s.muted}>Даты и работодатели по запросу.</p>
        </section>

        <section aria-labelledby="r-projects" className={s.wide}>
          <h2 id="r-projects" className={s.h2}>Основные проекты</h2>
          <ul className={s.projects}>
            {projects.map((p) => (
              <li key={p.id} className={s.project}>
                <p className="eyebrow">{p.category}</p>
                <h3 className={s.h3}><Link to={`/projects/${p.slug}`} className="text-link">{p.title}</Link></h3>
                <p>{p.description}</p>
                <p className={s.muted}>{p.stack.join(', ')}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="r-stack">
          <h2 id="r-stack" className={s.h2}>Стек и навыки</h2>
          <dl className={s.stackList}>
            {profile.stackGroups.map((g) => (
              <div key={g.title} className={s.stackRow}>
                <dt>{g.title}</dt>
                <dd>{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="r-contacts">
          <h2 id="r-contacts" className={s.h2}>Контакты</h2>
          <ul className={s.contacts}>
            <li><a href={contacts.telegram.url} target="_blank" rel="noopener noreferrer" className="text-link">Telegram {contacts.telegram.label} <ArrowUpRight size={14} /></a></li>
            <li><a href={contacts.github.url} target="_blank" rel="noopener noreferrer" className="text-link">github.com/s1vo <ArrowUpRight size={14} /></a></li>
          </ul>
        </section>
      </div>
    </article>
  );
}
