import React from 'react';
import { moviesApiUrl } from '../../../utils/const';
import { getDurationFromMinutes } from '../../../utils/getDurationfromMinutes';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  savedMovies,
  type = 'main',
  onLikeMovie,
}) {
  const savedMoviesId = savedMovies.map((m) => m.movieId);

  return (
    <section className="movies">
      <ul className="movies__cards">
        {movies.map(({
          country, director, duration, year, description,
          image, trailerLink, nameRU, nameEN, id,
        }) => {
          const movie = {
            country,
            director,
            duration,
            year,
            description,
            image: [moviesApiUrl, image.url].join(''),
            trailerLink,
            nameRU,
            nameEN,
            movieId: id,
            thumbnail: [moviesApiUrl, image.url].join(''),
          };
          const isSaved = savedMoviesId.includes(id);
          return (
            <li key={movie.movieId}>
              <MoviesCard
                title={movie.nameRU}
                image={movie.image}
                duration={getDurationFromMinutes(movie.duration)}
                type={type}
                onLike={() => onLikeMovie(movie, isSaved)}
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
