import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from '../../shared/Input/Input';
import Logo from '../../shared/Logo/Logo';
import PageTitle from '../../shared/PageTitle/PageTitle';
import SubmitSection from '../../shared/SubmitSection/SubmitSection';
import './Login.css';
import { validationMsg } from '../../utils/const';
import mainApi from '../../utils/MainApi';
import InfoModal from '../../shared/Modal/InfoModal/InfoModal';

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState({
    isOpen: false,
    isSuccess: false,
    message: '',
  });

  const schema = yup.object({
    email: yup.string().email(validationMsg.email).required(validationMsg.required),
    password: yup.string().required(validationMsg.required),
  }).required();
  const {
    register,
    reset,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'all' });

  const isButtonDisabled = !isDirty || !isValid;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      if (!(data.email && data.password)) {
        throw new Error('Введите имя и пароль');
      }
      const { data: { name, email } } = await mainApi.signIn(data);
      onLogin({ name, email });
      navigate('/movies');
      reset();
    } catch (error) {
      setModalState({ isOpen: true, isSuccess: false, message: error.message });
    }
  };

  const handleModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
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
      <SubmitSection isRegistered={false} isButtonDisabled={isButtonDisabled} />
      {modalState.isOpen && <InfoModal message={modalState.message} onClick={handleModal} />}
    </form>
  );
}
