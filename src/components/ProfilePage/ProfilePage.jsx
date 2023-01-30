import React from 'react';
import './ProfilePage.css';
import Header from '../../shared/Header/Header';
import Profile from './Profile/Profile';

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Header isLoggedIn />
      <main className="profile-page__main">
        <Profile />
      </main>
    </div>
  );
}
