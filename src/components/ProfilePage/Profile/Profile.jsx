/* eslint-disable  react/jsx-wrap-multilines, react/jsx-closing-tag-location ,
 jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/Button/Button';
import Input from '../../../shared/Input/Input';
import PageTitle from '../../../shared/PageTitle/PageTitle';
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSignOut = () => {
    navigate('/');
  };

  const handleSave = () => {
    setIsEdit(false);
  };

  const profileData = <>
    <div className="profile__data">
      <div className="profile__data-row">
        <p className="profile__field-name">Имя</p>
        <p className="profile__field-value">Кристина</p>
      </div>
      <div className="profile__data-row">
        <p className="profile__field-name">E-mail</p>
        <p className="profile__field-value">pochta@yandex.ru</p>
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
  </>;

  const editForm = <form className="profile__edit-form">
    <Input
      className="profile__input"
      type="text"
      name="name"
      id="name"
      placeholder="Кристина"
    >
      Имя
    </Input>
    <Input
      className="profile__input"
      type="email"
      name="email"
      id="email"
      placeholder="pochta@yandex.ru"
    >
      E-mail
    </Input>
    <Button
      className="profile__button profile__button_type_save"
      onClick={handleSave}
      type="submit"
    >
      Сохранить
    </Button>
  </form>;

  return (
    <section className="profile">
      <PageTitle className="profile__title">Привет, пользователь!</PageTitle>
      {!isEdit
        ? profileData
        : editForm}
    </section>
  );
}
