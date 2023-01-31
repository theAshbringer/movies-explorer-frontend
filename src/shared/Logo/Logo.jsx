import React from 'react';
import './Logo.css';

function Logo({ className = '' }) {
  return (
    <div className={`logo ${className}`} />
  );
}

export default Logo;
