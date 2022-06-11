import {createReducer} from "@reduxjs/toolkit";
import {screenRoomCreated, screenRoomUpdated} from "./actions";

const initialState = {};

export default createReducer(initialState, {
  [screenRoomCreated]: (state, action) => {
    state[action.payload.id] = action.payload;
  },
  [screenRoomUpdated()]: (state, action) => {
    state[action.payload.id] = action.payload;
  }
})



