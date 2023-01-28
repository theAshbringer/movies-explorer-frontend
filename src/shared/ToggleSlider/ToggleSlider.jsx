import React from 'react';
import './ToggleSlider.css';

function ToggleSlider({ className = '', children, ...otherProps }) {
  return (
    <div className={`switch__container ${className}`}>
      <label className="switch" htmlFor="shortFilms">
        <input className="switch__checkbox" id="shortFilms" name="shortFilms" type="checkbox" {...otherProps} htmlFor />
        <div className="switch__slider" htmlFor="shortFilms" />
      </label>
      {children && <label className="switch__label" htmlFor="shortFilms">{children}</label>}
    </div>
  );
}

export default ToggleSlider;
