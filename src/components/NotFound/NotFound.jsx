import React from 'react';
import Button from '../../shared/Button/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1 className="not-found__digits">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Button className="not-found__back" type="button" mode="text">Назад</Button>
    </main>
  );
}
