import List from './components/TodoList'
import Index from './components/Index'
import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list/">列表</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list/:id"  component={List}></Route>
    </Router>
  )
}
export default AppRouter
