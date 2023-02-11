import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ children, className = '' }) {
  return (
    <p role="alert" className={`error ${className}`}>{children}</p>
  );
}

export default ErrorMessage;
