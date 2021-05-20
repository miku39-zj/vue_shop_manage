<template>
  <div class="app-Layout">

    <el-container class="home-comtainer">

      <el-aside :width="isCollapse ? '65px' : '180px'" class="home-sider">
        <div class="siderBox">
          <div class="siderTitle">
            <svg-icon icon-class='backstage' className="backstage-icon" />
            <span>后台管理系统</span>
          </div>
          <div class="siderMain">
            <el-menu class="siderMenu" background-color="#333744" text-color="#ffffff" active-text-color="#ffffff"
              :unique-opened="false" :collapse="isCollapse" :collapse-transition="false" router
              :default-active="activeMenu">
              <MenuItem v-for="route in common_routes" :key="route.path" :item="route" :base-path="route.path">
              </MenuItem>
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
            <HeaderRight />
          </div>
        </el-header>

        <el-main class="home-main">
          <TagsViews />
          <!-- 路由占位符 -->
          <router-view v-slot="{ Component }">
            <transition name="move" mode="out-in">
              <keep-alive :include="tagList">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import TagsViews from './TagsViews/TagsViews'
  import HeaderRight from './headerRight/headerRight'
  import MenuItem from './MenuItem/menuItem'
  import BreadCrumb from './BreadCrumb/BreadCrumb'
  export default {
    components: {
      BreadCrumb,
      MenuItem,
      HeaderRight,
      TagsViews
    },
    computed: {
      ...mapGetters(["common_routes"]),
      activeMenu() {
        const route = this.$route;
        const {
          meta,
          path
        } = route;
        console.log(route, "route123");
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
        menulist: [],
      }
    },
    mounted() {},
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
      }
    },
  }
</script>

<style lang="less" scoped>
  //去掉下划线
  /deep/.router-link-active {
    text-decoration: none !important;
  }

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
        fill: #3E64FF;
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
    background: linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #3E64FF calc(72% + 1px), #3E64FF 100%);
    // background-image: linear-gradient(to right, #ffffff, #ffffff);
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

  .home-main {
    width: 100%;
    height: 100%;
    background-color: #eaedf1;
    padding: 0 !important;
  }



  .iconfont {
    margin-right: 10px;
  }
</style>