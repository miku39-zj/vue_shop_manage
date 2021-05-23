/*
 * @Description: 
 * @Date: 2021-05-17 17:57:18
 */
// 路由的全局守卫

// 权限控制逻辑
import router from './index'
import store from '../store/index'

//引入nprogress 进度条插件
import NProgress from 'nprogress'

// 简单配置  进度条
NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 1000,
  showSpinner: false
})


router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (to.path == '/login') {
    return next();
  }

  if (store.getters.common_routes.length > 0) {
    return next()
  }
  const accessRoutes = await store.dispatch('generateRoutes')
  // console.log(accessRoutes,213);
  router.addRoutes(accessRoutes)

  // 继续路由切换,确保addRoutes完成
  next({
    ...to,
    replace: true
  })
  // router.addRoutes(accessRoutes);
  // next()
})

router.afterEach(() => {
  NProgress.done()
})