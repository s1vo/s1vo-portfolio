import { profile } from '../data/portfolio';
import s from './FactStrip.module.css';

export function FactStrip() {
  return (
    <div className="container">
      <dl className={s.strip}>
        {profile.facts.map((f) => (
          <div key={f.label} className={s.fact}>
            <dd className={s.value}>{f.value}</dd>
            <dt className={s.label}>{f.label}</dt>
          </div>
        ))}
        <div className={`${s.fact} ${s.directions}`}>
          <dt className="visually-hidden-inline">Направления</dt>
          <dd className={s.dirList}>
            {profile.directions.map((d) => <span key={d}>{d}</span>)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
