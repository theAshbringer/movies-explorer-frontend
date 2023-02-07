import React, { useState, useEffect } from 'react';
import ToggleSlider from '../../../shared/ToggleSlider/ToggleSlider';
import './SearchForm.css';
import { ReactComponent as Magnifier } from '../../../images/lupa.svg';
import Button from '../../../shared/Button/Button';
import ErrorMessage from '../../../shared/ErrorMessage/ErrorMessage';
import './SearchForm.css';

function SearchForm({ onSearch, initialQueryParams = null, className = '' }) {
  const initialParams = initialQueryParams || { query: '', isShortMovie: false };
  const [query, setQuery] = useState(initialParams.query);
  const [isShortMovie, setIsShortMovie] = useState(initialParams.isShortMovie);
  const [error, setError] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  const setErrorMessage = () => {
    setError('Нужно ввести ключевое слово');
  };

  const handleInput = ({ target }) => {
    setQuery(target.value);
    setIsDirty(true);
    setError('');
    if (target.value === '') {
      setErrorMessage();
    }
  };
  const isButtonDisabled = query === '' && isDirty;

  const doSearch = async () => {
    if (query === '') {
      setErrorMessage();
    } else {
      await onSearch({ query, isShortMovie });
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    doSearch();
  };

  useEffect(() => {
    if (query) {
      doSearch();
    }
  }, [isShortMovie]);

  return (
    <section className="search-form__container">
      <form className={`search-form ${className}`}>
        <Magnifier className="search-form__magnifier" fill="#959595" />
        <input
          value={query}
          className="search-form__input"
          type="search"
          onInput={handleInput}
          placeholder="Фильм"
          required
        />
        <span className="search-form__focus-bg" />
        <ErrorMessage className="search-form__error">{error}</ErrorMessage>
        <Button
          className="search-form__btn"
          type="submit"
          aria-label="Поиск"
          onClick={handleSearch}
          disabled={isButtonDisabled}
        >
          <Magnifier className="search-form__magnifier" fill="white" />
        </Button>
        <div className="search-form__divider" />
        <ToggleSlider
          value={isShortMovie}
          className="search-form__slider"
          defaultChecked={initialParams.isShortMovie}
          onChange={() => setIsShortMovie(!isShortMovie)}
        >
          Короткометражки
        </ToggleSlider>
      </form>
    </section>
  );
}

export default SearchForm;
