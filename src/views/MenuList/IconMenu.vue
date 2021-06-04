<!--
 * @Description: 
-->
<!--
 * @Description: 
-->
<template>
  <section>
    <el-card class="icon-box">
      <div slot="header" class="icon-title">
        <div>图标使用示例</div>
      </div>
      <el-input v-model="input" placeholder="请输入内容" clearable>
        <template slot="append" class="append">
          <el-button class="copy-btn" @click="copyicon" :data-clipboard-text="input">复制</el-button>
        </template>
      </el-input>
      <el-card class="icon-contain">
        <div class="icon-layout">
          <ul>
            <li v-for="item in iconList" :key="item">
              <el-tooltip class="item" effect="dark" :content="iconTip(item)" placement="top-start">
                <span @click="iconClick(iconTip(item))">
                  <svg-icon :icon-class="item" />
                </span>
              </el-tooltip>
            </li>
          </ul>
        </div>
      </el-card>
    </el-card>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        input:"",
        iconList: ["backstage", "chart", "chase", "cloud", "component", "copy", "delete", "edit", "facebook", "fold",
          "fullscreen", "gavel", "github", "home", "layout", "menu", "msg", "operate", "paste", "purchase", "rain",
          "search", "setup", "skill", "todolist", "twitter", "user", "view", "wechart"
        ],
        iconTip: x =>  `<svg-icon icon-class="${x}"  />`
      }
    },
    methods: {
      copyicon() {
        let _this = this
        let clipboard = new this.clipboard('.copy-btn');
        clipboard.on('success', function (e) {

          _this.$message.success("复制成功")
        });

        clipboard.on('error', function (e) {
          _this.$message.error("复制失败")
        });
      },
      iconClick(val) {
        this.input = val
      },
    }

  }
</script>

<style lang="less" scoped>
  .icon-contain {
    margin-top: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0 5px;
  }

  li {
    float: left;
    width: 48px;
    height: 52px;
    list-style: none;
    margin-right: 2px;
    margin: 1px 1px;
    font-size: 20px;
    cursor: pointer;

    span {
      border: 1px rgba(50, 38, 228,0.4) solid;
      padding: 10px;
      border-radius: 5px;
    }
  }
</style>