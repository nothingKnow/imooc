import React from 'react';
import ReactDOM from 'react-dom';

/* 通过 Context  Provider 来传递数据给子组件
* React.createContext 创建一个 Context对象，订阅了一个Context对象
*
* */
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
      <Toolbar/>
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}
class ThemedButton extends React.Component {
  // static contextType = ThemeContext;
  render() {
    return (
        <ThemeContext.Consumer>
          {value => <button theme={value}>按钮</button>}
        </ThemeContext.Consumer>
     )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
)
