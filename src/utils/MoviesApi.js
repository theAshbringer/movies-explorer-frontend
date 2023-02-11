class MoviesApi {
  constructor() {
    this.baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
  }

  async getMovies() {
    const response = await fetch(this.baseUrl, {
      method: 'GET',
    });
    if (!response.ok) {
      throw Error('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
    }
    return response.json();
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
