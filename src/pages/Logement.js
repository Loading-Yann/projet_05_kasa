// src/pages/Logement.js
import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Card from '../components/Card'; // Importer le composant Card

function Logement() {
  const { id } = useParams(); // Récupérer l'ID du logement depuis l'URL
  const logement = logements.find((item) => item.id === id); // Trouver le logement correspondant

  if (!logement) {
    return <div>Logement non trouvé</div>; // Message d'erreur si le logement n'est pas trouvé
  }

  return (
    <div>
      {/* Utiliser le composant Card pour afficher les détails du logement */}
      <Card logement={logement} />
    </div>
  );
}

export default Logement;
