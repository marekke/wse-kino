import moment from "moment/moment";

export const getShows = (state) => Object.values(state.show);
export const getShowByID = (state, showID) => state.show[showID];

export const getShowSeatsStatistics = (state, showID) => {
  const show = getShowByID(state, showID);
  const available = Object.keys(show.seats).length;
  const reserved = Object.values(show.seats).filter(seat => seat !== null).length;

  return [available, reserved];
}

export const getShowsByScreenRoomID = (state, screenRoomID) =>
  Object.values(state.show).filter(show => show.screenRoomID === screenRoomID);

export const getReservedTimeSlotsForScreenRoomID = (state, screenRoomID) => {
  const result = [];

  Object.values(state.show).forEach(show => {
    if (show.screenRoomID !== screenRoomID) {
      return;
    }

    result.push([show.dateStart, show.dateEnd]);
  })

  return result;
};

export const getActiveShowsByMovieID = (state, movieID) => {
  const result = [];

  Object.values(state.show).forEach(show => {
    if (show.movieID !== movieID) {
      return;
    }

    if (moment().isBefore(show.dateEnd)) {
      result.push(show);
    }
  })

  return result;
}

export const getActiveShowsByScreenRoomID = (state, screenRoomID) => {
  const result = [];

  Object.values(state.show).forEach(show => {
    if (show.screenRoomID !== screenRoomID) {
      return;
    }

    if (moment().isBefore(show.dateEnd)) {
      result.push(show);
    }
  })

  return result;
}


export const getShowsByMovieID = (state, movieID) =>
  getShows(state).filter(show => show.movieID === parseInt(movieID));

export const getRepertoire = (state) => {
  const shows = getShows(state);
  return prepareRepertoire(shows);
}

export const getRepertoireForMovieByID = (state, movieID) => {
  const shows = getShowsByMovieID(state, movieID);
  return prepareRepertoire(shows);
}

const prepareRepertoire = (shows) => {
  const result = {};

  function compare(a, b) {
    if (a.dateStart < b.dateStart) {
      return -1;
    }

    if (a.dateStart > b.dateStart) {
      return 1;
    }

    return 0;
  }

  shows.sort(compare);

  shows.forEach(show => {
    if (moment().isAfter(show.dateEnd)) {
      return;
    }

    const dateStart = moment(show.dateStart);
    const date = dateStart.format('YYYY-MM-DD');

    if (result.hasOwnProperty(date) === false) {
      result[date] = {};
    }

    if (result[date].hasOwnProperty(show.movieID) === false) {
      result[date][show.movieID] = {
        movieID: show.movieID,
        movie: show.movie.title,
        duration: show.movie.duration,
        shows: [],
      };
    }


    result[date][show.movieID].shows.push({
      showID: show.id,
      timeStart: dateStart.format('HH:mm')
    });
  });

  return result;
}