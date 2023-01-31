import React from 'react';
import Button from '../Button/Button';
import './BurgerMenu.css';

function BurgerMenu({ className = '', isOpened, handleClick }) {
  const fullClassName = `burger ${isOpened ? 'burger_opened' : ''} ${className}`;

  return (
    <Button className={fullClassName} type="button" aria-label="Меню" onClick={handleClick} />
  );
}

export default BurgerMenu;
