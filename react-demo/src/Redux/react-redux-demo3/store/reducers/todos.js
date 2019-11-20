export default (todos = [], action) => {
  if(action.type === 'ADD_TODO') {
    return todos.concat({
        text: action.value,
        id: action.id,
        completed: false,
    })
  }else if(action.type === 'TOGGLE_TODO') {
    return todos.map(todo => {
      if(todo.id === action.id) {
        todo.completed = true;
      }
      return todo;
    })
  }
  return todos;
}
