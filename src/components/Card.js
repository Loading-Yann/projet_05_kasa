// src/components/Card.js
import React from 'react';
import './_Card.scss';

function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://via.placeholder.com/150" alt="Logement" />
      </div>
      <h2 className="card-title">Titre du Logement</h2>
    </div>
  );
}

export default Card;
