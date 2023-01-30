import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import ProfilePage from '../ProfilePage/ProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Movies />} path="/movies" />
        <Route element={<SavedMovies />} path="/saved-movies" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<Main />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
