import React from 'react';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__banner">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab className="promo__navtab" />
    </section>
  );
}

export default Promo;
