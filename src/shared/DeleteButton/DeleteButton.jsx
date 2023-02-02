import React from 'react';
import Button from '../Button/Button';
import './DeleteButton.css';

function DeleteButton({ className = '', ...otherProps }) {
  return (
    <Button className={`delete-button ${className}`} {...otherProps} type="button" aria-label="Удалить" />
  );
}

export default DeleteButton;
