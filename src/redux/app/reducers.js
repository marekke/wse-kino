import {createReducer} from "@reduxjs/toolkit";
import {redirect} from "./actions";

const initialState = {
  redirect: null
};

export default createReducer(initialState, {
  [redirect]: (state, action) => {
    state.redirect = action.payload;
  },
})



