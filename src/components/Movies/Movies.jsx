import React from 'react';
import './Movies.css';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import SearchForm from './SearchForm/SearchForm';

export default function Movies() {
  return (
    <div className="movie-page">
      <Header />
      <main className="movie-page__main">
        <SearchForm />
      </main>
      <Footer />
    </div>
  );
}
