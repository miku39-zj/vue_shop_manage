/*
 * @Description: 
 * @Date: 2021-05-17 17:34:21
 */
import {
  constRouter,
  dynamicRoutes
} from '@/router'
import router from '@/router'

const common = {
  state: {
    routes: [], //完整路由表
    tagList: [], // tag标签
  },

  mutations: {
    SET_ROUTES: (state, routes) => {
      // 完整的路由表
      state.routes = constRouter.concat(routes)
    },
    //设置标签
    SET_TAGLIST: (state, data) => {
      state.tagList.push(data)
    },
    //清除所有标签
    DEL_ALL_TAGLIST: (state) => {
      state.visitedViews = []
    },
    //删除标签，非active标签
    DEL_TAGLIST(state, data) {
      state.tagList.splice(data.index, 1);
    },
    //删除当前标签
    DEL_CURRENT_TAGLIST(state, data) {
      const n = state.tagList.length
      for (let i = 0; i < n; i++) {
        const item = state.tagList[i];
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(state.tagList[i + 1].path);
          } else if (i > 0) {
            data.$router.push(state.tagList[i - 1].path);
          } else {
            data.$router.push("/");
          }
          state.tagList.splice(i, 1);
          break;
        }
      }
    },
  },

  actions: {
    // 用户名登录
    generateRoutes({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_ROUTES', dynamicRoutes)

        router.addRoutes(dynamicRoutes);

        // router.addRoutes([{
        //   path: '*',
        //   hidden: true,
        //   redirect: "/"
        // }]);
        console.log(dynamicRoutes,"dynamicRoutes");
        console.log(router,"router54565465");
        resolve(dynamicRoutes)
      })
    }
  }
}

export default common