import React from 'react';
import './Work.css';

function Work({ className = '', link, children }) {
  return (
    <a className={`work ${className}`} href={link} target="_blank" rel="noreferrer">
      <h3 className="work__title">
        {children}
      </h3>
      <div className="work__arrow">&#8599;</div>
    </a>
  );
}

export default Work;
