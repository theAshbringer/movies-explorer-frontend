import React from 'react';
import ToggleSlider from '../../../shared/ToggleSlider/ToggleSlider';
import './SearchForm.css';
import { ReactComponent as Magnifier } from '../../../images/lupa.svg';

function SearchForm({ className = '' }) {
  return (
    <form className={`search-form ${className}`}>
      <Magnifier className="search-form__magnifier" fill="#959595" />
      <input className="search-form__input" type="search" placeholder="Фильм" />
      <button className="search-form__btn" type="submit" aria-label="Поиск">
        <Magnifier className="search-form__magnifier" fill="white" />
      </button>
      <div className="search-form__divider" />
      <ToggleSlider className="search-form__slider" />
      <h4 className="search-form__label">Короткометражки</h4>
    </form>
  );
}

export default SearchForm;
