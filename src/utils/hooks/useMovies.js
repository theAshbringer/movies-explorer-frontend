import { useEffect, useState } from 'react';
import moviesApi from '../MoviesApi';

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => setMovies(await moviesApi.getMovies());
    try {
      getMovies();
    } catch (err) {
      console.error('Не удалось загрузить фильмы');
    }
  }, []);

  return movies;
};

export default useMovies;
