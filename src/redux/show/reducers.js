import {createReducer} from "@reduxjs/toolkit";
import {showCreated, showRemoved, showTicketBought} from "./actions";
import {exampleDataGenerated} from "../app/actions";

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
  },

  [exampleDataGenerated]: (state, action) => {
    Object.values(action.payload.show).forEach(show => state[show.id] = show);
  },
})
