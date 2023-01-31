import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__grey">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom-text">
        <p className="footer__copyright">
          &#169; 2023
        </p>
        <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
        <a href="https://github.com/theAshbringer" className="footer__link">Github</a>
      </div>
    </footer>
  );
}
