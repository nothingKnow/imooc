import React, { Component } from 'react';
import store from './store';
import { changeInputAction, addItemAction, deleItemAction, getTodoList } from './store/actionCreaters'
import {TodoListUI} from './TodoListUI'

class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        list={this.state.list}
        onAdd={() => this.onAdd()}
        deleItem={this.deleItem}
      />
    );
  }
  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action)
  }
  onAdd() {
    const action = addItemAction();
    store.dispatch(action)
  }
  deleItem(index) {
    console.log(index);
    const action = deleItemAction(index);
    store.dispatch(action)
  }
  storeChange() {
    this.setState(store.getState())
  }
}
export default TodoList;
