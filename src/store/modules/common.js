import {
  constRouter,
  dynamicRoutes
} from '@/router'
import router from '@/router'

const common = {
  state: {
    routes: [], //完整路由表
  },

  mutations: {
    SET_ROUTES: (state, routes) => {
      // 完整的路由表
      state.routes = constRouter.concat(routes)
      console.log(state.routes,"state.routes");
    }
  },

  actions: {
    // 用户名登录
    generateRoutes({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_ROUTES', dynamicRoutes)

        // router.addRoutes(dynamicRoutes);

        // router.addRoutes([{
        //   path: '*',
        //   hidden: true,
        //   redirect: "/"
        // }]);

        resolve(dynamicRoutes)
      })
    }
  }
}

export default common