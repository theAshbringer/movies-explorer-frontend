import { useEffect, useState } from 'react';
import mainApi from '../MainApi';

const useSavedMovies = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const getSavedMovies = async () => setSavedMovies(await mainApi.getSavedMovies());
    try {
      getSavedMovies();
    } catch (err) {
      console.error('Не удалось загрузить сохраненные фильмы');
    }
  }, []);

  return [savedMovies, setSavedMovies];
};

export default useSavedMovies;
