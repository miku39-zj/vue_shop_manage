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
  speed: 500,
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
  next()
})

router.afterEach(() => {
  NProgress.done()
})