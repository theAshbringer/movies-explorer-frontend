import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/Input/Input';
import Logo from '../../shared/Logo/Logo';
import PageTitle from '../../shared/PageTitle/PageTitle';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Register.css';
import { nameRegExp, validationMsg } from '../../utils/const';
import mainApi from '../../utils/MainApi';

export default function Register({ onLogin }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const schema = yup.object({
    name: yup.string().required(validationMsg.required).min(2, 'Имя не может быть короче двух букв').max(30, 'Имя слишком длинное')
      .matches(nameRegExp, 'Имя может содержать только буквы, дефис и пробел'),
    email: yup.string().email(validationMsg.email).required(validationMsg.required),
    password: yup.string().required(validationMsg.required),
  }).required();

  const {
    register,
    reset,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'all' });

  const isButtonDisabled = isFetching || !isDirty || !isValid;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      await mainApi.signUp(data);
      try {
        const { data: currentUser } = await mainApi.signIn({
          email: data.email,
          password: data.password,
        });
        onLogin(currentUser);
        navigate('/movies');
      } catch {
        navigate('/sign-in');
      }
      reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
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
      <SubmitSection error={error} isButtonDisabled={isButtonDisabled} isRegistered />
    </form>
  );
}
