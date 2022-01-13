/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 10:02:39
 */
import axios from "axios";
import vue from '@/main.js'
import { startLoading, endLoading } from './loading'

// create an axios instance
const service = axios.create({
  baseURL: "/",
  changeOrigin: true,
  timeout: 60000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    startLoading()
    if (config.url.split('/')[0] === 'auth') {
      const token = window.localStorage.getItem('token')
      config.headers.Authorization = token
    }
    // if (config.data && config.data.hideLoad) {
    // } else {
    //   showLoading();
    // }
    return config;
  },
  error => {
    // do something with request error
    endLoading()
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    endLoading()
    let res = response.data
    if (res.status != 0) {
      if (res.message === '身份认证失败,请重新登录') {
        vue.$router.push({ name: 'Login' })
      }
      vue.$message(
        { type: 'warning', message: res.message }
      )
      return Promise.reject(res)
    }
    res.message && vue.$message(
      { type: 'success', message: res.message }
    )
    return response.data;
  },
  error => {
    endLoading()
    vue.$message.error(
      error
    );
    return Promise.reject(error);
  }
);

export default service;
