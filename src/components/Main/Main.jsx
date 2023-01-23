import React from 'react';
import Header from '../../shared/Header/Header';
import AboutProject from './AboutProject/AboutProject';
import './Main.css';
import Promo from './Promo/Promo';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <main>
        <Promo />
        <AboutProject />
      </main>
    </div>
  );
}
