import React, { useEffect, useState, useContext } from 'react';
import './ProfilePage.css';
import Header from '../../shared/Header/Header';
import Profile from './Profile/Profile';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function ProfilePage({ onEditProfile }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });

  const handleEditProfile = async (newData) => {
    const updatedProfile = await mainApi.updateProfile(newData);
    setProfile(updatedProfile);
    onEditProfile(updatedProfile);
  };

  const handleLogout = async () => {
    await mainApi.signOut();
  };

  useEffect(() => {
    setProfile(currentUser);
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
