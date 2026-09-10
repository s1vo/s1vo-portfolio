import { profile } from '../data/portfolio';
import s from './Experience.module.css';

export function Experience() {
  const steps = profile.careerSteps;
  return (
    <section id="experience" className={`on-dark ${s.section}`} aria-labelledby="experience-title">
      <div className="container">
        <p className="eyebrow eyebrow--on-dark">03 / Опыт и подход</p>
        <h2 id="experience-title" className={`h2 ${s.heading}`}>Понимаю код. Вижу систему целиком.</h2>
        <div className={s.cols}>
          <div>
            <p className={s.text}>{profile.experienceText}</p>
            <ol className={s.path} aria-label="Карьерный путь">
              {steps.map((step, i) => (
                <li key={step} className={`${s.step} ${i === steps.length - 1 ? s.stepCurrent : ''}`}>
                  <span className={s.stepDot} aria-hidden="true" />
                  <span className={s.stepLabel}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <ol className={s.competencies} aria-label="Компетенции">
            {profile.competencies.map((c, i) => (
              <li key={c} className={s.competency}>
                <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
                <span>{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div id="stack" className={s.stackRow}>
        <div className="container">
          <div className={s.stackHead}>
            <h3 className={s.stackTitle}>Стек и навыки</h3>
            <p className={s.stackNote}>Что использую в работе: от управления командой до инфраструктуры.</p>
          </div>
          <dl className={s.sheet}>
            {profile.stackGroups.map((g) => (
              <div key={g.title} className={s.sheetRow}>
                <dt className={s.sheetTitle}>
                  {g.title}
                  <span className={s.sheetNote}>{g.note}</span>
                </dt>
                <dd className={s.sheetItems}>
                  {g.items.map((t) => <span key={t}>{t}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
