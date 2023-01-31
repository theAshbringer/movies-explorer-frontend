import React from 'react';
import './DeleteButton.css';

function DeleteButton({ className = '', ...otherProps }) {
  return (
    <button className={`delete-button ${className}`} {...otherProps} type="button" aria-label="Удалить" />
  );
}

export default DeleteButton;
