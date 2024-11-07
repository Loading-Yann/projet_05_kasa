// src/pages/Apropos.js
import React from 'react';
import './_Apropos.scss';
import { aboutList } from '../data/aboutList';
import Drawer from '../components/Drawer'; // Importer le composant Drawer

function Apropos() {
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
            <Drawer title={item.title}>
              <p className="apropos-content-text">{item.content}</p>
            </Drawer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apropos;
