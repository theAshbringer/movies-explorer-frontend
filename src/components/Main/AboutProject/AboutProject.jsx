import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';
import AboutProjectFact from './AboutProjectFact/AboutProjectFact';

function AboutProject() {
  return (
    <section className="about-page">
      <SectionTitle className="about-page__title">О проекте</SectionTitle>
      <div className="about-page__facts">
        <AboutProjectFact title="Дипломный проект включал 5 этапов" body="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки." />
        <AboutProjectFact title="На выполнение диплома ушло 5 недель" body="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься." />
      </div>
    </section>
  );
}

export default AboutProject;
