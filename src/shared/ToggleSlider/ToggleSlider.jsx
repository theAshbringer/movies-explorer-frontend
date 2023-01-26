import React from 'react';
import './ToggleSlider.css';

function ToggleSlider({ className = '' }) {
  return (
    <label className={`switch ${className}`} htmlFor="shortFilms">
      <input className="switch__checkbox" id="shortFilms" name="shortFilms" type="checkbox" htmlFor />
      <div className="switch__slider" htmlFor="shortFilms" />
    </label>
  );
}

export default ToggleSlider;
