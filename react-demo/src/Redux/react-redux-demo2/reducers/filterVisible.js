export default (state = 'SHOW_ALL', action) => {
  if(action.type === 'SET_VISIBLE_FILTER') {
    return action.filterName;;
  }
  return state;
}
