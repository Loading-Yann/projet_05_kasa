// src/components/Card.js
import React, { useState } from 'react';
import './_Card.scss';
import { ICONS } from '../utils/config'; // Importer les icônes

function Card({ logement }) {
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  const handleToggleDescription = () => setShowDescription(!showDescription);
  const handleToggleEquipments = () => setShowEquipments(!showEquipments);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="card">
      <img src={logement.cover} alt={logement.title} className="card-cover" />
      <h2 className="card-title">{logement.title}</h2>
      <p className="card-location">{logement.location}</p>
      
      <div className="card-tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="card-tag">{tag}</span>
        ))}
      </div>

      <div className="card-rating">
        {renderStars(parseInt(logement.rating))}
        <div className="card-host">
          <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          <span className="host-name">{logement.host.name}</span>
        </div>
      </div>

      {/* Bouton Description */}
      <button className="card-button" onClick={handleToggleDescription}>
        Description
        <span className={`arrow ${showDescription ? 'open' : 'closed'}`}>
          <i className={`fa-solid ${ICONS.arrowDown}`}></i>
        </span>
      </button>
      {showDescription && <p className="card-description">{logement.description}</p>}

      {/* Bouton Équipements */}
      <button className="card-button" onClick={handleToggleEquipments}>
        Équipements
        <span className={`arrow ${showEquipments ? 'open' : 'closed'}`}>
          <i className={`fa-solid ${ICONS.arrowDown}`}></i>
        </span>
      </button>
      {showEquipments && (
        <div className="card-equipments">
          {logement.equipments.map((equipment, index) => (
            <span key={index} className="equipment">{equipment}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
