/*
 * @Author: Edison Chen
 * @Date: 2022-01-06 10:02:39
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/index.js'
import '@/assets/icon/iconfont.css'
import { tableHeaderColor } from '@/util/index'
import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;
Vue.prototype.tableHeaderColor = tableHeaderColor
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);



var vue = new Vue({
  render: h => h(App),
  router
}).$mount('#app')

export default vue