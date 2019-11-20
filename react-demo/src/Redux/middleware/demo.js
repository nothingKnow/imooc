const applyMiddleWare = ( ...middlewares) => createStore => (reducer, initState) => {
  const store = createStore(reducer, initState);
  const _dispatch = store.dispatch;
  const MiddleWareAPI = {
    getState: store.getState,
    dispatch: action => _dispatch(action)
  }
  const chain = [];
  chain = middlewares.map(middleware => {
    middleware(MiddleWareAPI)
  });
  let dispatch = compose(...chain)(store.dispatch)
  return {
    dispatch,
    ...store,
  }
}


function createThunkMiddleWare(extraArgument) {
  return ({dispatch, getState}) => next => action => {
    if(typeof action === 'function') {
      return action(dispatch, getState, extraArgument)
    }
    return next(action)
  }
}
const thunk = createThunkMiddleWare()
