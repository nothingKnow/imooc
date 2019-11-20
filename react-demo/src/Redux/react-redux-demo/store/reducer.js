const defaultState = {
  inputValue: 'zs 测试',
  list: [],
}
export default (state = defaultState, action) => {
  if(action.type === 'changInputValue'){
    return Object.assign({}, state, {inputValue: action.value});
  }else if(action.type === 'addItem') {
    return Object.assign({}, {inputValue: '', list: [...state.list, state.inputValue]});
  }
  return state;
}
