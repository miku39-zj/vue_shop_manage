<template>
  <div v-if="!item.hidden">
    <template v-if="checkOneChild(item.children,item)">
      <router-link v-if="onlyOneChild.meta && !onlyOneChild.meta.hidden" :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.name" :class="{'submenu-title-noDropdown' : isNest }">
          <i :class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" style="color: #ffffff" />
          <span slot='title'>{{onlyOneChild.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.name" popper-append-to-body>
      <template v-slot:title>
        <i v-if="item.meta" :class="item.meta && item.meta.icon" style="color: #ffffff" />
        <span v-if="item.meta" slot='title'>{{item.meta.title}}</span>
      </template>
      <menuItem v-for="child in item.children" :key="child.path" :is-nest='true' :item='child'
        :base-path="child.path" />
    </el-submenu>
  </div>
</template>

<script>
  import path from 'path'

  export default {
    name: "menuItem",
    props: {
      item: {
        type: Object,
        required: true
      },
      isNest: {
        type: Boolean,
        required: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    data() {
      this.onlyOneChild = null
      return {

      }
    },
    mounted() {},
    methods: {
      checkOneChild(children = [], parent) {
        const showingChildren = children.filter(item => {
          if (item.hidden) {
            return false
          } else {
            this.onlyOneChild = item
            return true
          }
        })
        console.log(showingChildren, "showingChildren");
        // 当只有一个子路由,子路由默认展示
        if (showingChildren.length === 1) {
          return true
        }
        // 没有子路由则显示父路由
        if (showingChildren.length === 0) {
          this.onlyOneChild = {
            ...parent,
            // path: '',
            noShowingChildren: true
          }
          console.log(this.onlyOneChild, "this.onlyOneChild");
          return true
        }
        return false
      },
      resolvePath(routePath, val) {
        // console.log(path.resolve(this.basePath, routePath),111);
        return path.resolve(this.basePath, routePath) //解析成绝对路径
      }
    }
  }
</script>

<style lang="less" scoped>
  a {
    text-decoration: none !important;
  }

  .el-menu-item.is-active {
    background: #1A86EE !important;
  }
</style>