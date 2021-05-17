import {combineReducers} from 'redux'
import AllDataReducer from './AllData'
import ContentDataReducer from './ContentData'
import MyPageReducer from "./MyPageData";

const rootReducer = combineReducers({
    AllDataReducer, ContentDataReducer, MyPageReducer,

})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
