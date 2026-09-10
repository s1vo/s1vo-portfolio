import { profile } from '../data/portfolio';
import s from './Experience.module.css';

export function Experience() {
  const steps = profile.careerSteps;
  return (
    <section id="experience" className={`on-dark ${s.section}`} aria-labelledby="experience-title">
      <div className="container">
        <p className="eyebrow eyebrow--on-dark">02 / Опыт и подход</p>
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
        <ul className={`container ${s.stack}`} aria-label="Стек">
          {profile.stack.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
