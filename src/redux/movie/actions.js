import {createAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";
import {getMovieByID} from "./selectors";
import {addError} from "../app/actions";
import {getActiveShowsByMovieID} from "../show/selectors";

export const movieCreated = createAction('movie/created');
export const movieUpdated = createAction('movie/updated');
export const movieRemoved = createAction('movie/removed');

export const createMovie = (payload) => (dispatch, getState) => {
  payload.id = generateIDForEntity('movie', getState());
  payload.duration = parseInt(payload.duration);
  dispatch(movieCreated(payload));
}

export const updateMovie = (payload) => (dispatch) => {
  payload.duration = parseInt(payload.duration);
  dispatch(movieCreated(payload));
}

export const removeMovie = (movieID) => (dispatch, getState) => {
  const movie = getMovieByID(getState(), movieID);
  if (movie === undefined) {
    dispatch(addError('Podany film nie istnieje.'));
    return;
  }

  const activeShows = getActiveShowsByMovieID(getState(), movieID);

  if (activeShows.length !== 0) {
    dispatch(addError('Wybrany film posiada aktywne seanse.'));
    return;
  }

 dispatch(movieRemoved(movieID));
}
