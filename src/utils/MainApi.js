import { moviesApiUrl } from './const';

const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(res.message);
  }
  return res.json();
};

class MainApi {
  constructor() {
    // this.baseUrl = 'https://api.fordragon.movies.nomoredomains.club';
    this.baseUrl = 'http://localhost:3000';
  }

  async signUp(user) {
    const res = await fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (res.status === 201) {
      return handleResponse(res);
    }
    if (res.status === 400) {
      throw new Error('Что-то не так с введенными данными...');
    }
    if (res.status === 409) {
      throw new Error('Пользователь уже зарегистрирован');
    }
    throw new Error('Что-то пошло не так');
  }

  async signIn(user) {
    const res = await fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (res.status === 200) {
      return handleResponse(res);
    }
    if (res.status === 400) {
      throw new Error('Что-то не так с введенными данными...');
    }
    if (res.status === 401) {
      throw new Error('Неверный логин или пароль');
    }
    throw new Error('Что-то пошло не так');
  }

  async likeMovie({
    country, director, duration, year, description,
    image, trailerLink, nameRU, nameEN, id,
  }) {
    const res = await fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: [moviesApiUrl, image.url].join(''),
        trailerLink,
        nameRU,
        nameEN,
        movieId: id,
        thumbnail: [moviesApiUrl, image.url].join(''),
      }),
    });
    return handleResponse(res);
  }

  async deleteMovie(movieId) {
    const res = await fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(res);
  }

  async getSavedMovies() {
    const res = await fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(res);
  }

  async getProfile() {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return handleResponse(res);
  }

  async updateProfile(profile) {
    const res = await fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });
    if (res.status === 200) {
      return handleResponse(res);
    }
    if (res.status === 400) {
      throw new Error('Что-то не так с введенными данными...');
    }
    throw new Error('Ой, что-то пошло не так :(');
  }

  async signOut() {
    const res = await fetch(`${this.baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(res.message);
    }
  }
}

const mainApi = new MainApi();

export default mainApi;
