<!--
 * @Description: 
-->
<template>
  <div>
    <el-card class="upload-box">
      <div slot="header" class="emoji-title">
        <div>文件下载</div>
      </div>
      <div class="file-upload">
        <div class="upload-title"> 文件上传，支持拖拽:</div>
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
      <div>
        <div class="upload-title"> 文件上传，支持拖拽</div>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
          :on-remove="handleRemove" :file-list="fileList" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [{
            name: '1.png',
            url: require('../../assets/img/1.png')
          },
          {
            name: '2.jpg',
            url: require('../../assets/img/2.jpg'),
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .file-upload {
    margin-bottom: 20px;
  }

  .upload-title {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }
</style>