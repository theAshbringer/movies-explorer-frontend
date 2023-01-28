import React from 'react';
import './Movies.css';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Divider from '../../shared/Divider/Divider';
import MoviesCardList from './MoviesCardList/MoviesCardList';

export default function Movies() {
  return (
    <div className="movies-page">
      <Header />
      <main className="movies-page__main">
        <section className="movies-page__search-form">
          <SearchForm />
        </section>
        <Divider />
        <MoviesCardList />
        <button className="movies-page__more" type="button">Ещё</button>
      </main>
      <Footer />
    </div>
  );
}
