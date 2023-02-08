import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Divider from '../../shared/Divider/Divider';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../../shared/Button/Button';
import Preloader from '../../shared/Preloader/Preloader';
import './Movies.css';
import useWidth from '../../utils/hooks/useWidth';
import mainApi from '../../utils/MainApi';
import filterByQuery from '../../utils/filterByQuery';
import moviesApi from '../../utils/MoviesApi';

export default function Movies() {
  const width = useWidth();

  const initLimit = useCallback(() => {
    let limit = 12;
    let moreNumber = 3;
    if (width > 500 && width <= 900) {
      limit = 8;
      moreNumber = 2;
    }
    if (width <= 500) {
      limit = 5;
      moreNumber = 1;
    }
    return { limit, moreNumber };
  }, [width]);

  const initialSearchQuery = JSON.parse(localStorage.getItem('queryParams')) || { query: '', isShortMovie: false };

  const initMovies = JSON.parse(localStorage.getItem('searchedMovies')) || [];
  const [filteredMovies, setFilteredMovies] = useState(initMovies);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [limit, setLimit] = useState(initLimit().limit);
  const [moreNumber, setMoreNumber] = useState(initLimit().moreNumber);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(initialSearchQuery.query);
  const [isShortMovie, setIsShortMovie] = useState(initialSearchQuery.isShortMovie);
  const [error, setError] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);

  const isMoreBtnVisible = displayedMovies.length > 3
    && displayedMovies.length < filteredMovies.length;
  const hasNoResults = displayedMovies.length === 0 && query !== '';

  const loadMovies = async () => {
    let loadedMovies;
    if (localStorage.getItem('loadedMovies')) {
      loadedMovies = JSON.parse(localStorage.getItem('loadedMovies'));
    } else {
      loadedMovies = await moviesApi.getMovies();
      localStorage.setItem('loadedMovies', JSON.stringify(loadedMovies));
    }
    return loadedMovies;
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const loadedMovies = await loadMovies();
      const filteredResult = filterByQuery(loadedMovies, { query, isShortMovie });
      setFilteredMovies(filteredResult);
      localStorage.setItem('queryParams', JSON.stringify({ query, isShortMovie }));
      localStorage.setItem('searchedMovies', JSON.stringify(filteredResult));
    } catch (err) {
      setError('Не удалось загрузить фильмы');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLikeClick = async (movie, isLiked) => {
    try {
      if (!isLiked) {
        const savedMovie = await mainApi.likeMovie(movie);
        setSavedMovies((state) => [...state, savedMovie]);
      }
      if (isLiked) {
        const idToDelete = savedMovies.find((m) => m.movieId === movie.id)._id;
        await mainApi.deleteMovie(idToDelete);
        setSavedMovies((state) => state.filter((m) => m.movieId !== movie.id));
      }
    } catch (err) {
      setError('Упс, попробуйте еще раз');
    }
  };

  const handleMore = () => {
    setLimit((limit + moreNumber));
  };

  useEffect(() => {
      handleSearch();
  }, [isShortMovie]);

  useEffect(() => {
    setDisplayedMovies(filteredMovies.slice(0, limit));
  }, [filteredMovies, limit]);

  useEffect(() => {
    setMoreNumber(initLimit().moreNumber);
    if (filteredMovies.length === 0) { setLimit(initLimit().limit); }
  }, [width, filteredMovies, initLimit]);

  useEffect(() => {
    mainApi.getSavedMovies()
      .then((saved) => setSavedMovies(saved))
      .catch((err) => setError('Ошибка при загрузке сохраненных фильмов'));
  }, []);

  const resultSection = (
    <>
      {displayedMovies.length !== 0 && (
        <MoviesCardList
          movies={displayedMovies}
          savedMovies={savedMovies}
          onButtonClick={handleLikeClick}
        />
      )}
      {hasNoResults && <p>Ничего не найдено</p>}
      {isMoreBtnVisible
        && (
          <Button className="movies-page__more" type="button" onClick={handleMore}>Ещё</Button>
        )}
    </>
  );

  return (
    <div className="movies-page">
      <Header isLoggedIn />
      <main className="movies-page__main">
        <SearchForm
          query={query}
          setQuery={setQuery}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
          onSearch={handleSearch}
          isFetching={isLoading}
          error={error}
          setError={setError}
        />
        <Divider />
        {isLoading
          ? <Preloader />
          : resultSection}
      </main>
      <Footer />
    </div>
  );
}
