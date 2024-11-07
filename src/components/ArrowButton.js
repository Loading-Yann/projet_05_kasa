import React from 'react';
import '../styles/_variables.scss';
import './_ArrowButton.scss';
import { ICONS } from '../utils/config'; // Import de ICONS depuis config.js

function ArrowButton({ direction, onClick }) {
  return (
    <button onClick={onClick} className={`carousel-button ${direction}`}>
      <i className={`fas ${direction === 'left' ? ICONS.arrowLeft : ICONS.arrowRight}`} />
    </button>
  );
}

export default ArrowButton;
