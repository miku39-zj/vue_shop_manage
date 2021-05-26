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
    name: "User",
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
  },
  {
    path: '/',
    component: Home,
    name: "component",
    meta: {
      title: "组件使用",
      icon: 'el-icon-coin',
      hidden: false
    },
    children: [{
        path: '/dragDialog',
        component: () => import('@/views/Component/dragDialog.vue'),
        name: 'dragDialog',
        meta: {
          title: "拖拽组件",
          icon: 'el-icon-s-promotion',
          hidden: false,
        }
      },
      {
        path: '/lazyImage',
        component: () => import('@/views/Component/lazyImage.vue'),
        name: 'lazyImage',
        meta: {
          title: "懒加载图片",
          icon: 'el-icon-picture-outline',
          hidden: false,
        }
      },
    ]
  },
  {
    path: '/',
    component: Home,
    name: "menuList",
    meta: {
      title: "菜单",
      icon: 'el-icon-menu',
      hidden: false
    },
    children: [{
        path: '/emojiMenu',
        component: () => import('@/views/MenuList/EmojiMenu.vue'),
        name: 'emojiMenu',
        meta: {
          title: "表情菜单",
          icon: 'el-icon-goblet-square-full',
          hidden: false,
        }
      },
      {
        path: '/iconMenu',
        component: () => import('@/views/MenuList/IconMenu.vue'),
        name: 'iconMenu',
        meta: {
          title: "图标菜单",
          icon: 'el-icon-bicycle',
          hidden: false,
        }
      },

    ]
  },
  {
    path: '/',
    component: Home,
    name: "editor",
    meta: {
      title: "编辑器",
      icon: 'el-icon-edit',
      hidden: false
    },
    children: [{
        path: '/richEdit',
        component: () => import('@/views/Editor/RichEdit.vue'),
        name: 'richEdit',
        meta: {
          title: "富文本编辑",
          icon: 'el-icon-s-order',
          hidden: false,
        }
      },
      {
        path: '/markdownEdit',
        component: () => import('@/views/Editor/MarkdownEdit.vue'),
        name: 'markdownEdit',
        meta: {
          title: "Markdown编辑",
          icon: 'el-icon-s-cooperation',
          hidden: false,
        }
      },
    ]
  },
  {
    path: '/',
    component: Home,
    name: "file",
    meta: {
      title: "文件相关",
      icon: 'el-icon-folder',
      hidden: false
    },
    children: [{
        path: '/upload',
        component: () => import('@/views/File/Upload.vue'),
        name: 'upload',
        meta: {
          title: "文件上传",
          icon: 'el-icon-upload2',
          hidden: false,
        }
      },
      {
        path: '/download',
        component: () => import('@/views/File/Download.vue'),
        name: 'download',
        meta: {
          title: "文件下载",
          icon: 'el-icon-download',
          hidden: false,
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constRouter
})




export default router