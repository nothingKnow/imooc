import React, { Component } from 'react';
import { connect } from 'react-redux'
import {inputChange, addTodos} from '../store/actions'

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.inputValue} onChange={this.props.inputChange}></input>
        <button onClick={() => this.props.addTodos()}>新增</button>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
  }
}
const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      dispatch(inputChange(e.target.value));
    },
    addTodos() {
      dispatch(addTodos(this.inputValue))
    }
  }
}
export default connect(stateToProps, dispatchToProps)(Form);
