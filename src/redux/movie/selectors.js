import {getShowsByMovieID} from "../show/selectors";
import moment from "moment/moment";

export const getMovies = (state) => Object.values(state.movie);

export const getMovieByID = (state, id) => state.movie[id];

export const getStatistcForMovieByID = (state, id) => {
  const shows = getShowsByMovieID(state, id);
  const result = {};

  shows.forEach(show => {
    const date = moment(show.dateStart).format('YYYY-MM-DD');

    if (result.hasOwnProperty(date) === false) {
      result[date] = 0;
    }

    result[date] = result[date] + Object.values(show.seats).filter(seat => seat !== null).length;
  })

  return result;
};
