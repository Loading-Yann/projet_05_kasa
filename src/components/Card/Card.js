import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './_Card.scss';
import { ArrowButton, Drawer, Rating, Carousel } from '../../components';
import logementsData from '../../data/logements.json';

function Card() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement">
      <Carousel logement={logement} />
      <div className="card">
        <div className="card-header">
          <div className="card-info">
            <h2 className="card-title">{logement.title}</h2>
            <p className="card-location">{logement.location}</p>
            <div className="card-tags">
              {logement.tags?.map((tag, index) => (
                <span key={index} className="card-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="card-host-container">
            <div className="card-rating">
              <Rating rating={parseInt(logement.rating)} />
            </div>
            <div className="card-host-info">
              <div className="host-details">
                <span className="host-name">{logement.host.name.split(' ')[0]}</span>
                <span className="host-surname">{logement.host.name.split(' ')[1]}</span>
              </div>
              <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
            </div>
          </div>
        </div>
        <div class="drawers">
        
        <Drawer title="Description">
          <p>{logement.description}</p>
        </Drawer>

        <Drawer title="Équipements">
          <ul className="equipments-list">
            {logement.equipments?.map((equipment, index) => (
              <li key={index} className="equipment-item">{equipment}</li>
            ))}
          </ul>
        </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Card;
