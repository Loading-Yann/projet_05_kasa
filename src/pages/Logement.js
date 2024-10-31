// src/pages/Logement.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import logementsData from '../data/logements.json';
import { ICONS } from '../utils/config';
import './_Logement.scss';

function Logement() {
  const { id } = useParams(); 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const initialIndex = logementsData.findIndex((logement) => logement.id === id);
    if (initialIndex !== -1) {
      setCurrentIndex(initialIndex);
    }
  }, [id]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logementsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + logementsData.length) % logementsData.length
    );
  };

  const logement = logementsData[currentIndex]; 

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      <div className="carousel">
        <button onClick={handlePrev} className="carousel-button left">
          <i className={`fas ${ICONS.arrowLeft}`} />
        </button>

        <Card logement={logement} />

        <button onClick={handleNext} className="carousel-button right">
          <i className={`fas ${ICONS.arrowRight}`} />
        </button>
      </div>
    </div>
  );
}

export default Logement;
