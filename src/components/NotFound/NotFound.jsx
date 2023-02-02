import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../shared/Button/Button';
import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <main className="not-found">
      <h1 className="not-found__digits">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Button className="not-found__back" type="button" mode="text" onClick={handleBack}>Назад</Button>
    </main>
  );
}
