import Header from './components/Header.js';
import Footer from './components/Footer.js';
import KasaRouter from './components/KasaRouter.js';

import './styles/App.scss';

function App() {
  return (
    <div>
      <Header />
      <KasaRouter /> {/* Toutes les routes sont gérées ici */}
      <Footer />
    </div>
  );
}

export default App;
