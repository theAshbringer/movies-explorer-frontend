import React from 'react';
import Input from '../../shared/Input/Input';
import Logo from '../../shared/Logo/Logo';
import PageTitle from '../../shared/PageTitle/PageTitle';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Register.css';

export default function Register() {
  return (
    <main className="register">
      <Logo className="register__logo" />
      <PageTitle className="register__title">Добро пожаловать!</PageTitle>
      <Input
        className="register__field"
        type="text"
        name="name"
        id="name"
        placeholder="Введите имя"
        required
      >
        Имя
      </Input>
      <Input
        className="register__field"
        type="email"
        name="email"
        id="email"
        placeholder="Введите почту"
        required
      >
        E-mail
      </Input>
      <Input
        className="register__field"
        type="password"
        name="password"
        id="password"
        placeholder="Введите пароль"
        required
      >
        Пароль
      </Input>
      <SubmitSection isRegistered />
    </main>
  );
}
