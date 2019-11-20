import React from 'react'

class  TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>list Page {this.props.match.params.id}</p>
    )
  }
}

export default TodoList
