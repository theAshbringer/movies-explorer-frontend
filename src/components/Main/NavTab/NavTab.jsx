import React from 'react';
import NavTabLink from './NavTabLink/NavTabLink';
import './NavTab.css';

function NavTab({ className }) {
  return (
    <nav className={`navtab ${className}`}>
      <NavTabLink>О проекте</NavTabLink>
      <NavTabLink>Технологии</NavTabLink>
      <NavTabLink>Студент</NavTabLink>
    </nav>
  );
}
export default NavTab;
