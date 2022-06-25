import {createAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";
import {getActiveShowsByScreenRoomID} from "../show/selectors";
import {addError} from "../app/actions";

export const screenRoomCreated = createAction('screenRoom/created');
export const screenRoomUpdated = createAction('screenRoom/updated');
export const screenRoomRemoved = createAction('screenRoom/removed');

export const createScreenRoom = (payload) => (dispatch, getState) => {
  payload.id = generateIDForEntity('screenRoom', getState());
  payload.number = parseInt(payload.number);
  payload.capacity = parseInt(payload.capacity);

  dispatch(screenRoomCreated(payload));
}

export const updateScreenRoom = (payload) => (dispatch, getState) => {
  payload.number = parseInt(payload.number);
  payload.capacity = parseInt(payload.capacity);

  dispatch(screenRoomCreated(payload));
}

export const removeScreenRoom = (screenRoomID) => (dispatch, getState) => {
  if (getActiveShowsByScreenRoomID(getState(), screenRoomID).length !== 0) {
    dispatch(addError('Wybrana sala kinowa posiada aktywne seanse.'));
    return;
  }

  dispatch(screenRoomRemoved(screenRoomID));
}