import { profile } from '../data/portfolio';
import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={`container ${s.footer}`}>
      <span>{profile.name}</span>
      <span>{profile.role}</span>
    </footer>
  );
}
