// src/pages/Home.js
import React from 'react';
import './_Home.scss';
import Card from '../components/Card';

function Home() {
  return (
    <div className="home">
      <div className="home-banner">
        <img 
          src={require('../img/image_source1.jpeg')} 
          alt="Bannière de la page d'accueil" 
          className="home-banner-image" 
        />
        <h1 className="home-banner-text">Chez vous, <br /> partout et ailleurs</h1>
      </div>

      <div className="home-cards">
        {}
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
