// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './_Header.scss';
import logo from '../../img/LOGO.svg'; 

function Header() {
  return (
    <header className="header">
      <h1 className="header__title"> <img src={logo} alt="KASA" /> </h1>
      <nav className="header__nav">
        <NavLink to="/" exact="true">Accueil</NavLink>
        <NavLink to="/apropos" exact="true">À Propos</NavLink> 
      </nav>
    </header>
  );
}

export default Header;
