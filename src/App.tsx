import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useHashScroll } from './hooks';
import { NotFoundPage } from './pages/NotFoundPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectPage } from './pages/ProjectPage';
import { ResumePage } from './pages/ResumePage';

function Layout() {
  useHashScroll();
  return (
    <>
      <a href="#main" className="skip-link">К содержимому</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
