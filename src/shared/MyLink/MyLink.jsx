import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MyLink.css';

function MyLink({
  type = 'simple',
  className = '',
  activeClassName = '',
  children,
  ...otherProps
}) {
  const activeLinkClass = ({ isActive }) => `my-link ${className} ${isActive ? activeClassName : ''}`;
  return (
    <>
      {type === 'nav'
        && (
          <NavLink className={activeLinkClass} {...otherProps}>
            {children}
          </NavLink>
        )}
      {type === 'simple'
        && (
          <Link className={`my-link ${className}`} {...otherProps}>
            {children}
          </Link>
        )}
      {type === 'anchor'
        && (
          <a className={`my-link ${className}`} {...otherProps} target="_blank">
            {children}
          </a>
        )}
    </>
  );
}

export default MyLink;
