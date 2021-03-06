import { combineReducers } from "redux";
import AllDataReducer from "./AllData";
import ContentDataReducer from "./ContentData";
import MyPageReducer from "./MyPageData";
import SearchDataReducer from "./SearchData";
import QcontentDataReducer from "./QcontentData";
import AnswerPageReducer from "./AnswerPageData";
import HelpDataReducer from "./HelpData";
import FAQdataReducer from "./FAQdata";
import BooleanDataReducer from "./BooleanData";

const rootReducer = combineReducers({
  AllDataReducer,
  ContentDataReducer,
  MyPageReducer,
  SearchDataReducer,
  QcontentDataReducer,
  AnswerPageReducer,
  HelpDataReducer,
  FAQdataReducer,
  BooleanDataReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
