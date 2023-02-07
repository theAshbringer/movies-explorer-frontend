import React from 'react';
import './MoviesCard.css';
import DeleteButton from '../../../shared/DeleteButton/DeleteButton';
import Button from '../../../shared/Button/Button';

function MoviesCard({
  title,
  image,
  duration,
  onButtonClick,
  isSaved = false,
  type = 'like',

}) {
  return (
    <article className="movie">
      <h2 className="movie__title">{title}</h2>
      <img src={image} alt={title} className="movie__cover" />
      {type !== 'saved'
        ? (
          <Button
            mode="like"
            className="movie__like"
            onClick={(e) => {
              e.preventDefault();
              onButtonClick();
            }}
            isActive={isSaved}
            aria-label="Поставить лайк"
            type="button"
          />
        )
        : (
          <DeleteButton
            onClick={() => onButtonClick()}
            className="movie__delete"
          />
        )}
      <p className="movie__duration">{duration}</p>
    </article>
  );
}

export default MoviesCard;
