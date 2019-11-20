import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, (err, res) => {
        if(res.status === 'success') {
          resolve(res)
        }else {
          //message??
          reject(res.message);
        }
      })
    })
  }

  static ajax(options) {
    let loading;
    if(options.data && options.data.isShowLoading !== false) {

    }
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';

    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || '',
      }).then(res => {
        if(res.status === '200') {
          let res = res.data;
          //code = 0 是什么状态？
          if(res.code == '0') {
            resolve(res)
          }else {
          //  提示 ？
            Modal.info({
              title: '提示',
              content: res.msg,
            });
          }
        }else {
          reject(res.data)
        }
      })
    })
  }
}
