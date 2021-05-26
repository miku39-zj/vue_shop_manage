<!--
 * @Description: 
-->
<template>
  <div class="demo-image__lazy">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图片懒加载示例, </span>
      </div>
      <div>
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
      </div>
    </el-card>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        urls: [
          require('../../assets/img/1.png'),
          require('../../assets/img/2.jpg'),
          require('../../assets/img/3.jpg'),
          require('../../assets/img/4.jpg'),
          require('../../assets/img/5.png'),
          require('../../assets/img/6.jpg'),
          require('../../assets/img/7.jpg'),
          require('../../assets/img/8.jpg'),
          require('../../assets/img/9.jpg'),
          require('../../assets/img/10.jpg'),
          require('../../assets/img/11.jpg'),
        ]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>