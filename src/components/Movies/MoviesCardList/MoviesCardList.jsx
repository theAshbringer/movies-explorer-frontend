import React from 'react';
import MyLink from '../../../shared/MyLink/MyLink';
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
          return (
            <li key={movie._id ?? movie.id}>
              <MyLink
                type="anchor"
                href={movie.trailerLink}
              >
                <MoviesCard
                  title={movie.nameRU}
                  image={imageLink}
                  duration={getDurationFromMinutes(movie.duration)}
                  type={type}
                  onButtonClick={() => onButtonClick(movie, isSaved)}
                  isSaved={isSaved}
                />
              </MyLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
