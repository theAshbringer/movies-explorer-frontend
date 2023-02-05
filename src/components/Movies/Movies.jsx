import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Divider from '../../shared/Divider/Divider';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../../shared/Button/Button';
import Preloader from '../../shared/Preloader/Preloader';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi';
import useWidth from '../../utils/hooks/useWidth';
import mainApi from '../../utils/MainApi';

export default function Movies() {
  const width = useWidth();

  const initLimit = useCallback(() => {
    let limit = 12;
    let moreNumber = 3;
    if (width > 480 && width <= 768) {
      limit = 8;
      moreNumber = 2;
    }
    if (width <= 480) {
      limit = 5;
      moreNumber = 1;
    }
    return { limit, moreNumber };
  }, [width]);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [limit, setLimit] = useState(initLimit().limit);
  const [moreNumber, setMoreNumber] = useState(initLimit().moreNumber);
  const [isLoading, setIsLoading] = useState(false);

  const isMoreBtnVisible = loadedMovies.length > 3 && loadedMovies.length < movies.length;

  const loadMovies = async () => {
    try {
      const moviesData = await moviesApi.getMovies();
      setMovies(moviesData);
      localStorage.setItem('movies', JSON.stringify(moviesData));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    setIsLoading(true);
    if (!localStorage.getItem('movies')) {
      await loadMovies();
    } else {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
    setIsLoading(false);
  };

  const handleLikeClick = async (movie, isLiked) => {
    try {
      if (!isLiked) {
        const savedMovie = await mainApi.likeMovie(movie);
        setSavedMovies((state) => [...state, savedMovie]);
      }
      if (isLiked) {
        const idToDelete = savedMovies.find((m) => m.movieId === movie.movieId)._id;
        await mainApi.dislikeMovie(idToDelete);
        setSavedMovies((state) => state.filter((m) => m.movieId !== movie.movieId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMore = () => {
    setLimit((limit + moreNumber));
  };

  useEffect(() => {
    if (movies.length !== 0) {
      setLoadedMovies(movies.slice(0, limit));
    }
  }, [movies, limit]);

  useEffect(() => {
    setMoreNumber(initLimit().moreNumber);
    if (movies.length === 0) { setLimit(initLimit().limit); }
  }, [width, movies, initLimit]);

  useEffect(() => {
    const getSavedMovies = async () => setSavedMovies(await mainApi.getSavedMovies());
    getSavedMovies();
  }, []);

  return (
    <div className="movies-page">
      <Header isLoggedIn />
      <main className="movies-page__main">
        <SearchForm onSearch={handleSearch} />
        <Divider />
        {isLoading
          ? <Preloader />
          : (
            <>
              {loadedMovies.length !== 0
          && (
            <MoviesCardList
              movies={loadedMovies}
              savedMovies={savedMovies}
              onLikeMovie={handleLikeClick}
            />
          )}
              {isMoreBtnVisible
            && (
              <Button className="movies-page__more" type="button" onClick={handleMore}>Ещё</Button>
            )}
            </>
          )}
      </main>
      <Footer />
    </div>
  );
}
