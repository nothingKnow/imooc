/*
*  再React router中有三种类型的组件，一是路由组件，第二种是 路由匹配组件， 第三种是导航组件
*  路由组件： BrowserRouter 和 HashRouter
*  路径匹配的组件： Route 和 Switch
*  导航组件： Link
*
* */

/*
*   Router组件决定了我们使用html5 history api，
*   Route组件定义了路由的匹配规则和渲染内容，
*   使用 Link 组件进行路由之间的导航。
*   使用 exact 属性来定义路径是不是精确匹配。
* */
import React from 'react'
import TodoList from './components/TodoList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import './App.css'
import ReactDom from "react-dom";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>root</Link> <br />
        <Link to='/hello/123'>hello</Link> <br />
        <Link to='/todolist'>todolist</Link>
        <div>
          <Route path='/'  exact render={() => {
            return <div>root page</div>
          }} />
          {/*<Route path='/hello' render={() => {
            return <div>hello world</div>
          }} />*/}

          <Route path='hello/:name' render={({match, history}) => {
              return <div>hello {match.params.name}
                <button onClick={()=>{
                  history.push('/hello')
                }}>to hello</button>
              </div>
            }
          } />
          <Route path='/todolist' component={TodoList} />
        </div>
      </Router>
    </div>
  )
}


ReactDom.render(
    <App />,
  document.getElementById('root')
)
