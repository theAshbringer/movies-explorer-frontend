import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Divider from '../../shared/Divider/Divider';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Button from '../../shared/Button/Button';
import './Movies.css';

export default function Movies() {
  return (
    <div className="movies-page">
      <Header isLoggedIn />
      <main className="movies-page__main">
        <SearchForm />
        <Divider />
        <MoviesCardList />
        <Button className="movies-page__more" type="button">Ещё</Button>
      </main>
      <Footer />
    </div>
  );
}
