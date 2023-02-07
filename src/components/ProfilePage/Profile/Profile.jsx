import React, { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/Button/Button';
import Input from '../../../shared/Input/Input';
import PageTitle from '../../../shared/PageTitle/PageTitle';
import './Profile.css';
import { validationMsg } from '../../../utils/const';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import InfoModal from '../../../shared/Modal/InfoModal/InfoModal';

export default function Profile({ data: { name, email }, onSave, onLogout }) {
  const { setIsLoggedIn } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    isSuccess: false,
    message: '',
  });

  const schema = yup.object({
    email: yup.string().email(validationMsg.email),
    name: yup.string(),
  }).required();

  const {
    register,
    reset,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'all' });

  const isButtonDisabled = !isDirty || !isValid;

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSignOut = async () => {
    await onLogout();
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleSave = async (newData, e) => {
    e.preventDefault();
    try {
      await onSave(newData);
      setModalState({ isOpen: true, isSuccess: true, message: 'Данные обновлены!' });
    } catch (error) {
      setModalState({ isOpen: true, isSuccess: false, message: error.message });
    }
  };

  const handleModal = () => {
    if (modalState.isSuccess) {
      setIsEdit(false);
    }
    setModalState({ ...modalState, isOpen: false });
  };

  useEffect(() => {
    const defaultValues = { name, email };
    reset({ ...defaultValues });
  }, [name, email]);

  const profileData = (
    <>
      <div className="profile__data">
        <div className="profile__data-row">
          <p className="profile__field-name">Имя</p>
          <p className="profile__field-value">{name}</p>
        </div>
        <div className="profile__data-row">
          <p className="profile__field-name">E-mail</p>
          <p className="profile__field-value">{email}</p>
        </div>
      </div>
      <Button
        className="profile__button profile__button_type_edit"
        onClick={handleEdit}
        type="button"
      >
        Редактировать
      </Button>
      <Button
        className="profile__button profile__button_type_sign-out"
        onClick={handleSignOut}
        type="button"
      >
        Выйти из аккаунта
      </Button>
    </>
  );

  const editForm = (
    <form className="profile__edit-form" onSubmit={handleSubmit(handleSave)}>
      <Input
        className="profile__input"
        type="text"
        name="name"
        id="name"
        placeholder="Кристина"
        error={errors.name?.message}
        register={register}
        aria-invalid={errors.email ? 'true' : 'false'}
      >
        Имя
      </Input>
      <Input
        className="profile__input"
        type="email"
        name="email"
        id="email"
        placeholder="pochta@yandex.ru"
        error={errors.email?.message}
        register={register}
        aria-invalid={errors.email ? 'true' : 'false'}
      >
        E-mail
      </Input>
      <Button
        mode="solidWide"
        className="profile__button profile__button_type_save"
        disabled={isButtonDisabled}
        type="submit"
      >
        Сохранить
      </Button>
      <Button
        className="profile__button profile__button_type_cancel"
        onClick={() => setIsEdit(false)}
        type="button"
      >
        Отменить
      </Button>
    </form>
  );

  return (
    <section className="profile">
      <PageTitle className="profile__title">{`Привет, ${name}!`}</PageTitle>
      {!isEdit
        ? profileData
        : editForm}
      {modalState.isOpen && <InfoModal message={modalState.message} onClick={handleModal} />}
    </section>
  );
}
