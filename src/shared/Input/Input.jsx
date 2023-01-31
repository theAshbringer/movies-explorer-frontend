import React from 'react';
import './Input.css';

export default function Input({
  name,
  register,
  className,
  children,
  id,
  error = null,
  ...otherProps
}) {
  return (
    <div className={`input ${className}`}>
      <label className="input__label" htmlFor={id}>{children}</label>
      <input className={`input__input  ${error && 'input__input_invalid'}`} id={id} {...otherProps} {...register(name)} />
      {error && <p role="alert" className="input__error">{error}</p>}
    </div>
  );
}
