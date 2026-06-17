import PortfolioPage from './components/PortfolioPage';
import { usePortfolioEffects } from './hooks/usePortfolioEffects';

export default function App() {
  usePortfolioEffects();

  return <PortfolioPage />;
}
