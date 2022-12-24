import { combineReducers } from "redux";
import spaceReducer from "./reducer";

const rootReducer = combineReducers({
  spaceData: spaceReducer
});

export default rootReducer;
