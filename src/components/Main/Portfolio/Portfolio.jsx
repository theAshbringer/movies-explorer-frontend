import React from 'react';
import './Portfolio.css';
import Work from './Work/Work';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Work className="portfolio__item" link="https://github.com/theAshbringer/how-to-learn">Статичный сайт</Work>
      <Work className="portfolio__item" link="https://github.com/theAshbringer/russian-travel">Адаптивный сайт</Work>
      <Work className="portfolio__item" link="https://github.com/theAshbringer/react-mesto-auth">Одностраничное приложение</Work>
    </section>
  );
}

export default Portfolio;
