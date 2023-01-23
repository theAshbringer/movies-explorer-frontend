import React from 'react';
import './SectionTitle.css';

function SectionTitle({ className, children }) {
  return (
    <div className={className}>
      <h2 className="section-title">
        {children}
      </h2>
    </div>
  );
}

export default SectionTitle;
