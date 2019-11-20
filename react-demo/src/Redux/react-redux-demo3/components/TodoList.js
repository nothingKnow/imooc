import React from 'react'
import Todo from "./Todo";
import { toggleTodo, VisibilityFilters } from '../store/actions'
import { connect } from 'react-redux'

const TodoList = ({todos, toggleTodo}) => (
  <ul>
    {
      todos.map((item, index) =>  {
        return ( <Todo
          key={item.id}
          {...item}
          onClick={() => toggleTodo(item.id)}
        />);
      })
    }
  </ul>
)

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
  return []
}

const stateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filterVisible)
  }
}

const dispatchToProps = (dispatch) => {
  return {
    toggleTodo(id) {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)
