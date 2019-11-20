export const inputChange = (value) => ({
  type: 'INPUT_CHANGE',
  value,
})

let id = 0;
export const addTodos = (value) => ({
  type: 'ADD_TODO',
  id: id++,
  value
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibleFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
