import React from 'react';
import { Link } from 'react-scroll';
import './NavTabLink.css';

function NavTabLink({ to, children, ...otherProps }) {
  return (
    <Link className="navtab-link" smooth spy to={to} {...otherProps}>
      {children}
    </Link>
  );
}

export default NavTabLink;
