import {createReducer} from "@reduxjs/toolkit";
import {movieCreated, movieUpdated} from "./actions";

const initialState = {};

export default createReducer(initialState, {
  [movieCreated]: (state, action) => {
    state[action.payload.id] = action.payload;
  },

  [movieUpdated]: (state, action) => {
    state[action.payload.id] = action.payload;
  }
})



