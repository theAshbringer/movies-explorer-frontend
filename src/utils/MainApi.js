const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error(res.message);
    // return Promise.reject(res);
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
      return Promise.reject(new Error('Ошибка валидации'));
    }
    if (res.status === 409) {
      return Promise.reject(new Error('Пользователь уже зарегистрирован'));
    }
    return Promise.reject(new Error('Что-то пошло не так'));
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
      return Promise.reject(new Error('Что-то не так с данными авторизации, пожалуйста, проверьте формат'));
    }
    if (res.status === 401) {
      return Promise.reject(new Error('Неверный логин или пароль'));
    }
    return Promise.reject(new Error('Что-то пошло не так'));
  }

  async likeMovie(movie) {
    const res = await fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
    return handleResponse(res);
  }

  async dislikeMovie(movieId) {
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
}

const mainApi = new MainApi();

export default mainApi;
