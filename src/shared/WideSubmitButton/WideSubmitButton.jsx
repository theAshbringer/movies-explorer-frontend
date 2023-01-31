import React from 'react';
import './WideSubmitButton.css';

function WideSubmitButton({ className = '', children, ...otherProps }) {
  return (
    <button type="submit" className={`wide-submit-btn ${className}`} {...otherProps}>{children}</button>
  );
}

export default WideSubmitButton;
