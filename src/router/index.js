/*
 * @Description: 
 * @Date: 2021-05-07 19:32:33
 */
/*
 * @Description: 
 * @Date: 2021-05-07 19:32:33
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'

Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [{
    path: '/login',
    component: () => import('@/components/Login'),
    hidden: true //导航菜单忽略选项
  },
  {
    path: '',
    component: Home,
    redirect: '/home',
    hidden: true,
  },
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      title: "首页", //导航菜单项标题
      icon: 'el-icon-s-home' //导航菜单图标
    },
    children: [{
      path: '',
      component: () => import('@/components/Welcome.vue'),
      name: 'welcome',
      meta: {
        title: "欢迎页",
        icon: 'el-icon-s-home',
      }
    }]
  }
]

export const dynamicRoutes = [

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constRouter
})




export default router