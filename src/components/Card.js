// src/components/Card.js
import React, { useState } from 'react';
import './_Card.scss';

function Card({ logement }) {
  // Gère les états pour afficher ou non la description et les équipements
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  // Si le logement n'est pas défini, retourne null pour éviter les erreurs
  if (!logement) return null;

  // Fonctions de bascule pour l'affichage de la description et des équipements
  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleEquipments = () => setShowEquipments(!showEquipments);

  return (
    <div className="card">
      <img
        src={logement.cover}
        alt={logement.title}
        className="card-cover"
      />
      <h2 className="card-title">{logement.title}</h2>
      <p className="card-location">{logement.location}</p>
      <button onClick={toggleDescription}>Description</button>
      {showDescription && <p>{logement.description}</p>}
      <button onClick={toggleEquipments}>Équipements</button>
      {showEquipments && (
        <ul>
          {logement.equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;
