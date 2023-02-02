import React from 'react';
import './SectionTitle.css';

function SectionTitle({ className, children, ...otherProps }) {
  return (
    <h2 className={`section-title ${className}`} {...otherProps}>
      {children}
    </h2>
  );
}

export default SectionTitle;
