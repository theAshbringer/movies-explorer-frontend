import React from 'react';
import { NavLink } from 'react-router-dom';
import './CurrentUser.css';

function CurrentUser({ isVisible = true, className = '' }) {
  const activeLinkClass = ({ isActive }) => `current-user__link ${isActive ? 'current-user__link_active' : ''}`;

  return (
    <ul className={`current-user ${className} ${isVisible ? 'current-user_visible' : ''}`}>
      <li className="current-user__item current-user__item_type_main-page">
        <NavLink className={activeLinkClass} to="/">Главная</NavLink>
      </li>
      <li className="current-user__item current-user__item_type_movies">
        <NavLink className={activeLinkClass} to="/movies">Фильмы</NavLink>
      </li>
      <li className="current-user__item current-user__item_type_saved-movies">
        <NavLink className={activeLinkClass} to="/saved-movies">Сохранённые фильмы</NavLink>
      </li>
      <li className="current-user__item current-user__item_type_profile">
        <NavLink className="current-user__link" to="/profile">
          <span className="current-user__profile-label">Аккаунт</span>
          <div className="current-user__profile-logo" />
        </NavLink>
      </li>
    </ul>
  );
}

export default CurrentUser;
