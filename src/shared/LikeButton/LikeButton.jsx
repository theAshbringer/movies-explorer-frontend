import React, { useState } from 'react';
import Button from '../Button/Button';
import './LikeButton.css';

function LikeButton({ className = '' }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <Button className={`like-button ${className} ${isActive && 'like-button_active'}`} onClick={handleClick} type="button" aria-label="Поставить лайк" />
  );
}

export default LikeButton;
