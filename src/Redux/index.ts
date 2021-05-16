import { combineReducers } from "redux";
import AllDataReducer from "./AllData";
import MyPageReducer from "./AllData";

const rootReducer = combineReducers({
  AllDataReducer,
  MyPageReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
