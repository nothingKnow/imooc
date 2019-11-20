/* 问题：
*  1、为什么form 的 submit 事件放进 dispatchToProps 事件里 e.preventDefault()事件无效呢？
*
* */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if(!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = '';
      }}>
          <input ref={node => input = node} />
          <button type="submit"> Add Todo</button>
      </form>
    </div>
  )
}

// const dispatchToProps = (dispatch) => {
//     return {
//       addTodo(e, input) {
//
//       }
//     }
// }

export default connect()(AddTodo);


