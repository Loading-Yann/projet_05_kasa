// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './_Header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Kasa</h1>
      <nav className="header__nav">
      <NavLink to="/" exact="true">Accueil</NavLink>
      <NavLink to="/a-propos" exact="true">À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
