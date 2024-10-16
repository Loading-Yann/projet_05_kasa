import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Kasa</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/apropos">À propos</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}

export default Header;
