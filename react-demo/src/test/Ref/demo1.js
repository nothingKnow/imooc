import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.blur = this.blur.bind(this);
  }
  componentDidMount() {
// 通过ref让input自动获取焦点
    this.textInput.focus();
  }
// 让input失去焦点
  blur() {
    this.textInput.blur();
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
      </div>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
// 通过ref调用AutoFocusTextInput组件的方法
    this.inputInstance.blur();
  }
  render() {
    return (
      <div>
        <AutoFocusTextInput ref={(input) =>
        {this.inputInstance = input}}/>
        <button onClick={this.handleClick}>失去焦点</button>
      </div>
    );
  }
}
ReactDOM.render(<Container />, document.getElementById('root'));
