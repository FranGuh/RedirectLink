import React from 'react';
import './LinkButtom.css';

const LinkButtom = ({ text, Icon, href, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); 
      onClick(); 
    }

  };

  return (
    <div className='LinkButtom'>
      <a 
        href={href} 
        onClick={handleClick} // Maneja el clic
        target="_blank"      // abre en nueva pestaña
        rel="noopener noreferrer"
      >
        <Icon className='LinkButtom__icon' />
        {text}
      </a>
    </div>
  );
};

export default LinkButtom;