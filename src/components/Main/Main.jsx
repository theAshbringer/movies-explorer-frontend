import React from 'react';
import './Main.css';
import Header from '../../shared/Header/Header';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../../shared/Footer/Footer';

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
      <Footer />
    </div>
  );
}
