import React from 'react';
import { movies } from '../../../utils/const';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ type = 'main' }) {
  return (
    <section className="movies">
      <ul className="movies__cards">
        {movies.map(({
          nameRU, image, duration, _id,
        }) => (
          <li key={_id}>
            <MoviesCard title={nameRU} image={image} duration={duration} type={type} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
