import { combineReducers } from "redux";
import AllDataReducer from "./AllData";
import ContentDataReducer from "./ContentData";
import MyPageReducer from "./MyPageData";
import SearchDataReducer from "./SearchData";

const rootReducer = combineReducers({
  AllDataReducer,
  ContentDataReducer,
  MyPageReducer,
  SearchDataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
