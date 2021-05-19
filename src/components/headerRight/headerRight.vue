<!--
 * @Description: 
 * @Date: 2021-05-18 20:28:47
-->
<template>
  <div class="headerRight">
    <div class="headPortrait"></div>
    <div class="headerLogout">
      <el-dropdown size="medium">
        <span class="el-dropdown-link">
          admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="github">项目仓库</el-dropdown-item>
          <el-dropdown-item divided command="quit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .headerRight {
    height: 100%;
    display: flex;
    justify-content: space-around;
  }

  .headPortrait {
    background-image: url('../../assets/img/333.jpg');
    width: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    border-radius: 50%;
    margin: 0 5px;
  }
  .headerLogout {
    line-height: 3em;
  }
</style>