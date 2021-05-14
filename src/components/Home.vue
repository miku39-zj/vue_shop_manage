<template>
  <div class="app-Layout">
    <el-container class="home-comtainer">
      <el-aside :width="isCollapse ? '64px' : '200px'" class="home-sider">
        <div class="siderBox">
          <div class="siderTitle">后台管理系统</div>
          <div class="siderMain">
            <el-menu class="siderMenu" background-color="#333744" text-color="#fff" active-text-color="#ffffff"
              :unique-opened="false" :collapse="isCollapse" :collapse-transition="false" router
              :default-active="activePath">
              <!-- 一级菜单 -->
              <el-submenu :index="item.id+' '" v-for="item in menulist" :key="item.id">
                <template v-slot:title>
                  <i :class="iconsObj[item.id]"></i>
                  <span>{{item.authName}}</span>
                </template>
                <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children" :key="subItem.id"
                  @click="saveNavState('/'+subItem.path)" style="min-width: none;">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{subItem.authName}}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </el-aside>

      <el-container class="main">
        <el-header class="home-header" height='50px'>
          <div class="headerBox">
            <div class="headersLeft">
              <div class="leftBox" @click="toggleCollapse" :class="toggleActive ? 'toggleLeftBox' : ''">
                <svg-icon icon-class='fold' className="fold-icon" />
              </div>
              <BreadCrumb />
            </div>
          </div>
        </el-header>
        <el-main class="home-main">
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import BreadCrumb from './BreadCrumb/BreadCrumb'
  export default {
    components: {
      BreadCrumb
    },
    computed: {
      activeMenu() {
        const route = this.$route;
        const {
          meta,
          path
        } = route;
        // 默认激活项
        console.log(route,111);
        if (meta.activeMenu) {
          return meta.activeMenu;
        }
        return path;
      },
    },
    data() {
      return {
        toggleActive: false,
        menulist: [],
        iconsObj: {
          '125': 'iconfont icon-user',
          '103': 'iconfont icon-tijikongjian',
          '101': 'iconfont icon-shangpin',
          '102': 'iconfont icon-danju',
          '145': 'iconfont icon-baobiao'
        },
        isCollapse: false,
        // 被激活的链接地址
        activePath: '',
        menulist: [{
          id: 125,
          authName: '用户管理',
          path: 'users',
          children: [{
            id: 110,
            authName: '用户列表',
            path: 'users',
            children: [],
            order: null
          }],
          order: 1
        }, {
          id: 103,
          authName: '权限管理',
          path: 'rights',
          children: [{
            id: 111,
            authName: '角色列表',
            path: 'roles',
            children: [],
            order: null
          }, {
            id: 112,
            authName: '权限列表',
            path: 'rights',
            children: [],
            order: null
          }],
          order: 2
        }, {
          id: 101,
          authName: '商品管理',
          path: 'goods',
          children: [{
            id: 104,
            authName: '商品列表',
            path: 'goods',
            children: [],
            order: 1
          }, {
            id: 115,
            authName: '分类参数',
            path: 'params',
            children: [],
            order: 2
          }, {
            id: 121,
            authName: '商品分类',
            path: 'categories',
            children: [],
            order: 3
          }],
          order: 3
        }, {
          id: 102,
          authName: '订单管理',
          path: 'orders',
          children: [{
            id: 107,
            authName: '订单列表',
            path: 'orders',
            children: [],
            order: null
          }],
          order: 4
        }, {
          id: 145,
          authName: '数据统计',
          path: 'reports',
          children: [{
            id: 146,
            authName: '数据报表',
            path: 'reports',
            children: [],
            order: null
          }],
          order: 5
        }],
      }
    },
    mounted() {
      this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
      logout() {
        // 清空token
        window.sessionStorage.clear()
        // 跳转登录界面
        this.$router.push('/login')
      },
      // 点击按钮 切换菜单折叠
      toggleCollapse() {
        this.toggleActive = !this.toggleActive
        this.isCollapse = !this.isCollapse
      },
      // 保存链接的激活状态
      saveNavState(activePath) {
        console.log(this.activeMenu,132132132);
        window.sessionStorage.setItem('activePath', activePath)
        this.activePath = activePath
      },
    },
  }
</script>

<style lang="less" scoped>
  .app-Layout {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .home-comtainer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all 1s;
  }

  .home-sider {
    background-image: linear-gradient(#001529, #001529);
    height: 100%;

    .siderBox {
      width: 100%;
      height: 100%;
    }

    .siderTitle {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #dcdfe6;
      color: #ffffff;
      box-sizing: border-box;
      text-align: center;
      line-height: 50px;
      font-size: 16px;
    }

    .siderMain {
      width: 100%;
      height: calc(100% - 64px);
      overflow-x: hidden;
      overflow-y: auto;
    }

    .siderMenu {
      width: 100%;
    }
  }



  .home-header {
    background-image: linear-gradient(to right, #ffffff, #ffffff);
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #dcdfe6;

    .headerBox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
    }

    .headersLeft {
      display: flex;
      justify-content: flex-start;
    }

    .leftBox {
      transition: all 0.5s;
      transform-origin: center center;
      width: 20px;
      height: 100%;
      margin-right: 15px;
    }

    .toggleLeftBox {
      transform: rotate(180deg);
    }

    .fold-icon {
      transition: all 0.5s;
      transform-origin: center center;
      width: 20px;
      height: 100%;
      margin-right: 15px;
    }
  }

  .main {
    width: 100%;
    height: 100%;
    overflow: hidden !important;
  }

  .main-container {
    width: 100%;
    height: 100%;
    background-color: #eaedf1;
    padding: 0 !important;
  }



  .iconfont {
    margin-right: 10px;
  }
</style>