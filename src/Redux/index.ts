import { combineReducers } from "redux";
import MyPageRedux from "./MyPageRedux";

const rootReducer = combineReducers({
  MyPageRedux,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
