import React from 'react';
import './NavTabLink.css';

function NavTabLink({ children }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="navtab-link">
      {children}
    </a>
  );
}

export default NavTabLink;
