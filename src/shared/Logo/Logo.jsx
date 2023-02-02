import React from 'react';
import MyLink from '../MyLink/MyLink';
import './Logo.css';

function Logo({ className = '' }) {
  return (
    <MyLink className={`logo ${className}`} to="/" />
  );
}

export default Logo;
