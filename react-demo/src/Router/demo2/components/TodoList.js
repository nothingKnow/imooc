import React from 'react'

const TodoList = (props) => {
  return (
    <div>uid：{props.match.params.uid}</div>
  )
}

export default TodoList
