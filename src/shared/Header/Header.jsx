import React, { useState, useEffect, useContext } from 'react';
import Navigation from './Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Modal from '../Modal/Modal';
import MyLink from '../MyLink/MyLink';
import Logo from '../Logo/Logo';
import './Header.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function Header() {
  const { isLoggedIn } = useContext(CurrentUserContext);

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
      <Logo className="header__logo" />
      {!isLoggedIn ? (
        <>
          <MyLink className="header__link header__link_type_sign-up" to="/sign-up">Регистрация</MyLink>
          <MyLink className="header__link header__link_type_sign-in" to="/sign-in">Войти</MyLink>
        </>
      )
        : (
          <>
            {width > 850 && <Navigation className="header__current-user" />}
            {isMenuOpened
              && (
                <Modal>
                  <Navigation className="header__current-user" isVisible={isMenuOpened} />
                </Modal>
              )}
            <BurgerMenu className="header__burger" isOpened={isMenuOpened} handleClick={handleOpen} />
          </>
        )}

    </header>
  );
}
