import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header({ isLoggedIn = false }) {
  return (
    <header className="header">
      <div className="header__logo" />
      {!isLoggedIn ? (
        <>
          <a className="header__link header__link_type_sign-up" href="/">Регистрация</a>
          <a className="header__link header__link_type_sign-in" href="/">Войти</a>
        </>
      )
        : <div>Аккаунт</div>}

    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Header.defaultProps = {
  isLoggedIn: false,
};
