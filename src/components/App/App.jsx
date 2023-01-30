import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Register from '../Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Register />} path="/sign-up" />
        <Route element={<Main />} path="/" />
        <Route element={<Movies />} path="/movies" />
      </Routes>
    </div>
  );
}

export default App;
