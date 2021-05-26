<!--
 * @Description: 
-->

<template>
  <div>
    <div class="edit-title">
      mavonEditor：基于Vue的markdown编辑器。
      访问地址：<a href="https://github.com/hinesboy/mavonEditor" target="_blank">mavonEditor</a>
    </div>
    <mavon-editor v-model="value" ref="md" style="min-height: 65vh" />
    <el-button class="editor-btn" type="primary" @click="submit" size="small">提交</el-button>
  </div>
</template>

<script>
  import {
    mavonEditor
  } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: 'markdown',
    data() {
      return {
        value: '<h1 style="color:rgb(100, 213, 114)">Hello 泡泡茶壶</h1>',
      }
    },
    components: {
      mavonEditor
    },
    methods: {
      submit() {
        this.$message.success('提交成功！');
      }
    }
  }
</script>
<style scoped>
  .edit-title {
    margin-bottom: 10px;
  }

  .editor-btn {
    margin-top: 20px;
  }
</style>