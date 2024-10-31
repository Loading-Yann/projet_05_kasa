// src/components/Card.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams
import './_Card.scss';
import { ICONS } from '../utils/config'; 
import logementsData from '../data/logements.json';

function Card() {
  const { id } = useParams(); // Récupérer l'ID du logement depuis l'URL
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  // Utiliser useEffect pour définir l'index initial
  useEffect(() => {
    const initialIndex = logementsData.findIndex((logement) => logement.id === id);
    if (initialIndex !== -1) {
      setCurrentIndex(initialIndex);
    }
  }, [id]);

  const logement = logementsData[currentIndex];

  const handleToggleDescription = () => setShowDescription(!showDescription);
  const handleToggleEquipments = () => setShowEquipments(!showEquipments);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logementsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + logementsData.length) % logementsData.length
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>&#9733;</span>);
    }
    return stars;
  };

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      <div className="carousel">
        <button onClick={handlePrev} className="carousel-button left">
          <i className={`fas ${ICONS.arrowLeft}`} />
        </button>

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

          <button className="card-button" onClick={handleToggleDescription}>
            Description
            <span className={`arrow ${showDescription ? 'open' : 'closed'}`}>
              <i className={`fa-solid ${ICONS.arrowDown}`}></i>
            </span>
          </button>
          {showDescription && <p className="card-description">{logement.description}</p>}

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

        <button onClick={handleNext} className="carousel-button right">
          <i className={`fas ${ICONS.arrowRight}`} />
        </button>
      </div>
    </div>
  );
}

export default Card;
