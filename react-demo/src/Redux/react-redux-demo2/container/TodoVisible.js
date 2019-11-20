import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'


const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
      break;
    case 'SHOW_COMPLETED' :
      return todos.filter(item => item.completed)
      break;
    case 'SHOW_ACTIVE':
      return todos.filter(item => !item.completed)
      break;
  }
  return []
}

const stateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filterVisible),
  }
}

const dispatchToProps = (dispatch) => {
  return {
    toggleTodo(id) {
      dispatch(toggleTodo(id));
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)
