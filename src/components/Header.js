// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './_Header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">titre kasa entête</h1>
      <nav className="header__nav">
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/apropos" activeClassName="active">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
