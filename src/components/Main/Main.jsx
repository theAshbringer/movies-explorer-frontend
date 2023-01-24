import React from 'react';
import Header from '../../shared/Header/Header';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import './Main.css';
import Portfolio from './Portfolio/Portfolio';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
    </div>
  );
}
