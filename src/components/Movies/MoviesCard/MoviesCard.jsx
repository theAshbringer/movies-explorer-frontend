import React from 'react';
import './MoviesCard.css';
import LikeButton from '../../../shared/LikeButton/LikeButton';
import DeleteButton from '../../../shared/DeleteButton/DeleteButton';

function MoviesCard({
  title,
  image,
  duration,
  onLike,
  isSaved = false,
  type = 'like',

}) {
  return (
    <article className="movie">
      <h2 className="movie__title">{title}</h2>
      <img src={image} alt={title} className="movie__cover" />
      {type !== 'saved'
        ? <LikeButton className="movie__like" onClick={() => onLike()} isActive={isSaved} />
        : <DeleteButton className="movie__delete" />}
      <p className="movie__duration">{duration}</p>
    </article>
  );
}

export default MoviesCard;
