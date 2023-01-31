import React from 'react';
import './Input.css';

export default function Input({
  className, children, id, error = null, ...otherProps
}) {
  return (
    <div className={`input ${className}`}>
      <label className="input__label" htmlFor={id}>{children}</label>
      <input className="input__input" id={id} {...otherProps} />
      {error && <p className="input__error">{error}</p>}
    </div>
  );
}
