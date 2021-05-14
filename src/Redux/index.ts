import {combineReducers} from 'redux'
import AllDataReducer from './AllData'

const rootReducer = combineReducers({
    AllDataReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;