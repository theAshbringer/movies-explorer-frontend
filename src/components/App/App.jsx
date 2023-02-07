import React, { useState, useMemo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProfilePage from '../ProfilePage/ProfilePage';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Preloader from '../../shared/Preloader/Preloader';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const authData = useMemo(() => ({
    currentUser,
    isLoggedIn,
    setIsLoggedIn,
  }));

  const handleLogin = (currentUserData) => {
    setIsLoggedIn(true);
    setCurrentUser(currentUserData);
  };

  const handleEditProfile = (newProfile) => {
    setCurrentUser(newProfile);
  };

  useEffect(() => {
    setIsAuthenticating(true);
    mainApi.getProfile()
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
      })
      .finally(() => setIsAuthenticating(false));
  }, []);

  if (isAuthenticating === true) {
    return (
      <div className="app">
        <Preloader />
      </div>
    );
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={authData}>
        <Routes>
          <Route element={<Register onLogin={handleLogin} />} path="/sign-up" />
          <Route element={<Login onLogin={handleLogin} />} path="/sign-in" />
          <Route
            element={(
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies />
              </ProtectedRoute>
            )}
            path="/movies"
          />
          <Route
            element={(
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            )}
            path="/saved-movies"
          />
          <Route
            element={(
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProfilePage onEditProfile={handleEditProfile} />
              </ProtectedRoute>
            )}
            path="/profile"
          />
          <Route element={<Main />} path="/" />
          <Route element={<NotFound />} path="/*" />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
