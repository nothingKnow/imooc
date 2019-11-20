import React from 'react'
import {Route, Link} from 'react-router-dom'
import Money from './pages/workplace/Money'
import Getup from './pages/workplace/Getup'

function Workplace() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/workplace/money">加薪秘籍</Link>
            <Link to="/workplace/getup">早起攻略</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
        </div>
        <Route path="/workplace/money" component={Money}></Route>
        <Route path="/workplace/getup" component={Getup}></Route>
      </div>
    </div>
  )
}

export default Workplace
