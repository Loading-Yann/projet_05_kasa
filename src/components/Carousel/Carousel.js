import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowButton } from '../../components';
import './_Carousel.scss';

function Carousel({ logement }) {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Vérifie le nombre d'images dans le logement
  const hideArrows = logement.pictures.length <= 1;

  const handleNext = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  const handlePrev = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);

  return (
    <div className="carousel">
      <div className="card-image-container">
        <img
          src={logement.pictures[currentImageIndex]}
          alt={`Logement - ${logement.title}`}
          className="card-image"
        />

        {/* Conteneur de flèches avec la classe hide-arrow si nécessaire */}
        <div className={`carousel-arrow left ${hideArrows ? 'hide-arrow' : ''}`}>
          <ArrowButton
            direction="left"
            onClick={handlePrev}
          />
        </div>

        <div className={`carousel-arrow right ${hideArrows ? 'hide-arrow' : ''}`}>
          <ArrowButton
            direction="right"
            onClick={handleNext}
          />
        </div>

        <div className="carousel-counter">
          {currentImageIndex + 1} / {logement.pictures.length}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
