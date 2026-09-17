import { Link, useParams } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { ArrowRight } from '../components/Icons';
import { findProduct, profile, products } from '../data/portfolio';
import { useMeta } from '../hooks';
import { NotFoundPage } from './NotFoundPage';
import s from './ProjectPage.module.css';
import p from './ProductPage.module.css';

export function ProductPage() {
  const { slug } = useParams();
  const product = findProduct(slug);
  useMeta(product ? `${product.name} — ${product.tagline} — ${profile.name}` : 'Продукт не найден', product?.description ?? '');
  if (!product) return <NotFoundPage />;

  const others = products.filter((x) => x.id !== product.id);
  return (
    <>
      <article className={`container ${s.page}`}>
        <Link to="/#products" className={`text-link ${s.back}`}>К продуктам</Link>
        <header className={p.head}>
          <div>
            <p className="eyebrow">Собственный продукт · {product.status}</p>
            <div className={p.titleRow}>
              <img src={product.logo} width={56} height={56} alt="" className={p.logo} />
              <h1 className={s.title}>{product.name}</h1>
            </div>
            <p className={s.lead}>{product.tagline}</p>
          </div>
          <ul className={p.stack} aria-label="Стек">
            {product.stack.map((t) => <li key={t} className="tag">{t}</li>)}
          </ul>
        </header>
        {product.screenshot && (
          <figure className={p.figure}>
            <img
              src={product.screenshot.src}
              width={product.screenshot.width}
              height={product.screenshot.height}
              alt={product.screenshot.alt}
              className={p.shot}
              fetchpriority="high"
            />
          </figure>
        )}

        <div className={s.blocks}>
          <section className={s.block} aria-labelledby="pr-about">
            <h2 id="pr-about" className={s.h2}>О продукте</h2>
            <p>{product.description}</p>
            <h2 className={`${s.h2} ${p.h2gap}`}>Что демонстрирует</h2>
            <ul className={p.demo}>{product.demonstrates.map((d) => <li key={d} className="tag tag--outline">{d}</li>)}</ul>
          </section>
          <section className={s.block} aria-labelledby="pr-features">
            <h2 id="pr-features" className={s.h2}>Возможности</h2>
            <ul className={s.list}>{product.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </section>
        </div>

        {others.length > 0 && <nav className={s.others} aria-label="Другие продукты">
          <h2 className={s.h2}>Другие продукты</h2>
          <ul className={s.otherList}>
            {others.map((x) => (
              <li key={x.id}>
                <Link to={`/products/${x.slug}`} className={s.otherLink}>
                  <span className="eyebrow">{x.tagline}</span>
                  <span className={s.otherTitle}><img src={x.logo} width={22} height={22} alt="" className={p.miniLogo} />{x.name} <ArrowRight size={18} /></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>}
      </article>
      <Contact />
    </>
  );
}
