import React, { Component } from 'react'
import Todo from "./Todo"

// const TodoList = ({todos, toggleTodo}) => {
//
// }

class TodoList extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      this.props.getTodoList();
  }
  // () {
  //   this.props.getTodoList();
  // }

  render() {
    const todos = this.props.todos;
    const toggleTodo = this.props.toggleTodo;
    return (
      <ul>
        {
          todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => toggleTodo(todo.id)}
            />
          )
        }
      </ul>
    )
  }

}
export default TodoList
