import TopBanner from './components/TopBanner';
import SubBanner from './components/SubBanner';
import BestDentists from './components/BestDentists';

import './App.css';

function App() {
  return (
    <div>
      <header>
        <TopBanner />
        <SubBanner />
      </header>
      <section className="bestDentistsSection">
        <BestDentists />
      </section>
    </div>
  );
}

export default App;
