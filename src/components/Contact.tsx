import { contacts } from '../data/portfolio';
import { ArrowUpRight } from './Icons';
import s from './Contact.module.css';

export function Contact() {
  return (
    <section id="contacts" className={`container ${s.section}`} aria-labelledby="contacts-title">
      <div className={s.row}>
        <div>
          <p className="eyebrow">03 / Контакты</p>
          <h2 id="contacts-title" className={`h2 ${s.heading}`}>Обсудим вашу задачу?</h2>
        </div>
        <div className={s.actions}>
          <a href={contacts.telegram.url} target="_blank" rel="noopener noreferrer" className={`btn btn--action ${s.primary}`}>
            Написать в Telegram <ArrowUpRight />
          </a>
          <a href={contacts.telegram.url} target="_blank" rel="noopener noreferrer" className={s.link}>{contacts.telegram.label}</a>
          <a href={contacts.github.url} target="_blank" rel="noopener noreferrer" className={s.link}>
            {contacts.github.label} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
