import React, { useEffect, useState } from 'react';
import './SavedMovies.css';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Divider from '../../shared/Divider/Divider';
import useSavedMovies from '../../utils/hooks/useSavedMovies';
import mainApi from '../../utils/MainApi';
import filterByQuery from '../../utils/filterByQuery';

export default function SavedMovies() {
  const [savedMovies, setSavedMovies] = useSavedMovies();
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);

  const handleSearch = async (queryParams) => {
    setIsLoading(true);
    setFilteredMovies(filterByQuery(savedMovies, queryParams));
    setIsLoading(false);
  };

  useEffect(() => {
    if (savedMovies.length !== 0) {
      setFilteredMovies(savedMovies);
    }
  }, [savedMovies]);

  const handleRemove = (movie) => {
    try {
      mainApi.deleteMovie(movie._id);
      setSavedMovies((state) => state.filter((m) => m._id !== movie._id));
    } catch (error) {
      console.error('Не удалось удалить фильм');
    }
  };
  return (
    <div className="saved-movies">
      <Header isLoggedIn />
      <main className="saved-movies__main">
        <SearchForm onSearch={handleSearch} />
        <Divider />
        <MoviesCardList movies={filteredMovies} onButtonClick={handleRemove} type="saved" />
      </main>
      <Footer />
    </div>
  );
}
