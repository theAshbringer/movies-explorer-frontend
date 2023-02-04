import React from 'react';
import ToggleSlider from '../../../shared/ToggleSlider/ToggleSlider';
import './SearchForm.css';
import { ReactComponent as Magnifier } from '../../../images/lupa.svg';
import Button from '../../../shared/Button/Button';

function SearchForm({ onSearch, className = '' }) {
  const handleSearch = async (e) => {
    e.preventDefault();
    onSearch();
  };
  return (
    <section className="search-form__container">
      <form className={`search-form ${className}`}>
        <Magnifier className="search-form__magnifier" fill="#959595" />
        <input className="search-form__input" type="search" placeholder="Фильм" required />
        <span className="search-form__focus-bg" />
        <Button className="search-form__btn" type="submit" aria-label="Поиск" onClick={handleSearch}>
          <Magnifier className="search-form__magnifier" fill="white" />
        </Button>
        <div className="search-form__divider" />
        <ToggleSlider className="search-form__slider">Короткометражки</ToggleSlider>
      </form>
    </section>
  );
}

export default SearchForm;
