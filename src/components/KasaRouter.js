import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Apropos from '../pages/Apropos.js';
import Error from '../pages/Error.js';
import Home from '../pages/Home.js';

function KasaRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />  {/* Route de secours pour les pages non trouvées */}
      </Routes>
    </Router>
  );
}

export default KasaRouter;
