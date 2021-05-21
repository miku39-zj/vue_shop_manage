<!--
 * @Description: 
 * @Date: 2021-05-19 20:14:39
-->
<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item,index) in tagList" :class="{'active': isActive(item.path)}" :key="index">
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
        <span @click="closeTags(index)" v-if="item.title !== '欢迎页'">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" class="MyLoginButton">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="handleOther">关闭其他</el-dropdown-item>
            <el-dropdown-item command="handleAll">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(["tagList"]),
      showTags() {
        return this.tagList.length > 0;
      }
    },
    methods: {
      isActive(path) {
        return path === this.$route.fullPath;
      },
      closeTags(i) {
        const curTag = this.tagList[i]
        this.$store.commit("DEL_TAGLIST", {
          index: i
        });
        if (curTag.path === this.$route.fullPath) {
          this.$router.push(this.tagList[i - 1].path)
        }
      },
      handleTags(val) {
        if (val === "handleOther") { // 关闭其他
          const curItem = this.tagList.filter(item => {
            return item.path === this.$route.fullPath;
          });
          this.$store.commit("DEL_OTHER_TAGLIST", curItem);
        } else {
          this.$store.DEL_ALL_TAGLIST("clearTags");
          this.$router.push("/");
        }
      },
      setTag(route) {
        const isExist = this.tagList.some(item => {
          return item.path === route.fullPath;
        });
        if (!isExist) {
          if (this.tagList.lengtht > 7) {
            this.$store.commit("DEL_TAGLIST", {
              index: 0
            });
          }
          this.$store.commit("SET_TAGLIST", {
            name: route.name,
            title: route.meta.title,
            path: route.fullPath
          });
        }
      },
    },

    watch: {
      $route(newValue) {
        this.setTag(newValue);
      }
    },

    created() {
      this.setTag(this.$route);
    },
  }
</script>

<style lang="less" scoped>
  .tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;
    background: #F5F7F9;
  }

  .tags ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

  }

  .tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    line-height: 23px;
    background: rgba(255, 255, 255, .8);
    padding: 0 10px 0 10px;
    vertical-align: middle;
    color: #666;
    transition: all 0.3s ease-in;
  }

  .tags-li:not(.active):hover {
    background: #f8f8f8;
  }

  .tags-li.active {
    color: #fff;
    border: 1px solid #409EFF;
    background-color: #409EFF;
  }

  .tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
  }

  .tags-li.active .tags-li-title {
    color: #fff;
  }

  .tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    text-align: center;
    width: 100px;
    height: 30px;
    background: #fff;
    margin-right: 2px;
    z-index: 10;
  }
</style>