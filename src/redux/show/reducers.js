import {createReducer} from "@reduxjs/toolkit";
import {showCreated, showRemoved} from "./actions";

const initialState = {};

export default createReducer(initialState, {
  [showCreated]: (state, action) => {
    state[action.payload.id] = action.payload;
  },
  [showRemoved]: (state, action) => {
    delete state[action.payload];
  }
})
