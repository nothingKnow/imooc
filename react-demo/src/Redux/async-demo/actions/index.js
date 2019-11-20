let id = 1;
export const addTodo= text => ({
  type: 'ADD_TODO',
  id: id++,
  text,
})

export const getTodo = (list) => ({
  type: 'GET_TODO',
  list
})

export const addTodoAsync = (text) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addTodo(text))
    }, 2000)
  }
}

export function getTodoListAsync() {
  return dispatch => {
    setTimeout( () => {
      const list = [{
        id: 444,
        text: '原始数据',
        completed: true,
      }]
      dispatch(getTodo(list))
    }, 500)
  }
}
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
