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
      {isOpen && <div className="drawer-content">{children}</div>}
    </div>
  );
}

export default Drawer;
