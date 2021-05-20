import { combineReducers } from "redux";
import AllDataReducer from "./AllData";
import ContentDataReducer from "./ContentData";
import MyPageReducer from "./MyPageData";
import SearchDataReducer from "./SearchData";
import QcontentDataReducer from "./QcontentData";

const rootReducer = combineReducers({
  AllDataReducer,
  ContentDataReducer,
  MyPageReducer,
  SearchDataReducer,
  QcontentDataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
