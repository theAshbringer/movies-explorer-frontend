import { LOCAL_STORAGE } from './const';

const clearLocalStorage = () => {
  if (localStorage.getItem(LOCAL_STORAGE.QUERY_PARAMS)) {
    localStorage.removeItem(LOCAL_STORAGE.QUERY_PARAMS);
  }
  if (localStorage.getItem(LOCAL_STORAGE.SEARCHED_MOVIES)) {
    localStorage.removeItem(LOCAL_STORAGE.SEARCHED_MOVIES);
  }
  if (localStorage.getItem(LOCAL_STORAGE.LOADED_MOVIES)) {
    localStorage.removeItem(LOCAL_STORAGE.LOADED_MOVIES);
  }
};

export default clearLocalStorage;
