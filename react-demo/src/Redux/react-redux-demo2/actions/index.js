let id = 1;
export const addTodo= text => ({
  type: 'ADD_TODO',
  id: id++,
  text,
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibleFilter = (filterName) => ({
  type: 'SET_VISIBLE_FILTER',
  filterName,
})

export const FilterVisibleList = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}
