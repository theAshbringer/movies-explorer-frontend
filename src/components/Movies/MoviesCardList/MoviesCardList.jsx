import React from 'react';
import { moviesApiUrl } from '../../../utils/const';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  type = 'main',
}) {
  return (
    <section className="movies">
      <ul className="movies__cards">
        {movies.map(({
          nameRU, image, duration, id,
        }) => (
          <li key={id}>
            <MoviesCard title={nameRU} image={[moviesApiUrl, image.url].join('')} duration={duration} type={type} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
