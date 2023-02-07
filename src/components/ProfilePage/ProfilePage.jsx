import React, { useEffect, useState } from 'react';
import './ProfilePage.css';
import Header from '../../shared/Header/Header';
import Profile from './Profile/Profile';
import mainApi from '../../utils/MainApi';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const handleEditProfile = async (newData) => {
    try {
      const updated = await mainApi.updateProfile(newData);
      setProfile(updated);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await mainApi.signOut();
    } catch (error) {
      console.error('Не удалось осуществить запрос. Попробуйте позже');
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      setProfile(await mainApi.getProfile());
    };
    try {
      getProfile();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="profile-page">
      <Header isLoggedIn />
      <main className="profile-page__main">
        <Profile data={profile} onSave={handleEditProfile} onLogout={handleLogout} />
      </main>
    </div>
  );
}
