import React, { Component } from 'react';
//连接器的用处？？
import { connect } from 'react-redux';

class TodoList extends Component{
  constructor(props) {
    super(props);
    // this.state = store.getState();
    // this.storeChange = this.storeChange.bind(this);
    // store.subscribe(this.storeChange)
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.props.inputValue}
          onChange={this.props.inputChange.bind(this)}
          ></input>
          <button
            onClick={this.props.clickButton.bind(this)}
          >新增</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) =>  {
              return ( <li key={item + index}>{item}</li>);
            })
          }
        </ul>
      </div>
    );
  }
}
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      let action = {
        type: 'changInputValue',
        value: e.target.value
      }
      dispatch(action)
    },
    clickButton() {
      let action = {
        type: 'addItem'
      }
      dispatch(action);
    }
  }
}
//传递的是映射关系？？connect 主要做了什么呢？
export default connect(stateToProps, dispatchToProps)(TodoList)
