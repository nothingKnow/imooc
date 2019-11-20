import React from 'react'
import { Link } from 'react-router-dom'

class  Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul>
        <li key={"1"}><Link to={'/list/123'}>123</Link></li>
        <li key={"2"}><Link to={'/list/456'}>456</Link></li>
        <li key={"3"}><Link to={'/list/789'}>789</Link></li>
      </ul>
    )
  }
  componentDidMount() {
    console.log(this.props.match.params.id)
  }
}

export default Index
