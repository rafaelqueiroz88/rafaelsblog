import { combineReducers } from 'redux'

import postReducer from './postReducer'
import messageReducer from './messageReducer'

const reducers = combineReducers({
    post: postReducer,
    message: messageReducer,
})

export default reducers