import React from 'react';
import MyLink from '../../../../shared/MyLink/MyLink';
import './Work.css';

function Work({ className = '', link, children }) {
  return (
    <MyLink type="anchor" className={`work ${className}`} href={link} target="_blank" rel="noreferrer">
      <h3 className="work__title">
        {children}
      </h3>
      <div className="work__arrow">&#8599;</div>
    </MyLink>
  );
}

export default Work;
