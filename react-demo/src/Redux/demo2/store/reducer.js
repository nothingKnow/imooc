import {CHANGE_INPUT, Add_ITEM, DELE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
  inputValue: 'write something',
  list: []
};
export default (state = defaultState, action) => {
  //reducers 里只能接收state,不能改变state,返回一个新的state
  if(action.type === CHANGE_INPUT) {
    return Object.assign({}, state, {inputValue: action.value})
  }else if(action.type === Add_ITEM) {
    const list = state.list.concat(state.inputValue);
    return Object.assign({}, state, {list, inputValue: ''} )
  }else if(action.type === DELE_ITEM) {
    const list = [...state.list];
    list.splice(action.index, 1);
    return Object.assign({}, state, {list} )
  }else if(action.type === GET_LIST) {
    let list = [...state.list];
    list = action.data.data.list;
    return Object.assign({}, state, {list} )
  }
  return state;
}
