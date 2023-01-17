import React from 'react';
import Header from '../../shared/Header/Header';
import './Main.css';
import Promo from './Promo/Promo';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <main>
        <Promo />
      </main>
    </div>
  );
}
