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
import useMovies from '../../utils/hooks/useMovies';
import useSavedMovies from '../../utils/hooks/useSavedMovies';

export default function Movies() {
  const width = useWidth();
  const movies = useMovies();
  const [savedMovies, setSavedMovies] = useSavedMovies();

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

  const initialSearchQuery = JSON.parse(localStorage.getItem('queryParams'));

  const initMovies = JSON.parse(localStorage.getItem('searchedMovies')) || [];
  const [filteredMovies, setFilteredMovies] = useState(initMovies);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [limit, setLimit] = useState(initLimit().limit);
  const [moreNumber, setMoreNumber] = useState(initLimit().moreNumber);
  const [isLoading, setIsLoading] = useState(false);

  const isMoreBtnVisible = displayedMovies.length > 3
    && displayedMovies.length < filteredMovies.length;

  const handleSearch = async (queryParams) => {
    localStorage.setItem('queryParams', JSON.stringify(queryParams));
    setIsLoading(true);
    setFilteredMovies(filterByQuery(movies, queryParams));
    setIsLoading(false);
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleMore = () => {
    setLimit((limit + moreNumber));
  };

  useEffect(() => {
    localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
  }, [filteredMovies]);

  useEffect(() => {
    setDisplayedMovies(filteredMovies.slice(0, limit));
  }, [filteredMovies, limit]);

  useEffect(() => {
    setMoreNumber(initLimit().moreNumber);
    if (filteredMovies.length === 0) { setLimit(initLimit().limit); }
  }, [width, filteredMovies, initLimit]);

  return (
    <div className="movies-page">
      <Header isLoggedIn />
      <main className="movies-page__main">
        <SearchForm initialQueryParams={initialSearchQuery} onSearch={handleSearch} />
        <Divider />
        {isLoading
          ? <Preloader />
          : (
            <>
              {displayedMovies.length !== 0
                && (
                  <MoviesCardList
                    movies={displayedMovies}
                    savedMovies={savedMovies}
                    onButtonClick={handleLikeClick}
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
