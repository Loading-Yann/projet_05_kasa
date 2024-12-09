import React from 'react';
import '../../styles/_variables.scss';
import './_ArrowButton.scss';
import { ICONS } from '../../utils/config'; 
import Header from '../Header/Header';

function ArrowButton({ direction, onClick }) {
  return (
    <div>
    <button onClick={onClick} className={`carousel-button ${direction}`}>
      <i className={`fas ${direction === 'left' ? ICONS.arrowLeft : ICONS.arrowRight}`} />
    </button>
    </div>
  );
}

export default ArrowButton;
