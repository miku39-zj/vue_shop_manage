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

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}


// 通用页面, 这里的配置不需要权限
export const constRouter = [{
    path: '/login',
    component: () => import('@/components/Login'),
    hidden: true //导航菜单忽略选项
  },
  {
    path: '/',
    component: Home,
    redirect: '/home',
    hidden: true,
  },
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: "首页", //导航菜单项标题
      icon: 'el-icon-s-home' //导航菜单图标
    },
    children: [{
      path: '/home',
      component: () => import('@/components/Welcome.vue'),
      name: 'welcome',
      meta: {
        title: "欢迎页",
        icon: 'el-icon-s-home',
      }
    }]
  }
]

export const dynamicRoutes = [{
  path: '/',
  component: Home,
  name:"User",
  // redirect: '/User',
  meta: {
    title: "用户列表",
    icon: 'el-icon-user',
    hidden: false
  },
  children: [{
      path: '/User',
      component: () => import('@/views/User/userList.vue'),
      name: 'userlist',
      meta: {
        title: "用户列表",
        icon: 'el-icon-user',
        hidden: false,
      }
    },
    {
      path: '/Skill',
      component: () => import('@/views/User/skillList.vue'),
      name: 'userSkill',
      meta: {
        title: "技能列表",
        icon: 'el-icon-scissors',
        hidden: false,
      }
    },
  ]
}]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constRouter
})




export default router