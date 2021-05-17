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

const dynamicRoutes = [{
    path: '/home',
    component: () => import('@/components/Home.vue'),
    redirect: '/welcome',
    children: [{
        path: '/welcome',
        component: () => import('@/components/Welcome.vue')
      },
      {
        path: '/users',
        component: () => import('@/components/user/Users.vue')
      },
      {
        path: '/rights',
        component: () => import('@/components/power/Rights.vue')
      },
      {
        path: '/roles',
        component: () => import('@/components/power/Roles.vue')
      },
      {
        path: '/categories',
        component: () => import('@/components/goods/Cate.vue')
      },
      {
        path: '/params',
        component: () => import('@/components/goods/Params.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes: dynamicRoutes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要跳转的路径  from表示从哪个路径跳转来   next是一个函数，表示放行 next() 放行  next('/login)强制跳转
  if (to.path == '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');

  if (!tokenStr) return next('/login');
  next();
})


export default router