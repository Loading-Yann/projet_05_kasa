import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowButton } from '../../components';
import './_Carousel.scss';

function Carousel({ logement }) {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Si aucun logement n'est trouvé, afficher un message
  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  // Gère le changement d'index pour les images
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  return (
    <div className="carousel">
      <div className="card-image-container">
        <img
          src={logement.pictures[currentImageIndex]}
          alt={`Logement - ${logement.title}`}
          className="card-image"
        />
        <ArrowButton direction="left" onClick={handlePrev} className="carousel-button left" />
        <ArrowButton direction="right" onClick={handleNext} className="carousel-button right" />
        <div className="carousel-counter">
          {currentImageIndex + 1} / {logement.pictures.length}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
