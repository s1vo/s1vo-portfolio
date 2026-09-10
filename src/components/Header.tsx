import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/portfolio';
import { ArrowUpRight, Close, Menu } from './Icons';
import s from './Header.module.css';

const links = [
  { to: '/#projects', label: 'Проекты' },
  { to: '/#products', label: 'Продукты' },
  { to: '/#experience', label: 'Опыт' },
  { to: '/#stack', label: 'Стек' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const close = () => setOpen(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`${s.header} no-print`}>
      <div className={`container ${s.bar}`}>
        <Link to="/" className={s.logo} aria-label="На главную">ms<span className={s.dot}>.</span></Link>
        <nav className={s.nav} aria-label="Основная навигация">
          {links.map((l) => <Link key={l.to} to={l.to} className={s.link}>{l.label}</Link>)}
        </nav>
        <div className={s.right}>
          <span className={s.status}><span className={s.statusDot} aria-hidden="true" />{profile.status}</span>
          <Link to="/#contacts" className={`btn btn--dark ${s.cta}`}>Связаться <ArrowUpRight /></Link>
          <button
            ref={btnRef}
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div id={menuId} className={s.mobileMenu} hidden={!open}>
        <nav className="container" aria-label="Мобильная навигация">
          <ul className={s.mobileList}>
            {links.map((l) => <li key={l.to}><Link to={l.to} className={s.mobileLink} onClick={close}>{l.label}</Link></li>)}
            <li><Link to="/#contacts" className={s.mobileLink} onClick={close}>Связаться</Link></li>
            <li className={s.mobileStatus}><span className={s.statusDot} aria-hidden="true" />{profile.status}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
