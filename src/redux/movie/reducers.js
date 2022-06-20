import {createReducer} from "@reduxjs/toolkit";
import {movieCreated, movieRemoved, movieUpdated} from "./actions";

const initialState = {};

export default createReducer(initialState, {
  [movieCreated]: (state, action) => {
    state[action.payload.id] = action.payload;
  },

  [movieUpdated]: (state, action) => {
    state[action.payload.id] = action.payload;
  },

  [movieRemoved]: (state, action) => {
    delete state[action.payload];
  },
})



