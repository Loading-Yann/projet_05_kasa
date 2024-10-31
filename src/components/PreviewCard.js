// src/components/PreviewCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './_PreviewCard.scss';

function PreviewCard({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="preview-card">
      <img
        src={logement.cover}
        alt={logement.title}
        className="preview-card-cover"
      />
      <h2 className="preview-card-title">{logement.title}</h2>
    </Link>
  );
}

export default PreviewCard;
