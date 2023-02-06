import React from 'react';
import { moviesApiUrl } from '../../../utils/const';
import { getDurationFromMinutes } from '../../../utils/getDurationfromMinutes';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  savedMovies = [],
  type = 'main',
  onButtonClick,
}) {
  const savedMoviesId = savedMovies.map((m) => m.movieId);

  return (
    <section className="movies">
      <ul className="movies__cards">
        {movies.map((movie) => {
          const isSaved = type === 'main' ? savedMoviesId.includes(movie.id) : '';
          const imageLink = type === 'main' ? [moviesApiUrl, movie.image.url].join('') : movie.image;
          const id = type === 'main' ? movie.id : movie.movieId;
          return (
            <li key={id}>
              <MoviesCard
                title={movie.nameRU}
                image={imageLink}
                duration={getDurationFromMinutes(movie.duration)}
                type={type}
                onButtonClick={() => onButtonClick(movie, isSaved)}
                isSaved={isSaved}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
