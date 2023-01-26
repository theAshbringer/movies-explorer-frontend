import React from 'react';
import ToggleSlider from '../../../shared/ToggleSlider/ToggleSlider';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-form__input" type="search" placeholder="Фильм" />
      <button className="search-form__btn" type="submit" aria-label="Поиск" />
      <div className="search-form__divider" />
      <ToggleSlider className="search-form__slider" />
      <h4 className="search-form__label">Короткометражки</h4>
    </form>
  );
}

export default SearchForm;
