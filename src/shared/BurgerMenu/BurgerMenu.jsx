import React from 'react';
import './BurgerMenu.css';

function BurgerMenu({ className = '', isOpened, handleClick }) {
  const fullClassName = `burger ${isOpened ? 'burger_opened' : ''} ${className}`;

  return (
    <button className={fullClassName} type="button" aria-label="Меню" onClick={handleClick} />
  );
}

export default BurgerMenu;
