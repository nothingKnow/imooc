import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

//Provider 提供器 是用来干嘛的呢？
import { Provider } from 'react-redux';
import store from './store';
const App = (
  <Provider store={store}>
    <TodoList/>
  </Provider>
)


ReactDOM.render(App, document.getElementById('root'));
