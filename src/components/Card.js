// src/components/Card.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './_Card.scss';
import ArrowButton from './ArrowButton';
import Drawer from './Drawer';
import Rating from './Rating';
import logementsData from '../data/logements.json';

function Card() {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const initialIndex = logementsData.findIndex((logement) => logement.id === id);
    if (initialIndex !== -1) {
      setCurrentIndex(initialIndex);
    }
  }, [id]);

  const logement = logementsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logementsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + logementsData.length) % logementsData.length
    );
  };

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      <div className="carousel">
        <ArrowButton direction="left" onClick={handlePrev} />
        
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
            <div className="equipments-list">
              {logement.equipments.map((equipment, index) => (
                <span key={index} className="equipment">{equipment}</span>
              ))}
            </div>
          </Drawer>
        </div>

        <ArrowButton direction="right" onClick={handleNext} />
      </div>
    </div>
  );
}

export default Card;
