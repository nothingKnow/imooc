import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext, themes } from "./theme-context";

//动态Context
class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    console.log(props);
    return (
      <button
        {...props} // onClick={() => this.props.onClick()} 简写
        style={{backgroundColor: theme.background}}

      >按钮</button>
    )
  }
}
ThemedButton.contextType = ThemeContext;

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      change Theme
    </ThemedButton>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    }
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light: themes.dark,
      }))
    }
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}/>
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
