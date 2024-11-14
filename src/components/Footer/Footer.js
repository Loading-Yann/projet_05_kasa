// src/components/Footer.js
import React from 'react';
import './_Footer.scss';
import logo from '../../img/LOGO_noir.svg';

function Footer() {
  return (
    <footer className="footer">
      <h2> <img src={logo} alt="KASA" /></h2>
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
