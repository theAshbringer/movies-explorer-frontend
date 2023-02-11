import React, { useState } from 'react';
import ToggleSlider from '../../../shared/ToggleSlider/ToggleSlider';
import { ReactComponent as Magnifier } from '../../../images/lupa.svg';
import Button from '../../../shared/Button/Button';
import ErrorMessage from '../../../shared/ErrorMessage/ErrorMessage';
import './SearchForm.css';

function SearchForm({
  query,
  setQuery,
  isShortMovie,
  onSearch,
  setIsShortMovie,
  isFetching,
  error,
  setError,
  className = '',
}) {
  const [isDirty, setIsDirty] = useState(false);

  const setErrorMessage = () => {
    setError('Нужно ввести ключевое слово');
  };

  const handleInput = ({ target }) => {
    setQuery(target.value);
    setIsDirty(true);
    setError('');
  };
  const isButtonDisabled = isFetching || (query === '' && isDirty);

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
          defaultChecked={isShortMovie}
          onChange={() => setIsShortMovie(!isShortMovie)}
        >
          Короткометражки
        </ToggleSlider>
      </form>
    </section>
  );
}

export default SearchForm;
