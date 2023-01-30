import React from 'react';
import './Portfolio.css';
import Work from './Work/Work';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Work className="portfolio__item" link="#">Статичный сайт</Work>
      <Work className="portfolio__item" link="#">Адаптивный сайт</Work>
      <Work className="portfolio__item" link="#">Одностраничное приложение</Work>
    </section>
  );
}

export default Portfolio;
