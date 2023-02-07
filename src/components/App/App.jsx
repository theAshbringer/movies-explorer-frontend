import React, { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProfilePage from '../ProfilePage/ProfilePage';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authData = useMemo(() => ({ isLoggedIn, setIsLoggedIn }));
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <CurrentUserContext.Provider value={authData}>
        <Routes>
          <Route element={<Register />} path="/sign-up" />
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
                <ProfilePage />
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
