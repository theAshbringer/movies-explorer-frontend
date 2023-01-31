import React from 'react';
import MyLink from '../../MyLink/MyLink';
import './CurrentUser.css';

function CurrentUser({ isVisible = true, className = '' }) {
  return (
    <ul className={`current-user ${className} ${isVisible ? 'current-user_visible' : ''}`}>
      <li className="current-user__item current-user__item_type_main-page">
        <MyLink activeClassName className="current-user__link" type="nav" to="/">Главная</MyLink>
      </li>
      <li className="current-user__item current-user__item_type_movies">
        <MyLink className="current-user__link" activeClassName="current-user__link_active" type="nav" to="/movies">Фильмы</MyLink>
      </li>
      <li className="current-user__item current-user__item_type_saved-movies">
        <MyLink className="current-user__link" activeClassName="current-user__link_active" type="nav" to="/saved-movies">Сохранённые фильмы</MyLink>
      </li>
      <li className="current-user__item current-user__item_type_profile">
        <MyLink className="current-user__link" type="nav" to="/profile">
          <span className="current-user__profile-label">Аккаунт</span>
          <div className="current-user__profile-logo" />
        </MyLink>
      </li>
    </ul>
  );
}

export default CurrentUser;
