import React from 'react'
import {Route, Link} from 'react-router-dom'
import ReactPage from './pages/video/ReactPage'
import Flutter from './pages/video/Flutter'
import Vue from './pages/video/Vue'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/video/reactPage">React教程</Link>
            <Link to="/video/Flutter">Flutter教程</Link>
            <Link to="/video/Vue">Vue教程</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
        </div>
        <Route path="/video/reactPage" component={ReactPage}></Route>
        <Route path="/video/Flutter" component={Flutter}></Route>
        <Route path="/video/Vue" component={Vue}></Route>
      </div>
    </div>
  )
}

export default Video
