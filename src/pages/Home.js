// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Si tu prévois de naviguer avec des liens
import './_Home.scss';
import logements from '../data/logements.json';
import PreviewCard from '../components/PreviewCard';

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

  const handleCardClick = (logementId) => {
    // Logique pour naviguer vers le détail du logement
    // Utilise useHistory ou Link pour naviguer vers le détail
    window.location.href = `/logement/${logementId}`; // Redirection basique (pas la meilleure pratique)
  };

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
          <PreviewCard
            key={logement.id}
            logement={logement}
            onClick={() => handleCardClick(logement.id)} // Appel de la fonction au clic
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
