import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './SubmitSection.css';

function SubmitSection({ isRegistered = false }) {
  const alreadyRegistered = {
    text: 'Уже зарегистрированы?',
    link: '/sign-in',
    linkText: 'Войти',
    buttonText: 'Зарегистрироваться',
  };

  const notRegisteredYet = {
    text: 'Ещё не зарегистрированы?',
    link: '/sign-up',
    linkText: 'Регистрация',
    buttonText: 'Войти',
  };

  const content = isRegistered ? alreadyRegistered : notRegisteredYet;

  return (
    <div className="submit-section">
      <Button mode="solidWide" className="submit-section__submit">{content.buttonText}</Button>
      <div className="submit-section__container">
        <p className="submit-section__text">{content.text}</p>
        <Link className="submit-section__link" to={content.link}>{content.linkText}</Link>
      </div>
    </div>
  );
}

export default SubmitSection;
