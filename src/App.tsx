import { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Loader } from './components/Loader';
import { useHashScroll } from './hooks';
import { NotFoundPage } from './pages/NotFoundPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProductPage } from './pages/ProductPage';
import { ProjectPage } from './pages/ProjectPage';
import { ResumePage } from './pages/ResumePage';

const previewMode = new URLSearchParams(window.location.search).has('loader');

function Layout() {
  useHashScroll();
  const [loaderKey, setLoaderKey] = useState(1); // 0 = closed; bump to relaunch
  const appRef = useRef<HTMLDivElement>(null);
  const loading = loaderKey > 0;

  // block the page behind the loader; hand focus back to the content afterwards
  useEffect(() => {
    const el = appRef.current;
    if (!el) return;
    el.toggleAttribute('inert', loading);
    el.setAttribute('aria-busy', String(loading));
    if (!loading) document.getElementById('main')?.focus({ preventScroll: true });
  }, [loading]);
  const close = useCallback(() => setLoaderKey(0), []);

  return (
    <>
      {loading && <Loader key={loaderKey} preview={previewMode} onClose={close} />}
      {previewMode && !loading && (
        <button type="button" className="btn btn--dark loader-replay" onClick={() => setLoaderKey((k) => k + 1)}>
          Показать лоудер ещё раз
        </button>
      )}
      <div ref={appRef} className="app">
      <a href="#main" className="skip-link">К содержимому</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      </div>
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
