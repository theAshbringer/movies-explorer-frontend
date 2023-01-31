import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../shared/Input/Input';
import Logo from '../../shared/Logo/Logo';
import PageTitle from '../../shared/PageTitle/PageTitle';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Register.css';
import { validationMsg } from '../../utils/const';

export default function Register() {
  const schema = yup.object({
    name: yup.string().required(validationMsg.required).min(2, 'Имя не может быть короче двух букв').max(30, 'Имя слишком длинное'),
    email: yup.string().email(validationMsg.email).required(validationMsg.required),
    password: yup.string().required(validationMsg.required),
  }).required();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'all' });
  return (
    <main className="register">
      <Logo className="register__logo" />
      <PageTitle className="register__title">Добро пожаловать!</PageTitle>
      <Input
        className="register__field"
        type="text"
        name="name"
        id="name"
        error={errors.name?.message}
        placeholder="Введите имя"
        register={register}
        aria-invalid={errors.name ? 'true' : 'false'}
      >
        Имя
      </Input>
      <Input
        className="register__field"
        type="email"
        name="email"
        id="email"
        error={errors.email?.message}
        placeholder="Введите почту"
        register={register}
        aria-invalid={errors.email ? 'true' : 'false'}
      >
        E-mail
      </Input>
      <Input
        className="register__field"
        type="password"
        name="password"
        id="password"
        error={errors.password?.message}
        placeholder="Введите пароль"
        register={register}
        aria-invalid={errors.password ? 'true' : 'false'}
      >
        Пароль
      </Input>
      <SubmitSection isRegistered onSubmit={handleSubmit()} />
    </main>
  );
}
