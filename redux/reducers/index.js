import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import itemReducer from './itemReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  items: itemReducer
})

export default rootReducer
