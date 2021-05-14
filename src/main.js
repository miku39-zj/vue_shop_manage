/*
 * @Description: 
 * @Date: 2021-05-07 19:32:33
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import './plugins/element.js'
import './assets/css/global.css'
import './styles/button.less'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import './icons'
// 导入依赖插件
import TreeTable from 'vue-table-with-tree-grid'


Vue.use(ElementUI)

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
  render: h => h(App)
}).$mount('#app')

