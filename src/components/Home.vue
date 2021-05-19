<template>
  <div class="app-Layout">

    <el-container class="home-comtainer">

      <el-aside :width="isCollapse ? '64px' : '180px'" class="home-sider">
        <div class="siderBox">
          <div class="siderTitle">
            <svg-icon icon-class='backstage' className="backstage-icon" />
            <span>后台管理系统</span>
          </div>
          <div class="siderMain">
            <el-menu class="siderMenu" background-color="#333744" text-color="#fff" active-text-color="#ffffff"
              :unique-opened="false" :collapse="isCollapse" :collapse-transition="false" router
              :default-active="activePath">
              <menuItem v-for="route in common_routes" :key="route.path" :item="route" :base-path="route.path">
              </menuItem>
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
            <headerRight />
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
  import {
    mapGetters
  } from "vuex";
  import headerRight from './headerRight/headerRight'
  import menuItem from './MenuItem/menuItem'
  import BreadCrumb from './BreadCrumb/BreadCrumb'
  export default {
    components: {
      BreadCrumb,
      menuItem,
      headerRight
    },
    computed: {
      ...mapGetters(["common_routes"]),
      activeMenu() {
        const route = this.$route;
        const {
          meta,
          path
        } = route;
        // 默认激活项
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
        isCollapse: false,
        // 被激活的链接地址
        activePath: '',
        menulist: [],
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
      text-align: left;
      line-height: 50px;
      font-size: 16px;
      overflow: hidden;

      .backstage-icon {
        fill: chartreuse;
        margin: 0 10px 0 25px;
      }
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
      line-height: 50px;
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