import { combineReducers } from "redux";
import AllDataReducer from "./AllData";
import ContentDataReducer from "./ContentData";
import MyPageReducer from "./MyPageData";
import SearchDataReducer from "./SearchData";
import HelpDataReducer from './HelpData'

const rootReducer = combineReducers({
  AllDataReducer,
  ContentDataReducer,
  MyPageReducer,
  SearchDataReducer,
  HelpDataReducer
  
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
