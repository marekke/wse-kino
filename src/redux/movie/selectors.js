export const getMovies = (state) => Object.values(state.movie);
export const getMovieByID = (state, id) => state.movie[id];

