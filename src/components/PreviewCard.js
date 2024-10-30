// src/components/PreviewCard.js
import React from 'react';
import './_PreviewCard.scss';

function PreviewCard({ logement, onClick }) {
  return (
    <div className="preview-card" onClick={onClick}>
      <img
        src={logement.cover}
        alt={logement.title}
        className="preview-card-cover"
      />
      <h2 className="preview-card-title">{logement.title}</h2>
    </div>
  );
}

export default PreviewCard;
