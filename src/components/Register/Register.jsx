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
import InfoModal from '../../shared/Modal/InfoModal/InfoModal';

export default function Register() {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState({
    isOpen: false,
    isSuccess: false,
    message: '',
  });

  const schema = yup.object({
    name: yup.string().required(validationMsg.required).min(2, 'Имя не может быть короче двух букв').max(30, 'Имя слишком длинное')
      .matches(nameRegExp, 'Имя может содержать только буквы, дефис и пробел'),
    email: yup.string().email(validationMsg.email).required(validationMsg.required),
    password: yup.string().required(validationMsg.required),
  }).required();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'all' });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await mainApi.signUp(data);
      setModalState({ isOpen: true, isSuccess: true, message: 'Вы успешно зарегистрированы' });
      reset();
    } catch (error) {
      setModalState({ isOpen: true, isSuccess: false, message: error.message });
    }
  };

  const handleModal = () => {
    if (modalState.isSuccess) {
      navigate('/sign-in');
    }
    setModalState({ ...modalState, isOpen: false });
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
      <SubmitSection isRegistered />
      {modalState.isOpen && <InfoModal message={modalState.message} onClick={handleModal} />}
    </form>
  );
}
