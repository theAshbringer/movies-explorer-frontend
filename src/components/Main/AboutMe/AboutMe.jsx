import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import me from '../../../images/me.jpg';
import MyLink from '../../../shared/MyLink/MyLink';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <SectionTitle className="about-me__title" id="me">Студент</SectionTitle>
      <article className="about-me__about">
        <div className="about-me__text">
          <h3 className="about-me__name">Кристина</h3>
          <h3 className="about-me__position">Фронтенд-разработчик</h3>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб&#8209;разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <MyLink type="anchor" className="about-me__gh" href="https://github.com/theAshbringer">Github</MyLink>
        </div>
        <img className="about-me__photo" src={me} alt="Моё фото" />
      </article>
    </section>
  );
}

export default AboutMe;
