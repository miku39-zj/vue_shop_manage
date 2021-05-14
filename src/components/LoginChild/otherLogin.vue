<!--
 * @Description: 
 * @Date: 2021-05-13 19:17:39
-->

<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
    <span>登。。。。。。。。。。。。</span>
    <span slot="footer" class="dialog-footer">
      <el-button class="MyResetButton" @click="dialogVisible = false" size="small">取 消</el-button>
      <el-button class="MyLoginButton" @click="dialogVisible = false" size="small">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: "otherLogin",
    data() {
      return {
        dialogVisible: false
      }
    }
  }
</script>