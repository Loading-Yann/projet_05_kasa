import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './_Card.scss';
import ArrowButton from './ArrowButton';
import Drawer from './Drawer';
import Rating from './Rating';
import logementsData from '../data/logements.json';

function Card() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const initialIndex = logementsData.findIndex((logement) => logement.id === id);
    if (initialIndex !== -1) {
      setCurrentImageIndex(0); // Réinitialiser l'index de l'image à 0 lorsqu'on change de logement
    }
  }, [id]);

  const logement = logementsData.find((logement) => logement.id === id);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      <div className="carousel">
        <div className="card">
          <div className="card-image-container">
            <img src={logement.pictures[currentImageIndex]} alt={`Logement - ${logement.title}`} className="card-image" />
            <ArrowButton direction="left" onClick={handlePrev} className="carousel-button left" />
            <ArrowButton direction="right" onClick={handleNext} className="carousel-button right" />
            <div className="carousel-counter">
              {currentImageIndex + 1} / {logement.pictures.length}
            </div>
          </div>

          <h2 className="card-title">{logement.title}</h2>
          <p className="card-location">{logement.location}</p>

          <div className="card-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="card-tag">{tag}</span>
            ))}
          </div>

          <div className="card-rating">
            <Rating rating={parseInt(logement.rating)} />
            <div className="card-host">
              <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
              <span className="host-name">{logement.host.name}</span>
            </div>
          </div>

          <Drawer title="Description">
            <p>{logement.description}</p>
          </Drawer>
          
          <Drawer title="Équipements">
            <ul className="equipments-list">
              {logement.equipments.map((equipment, index) => (
                <li key={index} className="equipment">{equipment}</li>
              ))}
            </ul>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Card;
