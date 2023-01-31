import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import CurrentUser from './CurrentUser/CurrentUser';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Modal from '../Modal/Modal';
import MyLink from '../MyLink/MyLink';

export default function Header({ isLoggedIn = false }) {
  const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const [width, setWidth] = useState(getWidth());
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleOpen = () => {
    setIsMenuOpened((prev) => !prev);
  };

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
      setIsMenuOpened(false);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__logo" />
      {!isLoggedIn ? (
        <>
          <MyLink className="header__link header__link_type_sign-up" to="/sign-up">Регистрация</MyLink>
          <MyLink className="header__link header__link_type_sign-in" to="/sign-in">Войти</MyLink>
        </>
      )
        : (
          <>
            {width > 850 && <CurrentUser className="header__current-user" />}
            {isMenuOpened
              && (
                <Modal>
                  <CurrentUser className="header__current-user" isVisible={isMenuOpened} />
                </Modal>
              )}
            <BurgerMenu className="header__burger" isOpened={isMenuOpened} handleClick={handleOpen} />
          </>
        )}

    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Header.defaultProps = {
  isLoggedIn: false,
};
