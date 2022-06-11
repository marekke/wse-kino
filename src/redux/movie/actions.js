import {createAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";

export const movieCreated = createAction('movie/created');
export const movieUpdated = createAction('updated/updated');

export const createMovie = (payload) => (dispatch, getState) => {
  payload.id = generateIDForEntity('movie', getState());
  dispatch(movieCreated(payload));
}

export const updateMovie = (payload) => (dispatch) => {
  dispatch(movieCreated(payload));
}
