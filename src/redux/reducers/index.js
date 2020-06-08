import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
  layout: layoutReducer,
  player: playerReducer,
});
