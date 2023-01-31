import React from 'react';
import './PageTitle.css';

function PageTitle({ className = '', children }) {
  return (
    <h1 className={`page-title ${className}`}>{children}</h1>
  );
}

export default PageTitle;
