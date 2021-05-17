<<<<<<< HEAD
import {combineReducers} from 'redux'
import AllDataReducer from './AllData'
import ContentDataReducer from './ContentData'

const rootReducer = combineReducers({
    AllDataReducer, ContentDataReducer
})
=======
import { combineReducers } from "redux";
import AllDataReducer from "./AllData";
import MyPageReducer from "./MyPageData";

const rootReducer = combineReducers({
  AllDataReducer,
  MyPageReducer,
});
>>>>>>> 36cb644f88b4ce9bc4f5416b7a269e2abf2a265c

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
