import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NavLeft from '../NavLeft'
import Header from '../Header'
import Footer from '../Footer'
import '../../style/common.scss'

class Container extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft/>
        </Col>
        <Col span={20} className="main">
          <Header />
          <div className="content">
            {/*{this.props.children}*/}
          </div>
        </Col>
      </Row>
    )
  }
}

export default Container
