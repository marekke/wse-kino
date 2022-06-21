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
