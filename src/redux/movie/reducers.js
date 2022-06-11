import {createReducer} from "@reduxjs/toolkit";
import {movieCreated} from "./actions";

const initialState = [];

export default createReducer(initialState, {
  [movieCreated]: (state, action) => {
    state.push(action.payload);
  }
})



