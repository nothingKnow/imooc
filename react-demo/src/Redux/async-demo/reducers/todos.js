export default (state = [], action) => {
  if(action.type === 'ADD_TODO') {
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false,
      }
    ];
  }else if(action.type === 'TOGGLE_TODO') {
    return state.map(item => {
      if(item.id === action.id) {
        item.completed = true;
      }
      return item;
    })
  }else if(action.type === 'GET_TODO') {
    return action.list;
  }
  return state;
}
