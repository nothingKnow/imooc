import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function CheckBox(props) {
  return (
    <label>
      <input
        type="checkbox"
        value={props.name}
        checked={props.checked}
        {...props}
      />{props.name}
    </label>
  )
}
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { 'name':'red', 'checked': true },
        { 'name':'green', 'checked': false },
        { 'name':'blue', 'checked': false }
      ],
      checkNum: 1,
    };
  }
  handleChange(e) {
    const name = e.target.name;
    const checked = e.target.checked;
    let checkNum = 0;
    const data = this.state.data.map(item => {
      item.checked = item.name === name ? checked : item.checked;
      checkNum = item.checked ? ++checkNum : checkNum;
      return item;
    });

    this.setState({
      data: data,
      checkNum: checkNum,
    });
  }
  handleCheckAllInvert(flag) {
    const data = this.state.data.map(item => {
      item.checked = flag;
      return item;
    });
    this.setState({
      data: data,
      checkNum: flag ? data.length: 0,
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <label><input type="checkbox" checked={this.state.checkNum === this.state.data.length} onChange={(e) => this.handleCheckAllInvert(true)}/>全选</label>
        <label><input type="checkbox" checked={this.state.checkNum === 0} onChange={(e) => this.handleCheckAllInvert(false)}/>反选</label>
        {
          this.state.data.map(item =>
            <CheckBox
              {...item}
              key={item.name}
              onChange={(e) => this.handleChange(e)}
            />
          )
        }
      </div>
    )
  }
}
ReactDOM.render(<Form />, document.getElementById('root'));
