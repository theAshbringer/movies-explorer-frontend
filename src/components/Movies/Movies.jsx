import React, { useState, useEffect } from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Divider from '../../shared/Divider/Divider';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../../shared/Button/Button';
import Preloader from '../../shared/Preloader/Preloader';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi';

export default function Movies() {
  const [width, setWidth] = useState(window.innerWidth);

  const initLimit = () => {
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
  };

  const [movies, setMovies] = useState([]);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [limit, setLimit] = useState(initLimit().limit);
  const [moreNumber, setMoreNumber] = useState(initLimit().moreNumber);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      setMovies(await moviesApi.getMovies());
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMore = () => {
    setLimit((limit + moreNumber));
  };

  useEffect(() => {
    setLoadedMovies(movies.slice(0, limit));
  }, [limit]);

  useEffect(() => {
    if (movies.length !== 0) {
      setLoadedMovies(movies.slice(0, limit));
    }
  }, [movies]);

  useEffect(() => {
    setMoreNumber(initLimit().moreNumber);
    if (movies.length === 0) { setLimit(initLimit().limit); }
  }, [width, movies]);

  useEffect(() => {
    const resizeListener = () => {
      setWidth(window.innerWidth);
      setMoreNumber(initLimit().moreNumber);
      console.log(width);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className="movies-page">
      <Header isLoggedIn />
      <main className="movies-page__main">
        <SearchForm onSearch={handleSearch} />
        <Divider />
        {isLoading && <Preloader />}
        {loadedMovies.length !== 0
          && (
            <MoviesCardList
              movies={loadedMovies}
            />
          )}
        {loadedMovies.length > 3
            && (
              <Button className="movies-page__more" type="button" onClick={handleMore}>Ещё</Button>
            )}
      </main>
      <Footer />
    </div>
  );
}
