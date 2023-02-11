import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Divider from '../../shared/Divider/Divider';
import mainApi from '../../utils/MainApi';
import filterByQuery from '../../utils/filterByQuery';

export default function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [query, setQuery] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [error, setError] = useState('');

  const hasNoResults = filteredMovies.length === 0 && query !== '';
  const isEmptyData = filteredMovies.length === 0 && query === '';

  const handleSearch = () => {
    setFilteredMovies(filterByQuery(savedMovies, { query, isShortMovie }));
  };

  const handleRemove = async (movie) => {
    try {
      await mainApi.deleteMovie(movie._id);
      setSavedMovies(savedMovies.filter((m) => m.movieId !== movie.movieId));
    } catch {
      setError('Упс! Попробуйте еще раз');
    }
  };

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (query === '') {
      setFilteredMovies(savedMovies);
    }
  }, [query]);

  useEffect(() => {
    handleSearch();
  }, [isShortMovie]);

  useEffect(() => {
    mainApi.getSavedMovies()
      .then((saved) => setSavedMovies(saved))
      .catch((err) => setError('Не удалось загрузить сохраненные фильмы'));
  }, []);

  return (
    <div className="saved-movies">
      <Header isLoggedIn />
      <main className="saved-movies__main">
        <SearchForm
          query={query}
          setQuery={setQuery}
          isShortMovie={isShortMovie}
          setIsShortMovie={setIsShortMovie}
          onSearch={handleSearch}
          error={error}
          setError={setError}
        />
        <Divider />
        {filteredMovies.length !== 0 && <MoviesCardList movies={filteredMovies} onButtonClick={handleRemove} type="saved" />}
        {hasNoResults && <p>Ничего не найдено</p>}
        {isEmptyData && <p>Нет сохраненных фильмов</p>}
      </main>
      <Footer />
    </div>
  );
}
