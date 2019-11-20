import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
//不懂这个写法？？
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}): compose
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

//！！！三大问题要注意
// store有且只有一个
// reducer是纯函数
// 只有store自己改变state的值，其他的不能改变
// redux-thunk 中间件
export default store
