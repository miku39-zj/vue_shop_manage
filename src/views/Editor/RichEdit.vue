<!--
 * @Description: 
-->
<template>
  <div>
    <div>
      <div class="edit-title">
        Vue-Quill-Editor：基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。
        访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
      </div>
      <quill-editor ref="myQuillEditor" v-model="content" :options="editorOption" @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)" @ready="onEditorReady($event)" />
      <el-button class="editor-btn" type="primary" @click="submit" size="small">提交</el-button>
    </div>
  </div>
</template>

<script>
  // import 'quill/dist/quill.core.css';
  // import 'quill/dist/quill.snow.css';
  // import 'quill/dist/quill.bubble.css';
  // import {
  //   quillEditor
  // } from 'vue-quill-editor';
  export default {
    name: 'editor',
    data() {
      return {
        content: '<h1>Hello 泡泡茶壶</h1>',
        editorOption: {
          // Some Quill options...
        }
      }
    },
    methods: {
      onEditorBlur(quill) {
        // console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        // console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        // console.log('editor ready!', quill)
      },
      onEditorChange({
        quill,
        html,
        text
      }) {
        // console.log('editor change!', quill, html, text)
        this.content = html
      },
      submit() {
        console.log(this.content);
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