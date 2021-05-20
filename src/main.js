/*
 * @Description: 
 * @Date: 2021-05-07 19:32:33
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
// import './plugins/element.js'
import './assets/css/global.css'
import './styles/button.less'
import './assets/fonts/iconfont.css'
import moment from 'moment'
import 'nprogress/nprogress.css'
import axios from 'axios'
import './icons'
import './router/permission'
// 导入依赖插件
import TreeTable from 'vue-table-with-tree-grid'


Vue.use(ElementUI);

Vue.prototype.$moment = moment
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return dataStr != undefined && moment(dataStr).isValid() ? moment(dataStr).format(pattern) : ""
});
Vue.prototype.dateFormat = function(row, column, cellValue, index) {
    return moment(cellValue).isValid() && cellValue != "0001-01-01T00:00:00" ? moment(cellValue).format('YYYY-MM-DD HH:mm:ss') : ""
};

// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 请求拦截器 对请求预处理
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 讲axios挂载到原型上
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 注册全局组件
Vue.component('tree-table', TreeTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

