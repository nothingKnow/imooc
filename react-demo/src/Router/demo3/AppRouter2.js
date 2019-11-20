import React from 'react'
import { HashRouter as Router, Route, Switch} from "react-router-dom"
import './main.css'
import Main2 from "./pages/Main";
import Home from "./pages/Home";
import Video from './Video'
import Workplace from './Workplace'
import RightWrapper from './pages/RightWrapper'

const AppRouter2 = () => {
  return (
    <Router>
      <Route path="/" render={() => (
        <Main2>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/commonPage" render={() =>
              <RightWrapper>
                <Switch>
                   <Route path="/video"  component={Video} />
                   <Route path="/workplace"  component={Workplace} />
                </Switch>
              </RightWrapper>
            } />
          </Switch>
        </Main2>
      )}>
      </Route>
    </Router>
  )
}
// {/*<Route path="/workplace"  component={Workplace} />*/}
export default AppRouter2
