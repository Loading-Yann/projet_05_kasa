// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import './_Home.scss';
import logements from '../data/logements.json'; // Mise à jour du chemin
import Card from '../components/Card';

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/logements')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur de chargement des données');
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch((error) => console.error(error));
  }, []);

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
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
}

export default Home;
