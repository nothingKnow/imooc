import React, { Component } from 'react'
import ReactDOM from "react-dom";


//2、高阶组件通过ref获取被包装组件实例的引用，然后高阶组件就具备了直接操作被包装的属性或方法的能力
// 这个不知道咋用，报错了让我很提不起劲来。 
function widthRef(wrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.someMethod = this.someMethod.bind(this);
    }
    someMethod() {
      this.wrappedInstance.someMethodInWrappedComponent();
    }
    render() {
      //为包装组件添加ref属性，从而获取该组件实例并赋值给this.wrappedInstance
      return <wrappedComponent ref={(instance) => {this.wrappedInstance = instance}} {...this.props}/>
    }
  }
}

class MyComponent extends Component {
  someMethodInWrappedComponent() {
    console.log(111)
  }
  render() {
    return (
      <button value={"按钮"}>fdfd</button>
    )
  }
}
const MyComponentwidthRefData = widthRef(MyComponent);
class RenderCompnent extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <MyComponentwidthRefData/>
  }
}
ReactDOM.render(
  <RenderCompnent/>,
  document.getElementById('root'),
)
