import React from 'react';
import './Button.css';

export default function Button({
  mode = 'blank',
  className = '',
  isActive = false,
  children,
  ...otherProps
}) {
  const buttonType = {
    blank: '',
    solidWide: 'button_style_solid-wide',
    like: `button_style_like ${isActive && 'button_active'}`,
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={['button', buttonType[mode], className].join(' ')}
      {...otherProps}
    >
      {children}
    </button>
  );
}
