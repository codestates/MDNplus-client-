import {combineReducers} from 'redux'
import AllDataReducer from './AllData'
import ContentDataReducer from './ContentData'

const rootReducer = combineReducers({
    AllDataReducer, ContentDataReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;
