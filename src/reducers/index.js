import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from "./techReducer";
export default combineReducers({
  // global state name we want to specify
  log: logReducer,
  tech: techReducer,
});
