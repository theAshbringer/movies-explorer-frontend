import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProfilePage from '../ProfilePage/ProfilePage';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Register />} path="/sign-up" />
        <Route element={<Login />} path="/sign-in" />
        <Route element={<Movies />} path="/movies" />
        <Route element={<SavedMovies />} path="/saved-movies" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<Main />} path="/" />
        <Route element={<NotFound />} path="/*" />
      </Routes>
    </div>
  );
}

export default App;
