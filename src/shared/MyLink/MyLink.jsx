import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MyLink.css';

function MyLink({
  type = 'simple',
  className,
  children,
  ...otherProps
}) {
  return (
    <>
      {type === 'nav'
        && (
          <NavLink className={`my-link ${className}`} {...otherProps}>
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
          <a className={`my-link ${className}`} {...otherProps}>
            {children}
          </a>
        )}
    </>
  );
}

export default MyLink;
