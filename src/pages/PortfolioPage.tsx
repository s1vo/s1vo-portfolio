import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { FactStrip } from '../components/FactStrip';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { profile } from '../data/portfolio';
import { useMeta } from '../hooks';

export function PortfolioPage() {
  useMeta(`${profile.name} — ${profile.role}`, `${profile.role}. ${profile.summary}`);
  return (
    <>
      <Hero />
      <FactStrip />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
