import React from 'react';
import './Button.css';

export default function Button({
  mode = 'text',
  className = '',
  children,
  ...otherProps
}) {
  const buttonType = {
    text: 'button_style_text',
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
