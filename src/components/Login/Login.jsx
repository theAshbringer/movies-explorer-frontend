import React from 'react';
import Input from '../../shared/Input/Input';
import Logo from '../../shared/Logo/Logo';
import PageTitle from '../../shared/PageTitle/PageTitle';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Login.css';

export default function Login() {
  return (
    <main className="login">
      <Logo className="login__logo" />
      <PageTitle className="register__title">Рады видеть!</PageTitle>
      <Input
        className="login__field"
        type="email"
        name="email"
        id="email"
        placeholder="Введите почту"
        required
      >
        E-mail
      </Input>
      <Input
        className="login__field"
        type="password"
        name="password"
        id="password"
        placeholder="Введите пароль"
        required
      >
        Пароль
      </Input>
      <SubmitSection isRegistered={false} />
    </main>
  );
}
