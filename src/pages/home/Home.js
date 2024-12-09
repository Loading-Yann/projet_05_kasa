import React, { useState, useEffect } from 'react';
import './_Home.scss';
import { PreviewCard } from '../../components';

function Home() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true); // Ajout de l'état loading

  useEffect(() => {
    fetch('http://localhost:5000/api/logements')
      .then((response) => {
        if (!response.ok) throw new Error('Erreur de chargement des données');
        return response.json();
      })
      .then((data) => {
        setLogements(data);
        setLoading(false); // Changer l'état à false une fois les données chargées
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Même si l'API échoue, on cache le loader
      });
  }, []);

  return (
    <div className="home">
      <div className="home-banner">
        <img
          src={require('../../img/image_source1.jpeg')}
          alt="Bannière de la page d'accueil"
          className="home-banner-image"
        />
        <h1 className="home-banner-text">
          <span className="home-banner-text-line1">Chez vous,&nbsp;</span>
          <span className="home-banner-text-line2">partout et ailleurs</span>
        </h1>
      </div>

      {/* Afficher le loader pendant le chargement des données */}
      {loading ? (
        <div className="loader">
          <span>Chargement...</span> {/* Remplacer par un loader visuel si tu veux */}
        </div>
      ) : (
        <div className="home-cards">
          {logements.map((logement) => (
            <PreviewCard key={logement.id} logement={logement} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
