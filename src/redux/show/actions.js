import {createAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";
import {getMovieByID} from "../movie/selectors";
import {getScreenRoomByID} from "../screenRoom/selectors";

export const showCreated = createAction('show/created');
export const showRemoved = createAction('show/removed');
export const showTicketBought = createAction('show/ticket/bought');

export const createShow = (payload) => (dispatch, getState) => {
  payload.id = generateIDForEntity('show', getState());

  const movie = getMovieByID(getState(), payload.movieID);
  const screenRoom = getScreenRoomByID(getState(), payload.screenRoomID);
  const dateTime = payload.dateTime;
  delete payload.dateTime;

  payload.movie = {
    title: movie.title,
    duration: movie.duration
  };

  payload.screenRoom = {
    number: screenRoom.number
  }

  payload.dateStart = dateTime.format('YYYY-MM-DD HH:mm:ss');
  dateTime.add(movie.duration, 'minutes');
  payload.dateEnd = dateTime.format('YYYY-MM-DD HH:mm:ss');

  payload.seats = {};
  for (let i = 1; i <= screenRoom.capacity; i++) {
    payload.seats[i] = null;
  }

  dispatch(showCreated(payload));
}

export const removeShow = (showID) => (dispatch, getState) => {
  dispatch(showRemoved(showID));
}

export const buyTicket = (payload) => (dispatch, getState) => {
  const {showID, seatID} = payload;
  const ticketID = (Math.random() + 1).toString(36).substring(7);

  dispatch(showTicketBought({
    showID,
    seatID,
    ticketID
  }))
}