import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';
import AboutProjectFact from './AboutProjectFact/AboutProjectFact';

function AboutProject() {
  return (
    <section className="about-project">
      <SectionTitle className="about-project__title" id="about">О проекте</SectionTitle>
      <div className="about-project__facts">
        <AboutProjectFact title="Дипломный проект включал 5 этапов" body="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки." />
        <AboutProjectFact title="На выполнение диплома ушло 5 недель" body="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься." />
      </div>
      <div className="progress">
        <div className="progress__section progress__section_type_backend">
          <p className="progress__duration progress__duration_type_backend">1 неделя</p>
          <p className="progress__label">Back-end</p>
        </div>
        <div className="progress__section progress__section_type_frontend">
          <p className="progress__duration progress__duration_type_frontend">4 недели</p>
          <p className="progress__label">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
