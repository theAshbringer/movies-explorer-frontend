import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../shared/Input/Input';
import Logo from '../../shared/Logo/Logo';
import PageTitle from '../../shared/PageTitle/PageTitle';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Login.css';
import { validationMsg } from '../../utils/const';

export default function Login() {
  const schema = yup.object({
    email: yup.string().email(validationMsg.email).required(validationMsg.required),
    password: yup.string().required(validationMsg.required),
  }).required();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'all' });
  return (
    <main className="login">
      <Logo className="login__logo" />
      <PageTitle className="register__title">Рады видеть!</PageTitle>
      <Input
        className="login__field"
        type="email"
        name="email"
        id="email"
        error={errors.email?.message}
        register={register}
        aria-invalid={errors.email ? 'true' : 'false'}
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
        error={errors.password?.message}
        register={register}
        aria-invalid={errors.password ? 'true' : 'false'}
        placeholder="Введите пароль"
        required
      >
        Пароль
      </Input>
      <SubmitSection isRegistered={false} onSubmit={handleSubmit()} />
    </main>
  );
}
