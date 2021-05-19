<!--
 * @Description: 
 * @Date: 2021-05-14 19:54:57
-->
<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-d-arrow-right">
    <transition-group name="breadcrumb" mode="out-in">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
        <span v-if='item.redirect==="home"||index==levelList.length-1'>{{item.meta.title}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.meta.title}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(
          item => item.meta && item.meta.title && item.meta.breadcrumb !== false
        )
        const first = matched[0] 
        if (first && first.name !== "home") {// 不是首页，添加首页
          matched = [{
            path: '/home',
            meta: {
              title: '首页'
            }
          }].concat(matched)
        }
        this.levelList = matched
      }
    }
  }
</script>

<style scoped>
  .breadcrumb {
    line-height: 4em;
    margin-bottom:0px
  }
  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
  }

  .breadcrumb-move {
    transition: all 0.5s;
  }

  .breadcrumb-leave-active {
    position: absolute;
    ;
  }
</style>