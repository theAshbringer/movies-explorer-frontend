import React from 'react';
import './SavedMovies.css';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Divider from '../../shared/Divider/Divider';

export default function SavedMovies() {
  return (
    <div className="saved-movies">
      <Header isLoggedIn />
      <main className="saved-movies__main">
        <SearchForm />
        <Divider />
        <MoviesCardList type="saved" />
      </main>
      <Footer />
    </div>
  );
}
