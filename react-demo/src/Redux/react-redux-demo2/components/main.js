import AddTodo from '../container/AddTodo'
import TodoList from '../container/TodoVisible'
import LinkList from './LinkList'
import React  from 'react'

export default () => (
  <div>
    <AddTodo />
    <LinkList />
    <TodoList />
  </div>
)
