<!--
 * @Description: 
-->
<template>
  <div class="login_box signup">
    <!-- 头像区 -->
    <div class="avtar">
      <div class="pic"><img src="../../assets/img/36.png" alt=""></div>
    </div>
    <div class="login-box-title">
      后台管理系统
    </div>
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" size="medium">
          <el-button slot="prepend" icon="el-icon-s-custom"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.email" placeholder="请输入邮箱" size="medium">
          <el-button slot="prepend" icon="el-icon-message"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" size="medium">
          <el-button slot="prepend" icon="el-icon-key"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button style="width:100%" type="primary" round @click="login" size="medium">立即注册
        </el-button>
      </el-form-item>
    </el-form>
    <p class="btn-something">
      Already have an account ? <el-button type="text" @click="signup">login</el-button>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showMoon: false,
        loginForm: {
          username: '',
          password: '',
          email: "",
        },
        loginFormRules: {
          username: [{
              required: true,
              message: '请输入登录名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            },
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 15,
              message: '长度在 6 到 15 个字符',
              trigger: 'blur',
            },
          ],
        },
      }
    },
    methods: {
      signup() {
        this.$emit("showSignIn")
      },
      login() {

        this.$refs.loginFormRef.validate(async (valid) => {
          if (!valid) return
          this.$message.success("注册成功！")
          this.$router.push('/welcome')
        })
      },
      otherLogin() {
        this.$refs.otherLogin.dialogVisible = true
      },
    },
  }
</script>

<style lang="less" scoped>
  /deep/ .el-input__inner {
    background-color: rgba(255, 255, 255, 0.7);
  }

  /deep/.el-input-group__prepend {
    background-color: rgba(245, 247, 250, 0.7);
  }

  .login_box {
    width: 400px;
    height: 540px;
    // background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .2);
    background: hsla(0, 0%, 100%, .1);
    border-radius: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .login-box-title {
      line-height: 50px;
      font-size: 1.4rem;
      color: #000;
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid #ffffff;
      user-select: none;
    }

    .myIcon {
      width: 1.8em;
      height: 1.8em;
    }

    .iconBox {
      margin: 0.5em 1em;
    }

    .btn-something {
      color: #888;
      font-size: 14px;
      text-align: center;
    }

    .btn-something span {
      color: #0066ff;
      cursor: pointer;
      font-weight: 500;
    }

    .avtar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      user-select: none;
    }

    .avtar .pic {
      position: relative;
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
    }

    .avtar .pic img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }


  .login_form {
    margin-top: 30px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .btns {
      margin-bottom: 6px;
    }

  }
</style>