import React from 'react';
import './SectionTitle.css';

function SectionTitle({ className, children }) {
  return (
    <h2 className={`section-title ${className}`}>
      {children}
    </h2>
  );
}

export default SectionTitle;
