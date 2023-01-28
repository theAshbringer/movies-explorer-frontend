import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <article className="movies">
      <ul className="movies__cards">
        <li>
          <MoviesCard title="33 слова о дизайне" image="https://w-dog.ru/wallpapers/9/17/443247455488104/novaya-zelandiya-priroda-nebo-oblaka-ozero-doroga-pejzazh-gory.jpg" duration="1ч 47м" />
        </li>
        <li>
          <MoviesCard title="33 слова о дизайне" image="https://w-dog.ru/wallpapers/0/33/496072100782620/doroga-avtomobil-oblako-korvet-seryj-mig-29.jpg" duration="1ч 47м" />
        </li>
        <li>
          <MoviesCard title="33 слова о дизайне" image="https://www.fonstola.ru/pic/201201/1680x1050/fonstola.ru_73570.jpg" duration="1ч 47м" />
        </li>
        <li>
          <MoviesCard title="33 слова о дизайне" image="https://img3.akspic.ru/attachments/crops/2/8/9/2/0/102982/102982-pustynya-otrazhenie-ozero-pejzazhi_gor-voda-1920x1080.jpg" duration="1ч 47м" />
        </li>
        <li>
          <MoviesCard title="33 слова о дизайне" image="https://w-dog.ru/wallpapers/9/17/443247455488104/novaya-zelandiya-priroda-nebo-oblaka-ozero-doroga-pejzazh-gory.jpg" duration="1ч 47м" />
        </li>
        <li>
          <MoviesCard title="33 слова о дизайне" image="https://w-dog.ru/wallpapers/9/17/443247455488104/novaya-zelandiya-priroda-nebo-oblaka-ozero-doroga-pejzazh-gory.jpg" duration="1ч 47м" />
        </li>
        <li>
          <MoviesCard title="33 слова о дизайне" image="https://w-dog.ru/wallpapers/9/17/443247455488104/novaya-zelandiya-priroda-nebo-oblaka-ozero-doroga-pejzazh-gory.jpg" duration="1ч 47м" />
        </li>
      </ul>
    </article>
  );
}

export default MoviesCardList;
