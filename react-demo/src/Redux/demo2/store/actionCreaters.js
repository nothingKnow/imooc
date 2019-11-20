import { CHANGE_INPUT, Add_ITEM, DELE_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios';
import store from "./index";

//
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: Add_ITEM,
})

export const deleItemAction = (index) => ({
  type: DELE_ITEM,
  index,
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data: data,
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
      .then((res) => {
        const data = res.data;
        console.log(data);
        const action = getListAction(data);
        dispatch(action);
      })
  }
}
