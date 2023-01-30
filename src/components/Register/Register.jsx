import React from 'react';
import Logo from '../../shared/Logo/Logo';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Register.css';

export default function Register() {
  return (
    <main className="register">
      <Logo className="register__logo" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <input className="register__field" type="text" />
      <input className="register__field" type="text" />
      <input className="register__field" type="text" />
      <SubmitSection isRegistered />
    </main>
  );
}
