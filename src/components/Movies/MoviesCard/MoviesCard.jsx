import React from 'react';
import './MoviesCard.css';
import LikeButton from '../../../shared/LikeButton/LikeButton';

function MoviesCard({ title, image, duration }) {
  return (
    <article className="movie">
      <h2 className="movie__title">{title}</h2>
      <img src={image} alt={title} className="movie__cover" />
      <LikeButton className="movie__like" />
      <p className="movie__duration">{duration}</p>
    </article>
  );
}

export default MoviesCard;
