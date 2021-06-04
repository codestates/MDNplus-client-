import { combineReducers } from "redux";
<<<<<<< HEAD
import MyPageRedux from "./MyPageRedux";

const rootReducer = combineReducers({
  MyPageRedux,
=======
import AllDataReducer from "./AllData";
import ContentDataReducer from "./ContentData";
import MyPageReducer from "./MyPageData";
import SearchDataReducer from "./SearchData";
import QcontentDataReducer from "./QcontentData";
import AnswerPageReducer from "./AnswerPageData";
import HelpDataReducer from "./HelpData";
import FAQdataReducer from "./FAQdata";
import BooleanDataReducer from "./BooleanData"

const rootReducer = combineReducers({
  AllDataReducer,
  ContentDataReducer,
  MyPageReducer,
  SearchDataReducer,
  QcontentDataReducer,
  AnswerPageReducer,
  HelpDataReducer,
  FAQdataReducer,
  BooleanDataReducer
>>>>>>> 5ca157fbe7660cd99b637f68e71f7500b922e3db
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
