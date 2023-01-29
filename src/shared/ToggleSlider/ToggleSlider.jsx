import React from 'react';
import './ToggleSlider.css';

function ToggleSlider({ className = '', children, ...otherProps }) {
  return (
    <div className={`switch__container ${className}`}>
      <label className="switch" htmlFor="shortFilms">
        <input className="switch__checkbox" id="shortFilms" name="shortFilms" type="checkbox" {...otherProps} />
        <div className="switch__slider" />
      </label>
      {children && <label className="switch__label" htmlFor="shortFilms">{children}</label>}
    </div>
  );
}

export default ToggleSlider;
