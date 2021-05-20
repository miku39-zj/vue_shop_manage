/*
 * @Description: 
 * @Date: 2021-05-17 17:36:49
 */

 // 定义全局getters 方便访问user 模块的roles
const getters = {
  common_routes: state => state.common.routes,
  tagList: state => state.common.tagList
}
export default getters