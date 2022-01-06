/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 10:02:39
 */
import axios from "axios";

// create an axios instance
const service = axios.create({
  //  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: "/",
  changeOrigin: true,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // if (config.url.indexOf("?") > -1) {
    //   config.url = config.url + "&t=" + new Date().getTime();
    // } else {
    //   config.url = config.url + "?t=" + new Date().getTime();
    // }
    // if (config.data && config.data.hideLoad) {
    // } else {
    //   showLoading();
    // }
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    // if (response.headers.to_authorize_url) {
    //   window.location.href = response.headers.to_authorize_url;
    //   return;
    // }
    // if (response.headers.to_logout_url) {
    //   window.location.href = response.headers.to_logout_url;
    //   return;
    // }
    // //console.log("返回数据测试 response",response);
    // hideLoading();
    // // if the custom code is not 20000, it is judged as an error.
    // if (res.code && res.code != 1) {
    //   Message({
    //     message: "Error:" + res.message,
    //     type: "error",
    //     duration: 5 * 1000
    //   });
    //   return Promise.reject();
    // }
    return res;
  },
  error => {
    // hideLoading();
    // Message({
    //   message: "Error" + error,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    console.log(error);
    return Promise.reject();
  }
);

export default service;
