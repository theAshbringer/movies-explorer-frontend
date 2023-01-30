import React from 'react';
import Logo from '../../shared/Logo/Logo';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Login.css';

export default function Login() {
  return (
    <main className="login">
      <Logo className="login__logo" />
      <h1 className="login__title">Рады видеть!</h1>
      <input className="login__field" type="text" />
      <input className="login__field" type="text" />
      <SubmitSection isRegistered={false} />
    </main>
  );
}
