import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const tabArr = [1,2,3,4];
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1
    }
  }
  handleClick(item) {
    this.setState({
      current: item,
    })
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if(this.state.current === nextState.current) {
      return false;
    }
    return true;
  }
  render() {
    console.log('render');
    return (
      <ul>
        {
          tabArr.map(item => {
            // const classname = item === this.state.current ? `className="current"` : '';
            return <li onClick={() => this.handleClick(item)} className={item === this.state.current ? `current` : ''} key={item}>{item}</li>
          })
        }
      </ul>
    )
  }
}
ReactDOM.render(<Tab />, document.getElementById('root'));
