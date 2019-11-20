import todos from './todos'
import filterVisible from './filterVisible'
import { combineReducers } from 'redux'


export default combineReducers({
  todos,
  filterVisible,
})
