import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ReactDom from "react-dom";
import TodoList from './components/TodoList'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[
        {uid:123,title:'技术胖的个人博客-1'},
        {uid:456,title:'技术胖的个人博客-2'},
        {uid:789,title:'技术胖的个人博客-3'},
      ]
    }
  }
  render() {
    return (
      <Router>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return (
                <li key={index}>
                  <Link to={'/list/'+item.uid}> {item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <Switch>
          <Route path="/list/:uid" component={TodoList}></Route>
        </Switch>
      </Router>
    )
  }
}


ReactDom.render(
  <Index />,
  document.getElementById('root')
)
