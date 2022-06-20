import {createReducer} from "@reduxjs/toolkit";
import {errorAdded, errorRemoved, redirect} from "./actions";

const initialState = {
  redirect: null,
  error: null,
};

export default createReducer(initialState, {
  [redirect]: (state, action) => {
    state.redirect = action.payload;
  },

  [errorAdded]: (state, action) => {
    state.error = action.payload;
  },

  [errorRemoved]: (state, action) => {
    state.error = null;
  }

})



