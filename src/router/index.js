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
        title: "工作台",
        icon: 'el-icon-s-home',
      }
    }]
  }
]

export const dynamicRoutes = [
  // {
  //   path: '/users',
  //   component: Home,
  //   redirect: '/users/userList',
  //   meta: {
  //     title: "用户管理",
  //     icon: "iconfont icon-user",
  //     hidden: false
  //   },
  //   children: [{
  //     path: '/users/userList',
  //     component: () => import('@/components/user/Users.vue'),
  //     name: 'userList',
  //     meta: {
  //       title: "用户列表",
  //       icon: 'el-icon-tickets',
  //       hidden: false,
  //     }
  //   }]
  // },
  // {
  //   path: '/rights',
  //   component: Home,
  //   redirect: '/rights/index',
  //   meta: {
  //     title: "权限管理",
  //     icon: "iconfont icon-user",
  //     hidden: false
  //   },
  //   children: [
  //     {
  //     path: 'roles',
  //     component: () => import('@/components/power/Rights.vue'),
  //     name: 'rightsroles',
  //     meta: {
  //       title: "角色列表",
  //       icon: 'el-icon-tickets',
  //       hidden: false,
  //     }
  //   },
  //   {
  //     path: 'Rights',
  //     component: () => import('@/components/power/Rights.vue'),
  //     name: 'rightsRights',
  //     meta: {
  //       title: "权限列表",
  //       icon: 'el-icon-tickets',
  //       hidden: false,
  //     }
  //   },

  //  ]
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constRouter
})




export default router