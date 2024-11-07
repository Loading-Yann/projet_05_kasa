// src/components/Rating.js
import React from 'react';
import '../styles/_variables.scss';
import './_Rating.scss';

function Rating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>&#9733;</span>
    );
  }
  return <div className="rating">{stars}</div>;
}

export default Rating;
