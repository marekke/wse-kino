import appReducer from "./app/reducers";
import movieReducer from "./movie/reducers";
import screenRoomReducer from "./screenRoom/reducers";
import showReducer from "./show/reducers";
import {combineReducers} from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
  app: appReducer,
  movie: movieReducer,
  screenRoom: screenRoomReducer,
  show: showReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
}

export default rootReducer;
