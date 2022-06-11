import {createAction} from "@reduxjs/toolkit";
import {generateIDForEntity} from "../../utils/IDGeneratator";

export const screenRoomCreated = createAction('screenRoom/created');
export const screenRoomUpdated = createAction('screenRoom/updated');

export const createScreenRoom = (payload) => (dispatch, getState) => {
  payload.id = generateIDForEntity('screenRoom', getState());
  dispatch(screenRoomCreated(payload));
}

export const updateScreenRoom = (payload) => (dispatch, getState) => {
  dispatch(screenRoomCreated(payload));
}
