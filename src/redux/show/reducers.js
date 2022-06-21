import {createReducer} from "@reduxjs/toolkit";
import {showCreated, showRemoved, showTicketBought} from "./actions";

const initialState = {};

export default createReducer(initialState, {
  [showCreated]: (state, action) => {
    state[action.payload.id] = action.payload;
  },

  [showRemoved]: (state, action) => {
    delete state[action.payload];
  },

  [showTicketBought]: (state, action) => {
    state[action.payload.showID].seats[action.payload.seatID] = action.payload.ticketID;
  }
})
