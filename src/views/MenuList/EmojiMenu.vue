<!--
 * @Description: 
-->
<template>
  <section>
    <el-card class="emoji-box">
      <div slot="header" class="emoji-title">
        <div>emoji表情使用示例</div>
      </div>
      <el-input v-model="input" placeholder="请输入内容" clearable>
        <template slot="append" class="append">
          <el-button class="copy-btn" @click="copyEmoji" :data-clipboard-text="input">复制</el-button>
        </template>
      </el-input>
      <el-card class="emoji-contain">
        <div class="emoji-layout">
          <ul>
            <li v-for="(item, index) in emojiList" :key="index">
              <span :class="item+index" data-clipboard-action="copy" :data-clipboard-text="item"
                @click="emojiClick(item,index)">{{item}}</span>
            </li>
          </ul>
        </div>
      </el-card>
    </el-card>
  </section>
</template>

<script>
  // import Clipboard from 'clipboard';
  export default {
    data() {
      return {
        input: "",
        emojiList: ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙",
          "😚", "🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫",
          "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😔", "😕", "🙃", "🙃", "🤑", "😲", "☹️", "🙁", "😖",
          "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "😳", "🤪", "😵", "😡", "😠",
          "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿"
        ]
      }
    },
    methods: {
      copyEmoji() {
        let _this = this
        let clipboard = new this.clipboard('.copy-btn');
        clipboard.on('success', function (e) {

          _this.$message.success("复制成功")
        });

        clipboard.on('error', function (e) {
          _this.$message.error("复制失败")
        });
      },

      emojiClick(val, index) {
        this.input = val + this.input
        let _this = this;
        let clipboard = new this.clipboard(`.${val}${index}`);
        clipboard.on('success', function () {
          _this.$message.success("已复制")
        });
        clipboard.on('error', function () {
          _this.$message.error("复制失败")
        });
      }

    }
  }
</script>

<style lang="less" scoped>
  .emoji-contain {
    margin-top: 10px;
  }

  .copy-btn:focus {
    color: #909399 !important;
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
      border: 1px rgba(122, 39, 39, 0.2) solid;
      padding: 10px;
      border-radius: 5px;
    }
  }
</style>