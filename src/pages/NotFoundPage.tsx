import { Link } from 'react-router-dom';
import { ArrowRight } from '../components/Icons';
import { useMeta } from '../hooks';

export function NotFoundPage() {
  useMeta('Страница не найдена', 'Такой страницы нет.');
  return (
    <section className="container section" aria-labelledby="nf-title" style={{ minHeight: '50vh' }}>
      <p className="eyebrow">404</p>
      <h1 id="nf-title" className="h2" style={{ marginTop: 12 }}>Такой страницы нет</h1>
      <p style={{ marginTop: 16, color: 'var(--color-muted)', maxWidth: '44ch' }}>
        Возможно, ссылка устарела или в адресе опечатка.
      </p>
      <Link to="/" className="btn btn--dark" style={{ marginTop: 24 }}>На главную <ArrowRight /></Link>
    </section>
  );
}
