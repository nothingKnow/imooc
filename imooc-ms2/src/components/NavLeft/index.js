import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import menuConfig from '../../config/menuConfig'

const {SubMenu} = Menu;

class NavLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: [],
    }
  }
  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode
    })
  }

  renderMenu = (data) => {
    return (
      data.map(item => {
        if(item.children) {
          return (
            <SubMenu
              key={item.key}
              title={item.title}
            >
              { this.renderMenu(item.children)}
            </SubMenu>
          )
        }
        return <Menu.Item key={item.key} title={item.title}>
          <a to={item.key}>{item.title}</a>
         </Menu.Item>
      })
    )
  }
  render() {
    return (
      <div>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}

export default NavLeft
