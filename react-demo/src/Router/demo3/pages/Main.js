import React from 'react'
import { Link} from "react-router-dom"

const Main = (props) => {
  return (
      <div className={"mainDiv"}>
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">博客首页</Link></li>
            <li><Link to="/commonPage/video">视频教程</Link></li>
            <li><Link to="/commonPage/workplace">职场技能</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          {props.children}
        </div>
      </div>
  )
}

export default Main
