import React from 'react';
import Button from '../Button/Button';
import './LikeButton.css';

function LikeButton({ isActive, className = '', ...otherProps }) {
  return (
    <Button
      className={`like-button ${className} ${isActive && 'like-button_active'}`}
      type="button"
      aria-label="Поставить лайк"
      {...otherProps}
    />
  );
}

export default LikeButton;
