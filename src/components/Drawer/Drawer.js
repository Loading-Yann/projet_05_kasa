import React, { useState } from 'react';
import { ICONS } from '../../utils/config';
import '../../styles/_variables.scss';
import './_Drawer.scss';

function Drawer({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="drawer">
      <button className="drawer-button" onClick={toggleOpen}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
          <i className={`fa-solid ${ICONS.arrowDown}`}></i>
        </span>
      </button>
      {/* Ajout de la classe "open" conditionnellement */}
      <div className={`drawer-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Drawer;
