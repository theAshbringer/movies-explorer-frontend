import React from 'react';
import DeleteButton from '../../../shared/DeleteButton/DeleteButton';
import Button from '../../../shared/Button/Button';
import './MoviesCard.css';

function MoviesCard({
  title,
  image,
  duration,
  onButtonClick,
  isSaved = false,
  type = 'like',
}) {
  const handleButtonClick = (e) => {
    e.preventDefault();
    onButtonClick();
  };

  return (
    <article className="movie">
      <h2 className="movie__title">{title}</h2>
      <img src={image} alt={title} className="movie__cover" />
      {type !== 'saved'
        ? (
          <Button
            mode="like"
            className="movie__like"
            onClick={handleButtonClick}
            isActive={isSaved}
            aria-label="Поставить лайк"
            type="button"
          />
        )
        : (
          <DeleteButton
            onClick={handleButtonClick}
            className="movie__delete"
          />
        )}
      <p className="movie__duration">{duration}</p>
    </article>
  );
}

export default MoviesCard;
