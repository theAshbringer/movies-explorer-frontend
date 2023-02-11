const filterByQuery = (movies, queryParams) => {
  const { query, isShortMovie } = queryParams;

  let filtered = movies.filter((movie) => movie.nameRU
    .toLowerCase()
    .includes(query.toLowerCase()));

  if (isShortMovie) {
    filtered = filtered.filter((movie) => movie.duration <= 40);
  }
  return filtered;
};

export default filterByQuery;
