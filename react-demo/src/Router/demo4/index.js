import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ReactDom from "react-dom";

const ArticleList = () => (
  <div>
    <h2>ArticleList</h2>
  </div>
)

const children = () => (
    <div>111111</div>
)

const Article = (props) => (
  <div>
    <h2>Article</h2>
    <div>
      <Link to={'/article/'+ props.match.params.id + '/children1'}>tochildren1</Link>
      {/*<Link to="`/article/${props.match.params.id}/children2`">tochildren2</Link>*/}
      {/*<Link to="`/article/${props.match.params.id}/children3`">tochildren3</Link>*/}
    </div>
    <Route path="/article/:id/children1" component={children} />
    {/*<Route path="children2" component={children} />*/}
  </div>
)


const ArticleRecommend = () => (
  <div>
    <h2>ArticleRecommend</h2>
  </div>
)
class RouterView extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/article">/article</Link>
            </li>
            <li>
              <Link to="/article/432423">/article/id</Link>
            </li>
            <li>
              <Link to="/article/432423/recommend">/article/id/recommend</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/article" component={ArticleList} />
          <Route path="/article/:id" component={Article} />
          <Route path="/article/:id/recommend"  component={ArticleRecommend} />
        </Switch>
      </Router>
    )
  }
}


ReactDom.render(
  <RouterView />,
  document.getElementById('root')
)
