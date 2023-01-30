import React from 'react';
import { movies } from '../../../utils/const';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="movies__cards">
        {movies.map(({
          nameRU, image, duration, _id,
        }) => (
          <li key={_id}>
            <MoviesCard title={nameRU} image={image} duration={duration} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
