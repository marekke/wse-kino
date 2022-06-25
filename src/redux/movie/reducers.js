import {createReducer} from "@reduxjs/toolkit";
import {movieCreated, movieRemoved, movieUpdated} from "./actions";
import {exampleDataGenerated} from "../app/actions";

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

  [exampleDataGenerated]: (state, action) => {
    Object.values(action.payload.movie).forEach(movie => state[movie.id] = movie);
  },
})



