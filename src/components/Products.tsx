import { Link } from 'react-router-dom';
import { products } from '../data/portfolio';
import { ArrowRight } from './Icons';
import s from './Products.module.css';

export function Products() {
  return (
    <section id="products" className={`container section ${s.section}`} aria-labelledby="products-title">
      <p className="eyebrow">02 / Продукты</p>
      <h2 id="products-title" className={`h2 ${s.heading}`}>Собственные продукты</h2>
      <p className={s.lead}>Инструменты для разработки и эксплуатации, которые проектирую и строю сам: от системного дизайна до интерфейса.</p>
      <ul className={s.grid}>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.slug}`} className={s.card} aria-label={`Продукт: ${p.name} — ${p.tagline}`}>
              <img
                src={p.screenshot.src}
                width={p.screenshot.width}
                height={p.screenshot.height}
                alt=""
                loading="lazy"
                decoding="async"
                className={s.shot}
              />
              <div className={s.body}>
                <div className={s.titleRow}>
                  <h3 className={s.name}>{p.name}</h3>
                  <span className={s.tagline}>{p.tagline}</span>
                  <span className={`arrow-circle ${s.arrow}`} aria-hidden="true"><ArrowRight size={16} /></span>
                </div>
                <ul className={s.tags} aria-label="Стек">
                  {p.stack.slice(0, 4).map((t) => <li key={t} className="tag">{t}</li>)}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
