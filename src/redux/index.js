import movieRedcuser from "./movie/reducers";
import appReducer from "./app/reducers";
import {combineReducers} from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
  app: appReducer,
  movie: movieRedcuser,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
}

export default rootReducer;
