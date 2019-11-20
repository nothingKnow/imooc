import React, { Component } from 'react'
import ReactDOM from "react-dom";

//1、操纵props
// function withPersistentData(WrappedComponent) {
//   return class extends Component {
//     componentWillMount() {
//       let data = localStorage.getItem('data');
//       this.setState({data});
//     }
//     render() {
//     // 通过{...this.props} 把传递给当前组件的属性继续传递给被包装的组件
//       return <WrappedComponent data={this.state.data} {...this.props} />
//     }
//   }
// }
// class MyComponent extends Component {
//   render() {
//     return <div>{this.props.data}</div>
//   }
// }
// const MyComponentWithPersistentData = withPersistentData(MyComponent);

function withPersistentData(WrappedComponent) {
  return class extends Component{
    componentWillMount() {
      let data = localStorage.getItem('data');
      this.setState({data});
    }
    render() {
      // 通过{...this.props} 把传递给当前组件的属性继续传递给被包装的组件
      console.log(this.props);
      return <WrappedComponent data={this.state.data} {...this.props}/>
    }
  }
}

class MyComponent extends Component {
  render() {
    return <div>{this.props.data}</div>
  }
}
const MyComponentWidthPersistentData = withPersistentData(MyComponent);

console.log(MyComponentWidthPersistentData);
class RenderCompnent extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <MyComponentWidthPersistentData/>
  }
}
ReactDOM.render(
  <RenderCompnent data="hhh"/>,
  document.getElementById('root'),
)
