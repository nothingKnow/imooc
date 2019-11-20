export default (input = '', action ) => {
  if(action.type === 'INPUT_CHANGE') {
    return action.value;
  }
  return input
}
