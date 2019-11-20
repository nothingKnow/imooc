import { combineReducers } from 'redux'
import todosReducer from './todos'
import inputReducer from './input'
import filterVisible from './filterVisible'

export default combineReducers({
  todos: todosReducer,
  inputValue: inputReducer,
  filterVisible,
})
