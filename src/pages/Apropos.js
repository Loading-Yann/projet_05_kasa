// src/pages/Apropos.js
import React, { useState } from 'react';
import './_Apropos.scss';
import { aboutList } from '../data/aboutList';

function Apropos() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="apropos">
      <img
        src={require('../img/image_source2.jpeg')}
        alt="Image de fond du footer"
        className="apropos-image"
      />

      <div className="apropos-content">
        {aboutList.map((item, index) => (
          <div key={index} className="apropos-item">
            <button className="apropos-button" onClick={() => handleToggle(index)}>
              {item.title}
              <span className="arrow">
                {openIndexes.includes(index) ? (
                  <i className="fas fa-caret-up"></i> // Flèche vers le haut
                ) : (
                  <i className="fas fa-caret-down"></i> // Flèche vers le bas
                )}
              </span>
            </button>

            {openIndexes.includes(index) && (
              <p className="apropos-content-text">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apropos;
