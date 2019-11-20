import React from 'react'
import ReactDom from 'react-dom';
import Main from './components/main'
import store from './store'
import { Provider } from 'react-redux'

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
