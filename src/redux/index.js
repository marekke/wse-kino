import movieRedcuser from "./movie/reducers";
import {combineReducers} from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
  movie: movieRedcuser,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
}

export default rootReducer;
