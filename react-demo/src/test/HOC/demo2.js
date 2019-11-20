import React, { Component } from 'react'
import ReactDOM from "react-dom";

//3、利用高阶组件将原本受控组件需要自己维护的状态统一提升到高阶组件中。

function withControlledState(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      };
      this.handleValueChange = this.handleValueChange.bind(this);
    }
    handleValueChange(event){
      this.setState({
        value: event.target.value
      });
    }
    render() {
      //newProps 保存受控组件需要使用的属性和事件处理函数。
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      };
      return <WrappedComponent {...this.props}{...newProps}/>
    }
  }
}

class SimpleControlledComponent extends Component {
  render() {
    return (
      <input name="simple" {...this.props.controlledProps} />
    );
  }
}


const ComponentWithControlledState = withControlledState(SimpleControlledComponent);

class RenderCompnent extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return <MyComponentWidthPersistentData data={"hhhhh"}/>
  }
}
ReactDOM.render(
  <RenderCompnent data="hhh"/>,
  document.getElementById('root'),
)
