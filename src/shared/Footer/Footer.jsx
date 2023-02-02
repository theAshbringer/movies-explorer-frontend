import React from 'react';
import MyLink from '../MyLink/MyLink';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__grey">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom-text">
        <p className="footer__copyright">
          &#169; 2023
        </p>
        <MyLink type="anchor" href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</MyLink>
        <MyLink type="anchor" href="https://github.com/theAshbringer" className="footer__link">Github</MyLink>
      </div>
    </footer>
  );
}
