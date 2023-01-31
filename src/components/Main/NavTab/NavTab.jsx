import React from 'react';
import NavTabLink from './NavTabLink/NavTabLink';
import './NavTab.css';

function NavTab({ className }) {
  return (
    <nav className={`navtab ${className}`}>
      <NavTabLink to="about">О проекте</NavTabLink>
      <NavTabLink to="techs">Технологии</NavTabLink>
      <NavTabLink to="me">Студент</NavTabLink>
    </nav>
  );
}
export default NavTab;
