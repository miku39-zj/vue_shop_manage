<!--
 * @Description: 
-->

<template>
  <div>
    <div class="login_box" v-if="isSignIn">
      <!-- 头像区 -->
      <div class="avtar">
        <div class="pic"><img src="../../assets/img/33.png" alt=""></div>
      </div>
      <div class="login-box-title">
        后台管理系统
      </div>
      <!-- 登录表单  :model绑定数据-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" size="medium">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" size="medium">
            <el-button slot="prepend" icon="el-icon-key"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button style="width:100%" type="primary" round @click="login" size="medium">立即登录
          </el-button>
        </el-form-item>
        <el-row class="remenbBox">
          <el-col :span="12">
            <el-form-item>
              <el-checkbox v-model="loginForm.remenbMe" style="color:#000">记住我</el-checkbox>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :style="{ 'text-align': 'right' }">
              <el-button type="text" size="small">
                忘记密码？
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="divider">
          <span class="text">其他登录</span>
        </div>
        <el-form-item :style="{ 'text-align': 'center' }">
          <el-button class="iconBox" type="text" @click="otherLogin">
            <svg-icon icon-class='github' className="myIcon github-icon" />
          </el-button>
          <el-button class="iconBox" type="text" @click="otherLogin">
            <svg-icon icon-class='facebook' className="myIcon facebook-icon" />
          </el-button>
          <el-button class="iconBox" type="text" @click="otherLogin">
            <svg-icon icon-class='twitter' className="myIcon twitter-icon" />
          </el-button>
          <el-button class="iconBox" type="text" @click="otherLogin">
            <svg-icon icon-class='wechart' className="myIcon wechart-icon" />
          </el-button>
        </el-form-item>
      </el-form>
      <p class="btn-something">
        Don't have an account ? <span type="text" @click.prevent="signup">signup</span>
      </p>

    </div>
    <otherLogin ref="otherLogin"></otherLogin>
  </div>
</template>

<script>
  import otherLogin from "./otherLogin"
  export default {
    components: {
      otherLogin,
    },
    data() {
      return {
        isSignIn: true,
        isSignUp: false,

        checked: false,
        loginForm: {
          username: 'admin',
          password: '123456',
          remenbMe: false
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
        this.$emit("showSignUp")
      },
      login() {
        this.$refs.loginFormRef.validate(async (valid) => {
          if (!valid) return
          this.$router.push('/home')
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
    background-color: rgba(255, 255, 255, 0.8);
  }

  /deep/.el-input-group__prepend {
    background-color: rgba(245, 247, 250, 0.8);
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
      // font-size: 20px;
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
      // border: 1px solid #3399ff;
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
    // position: relative;
    // bottom: 20px;
    margin-top: 30px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .btns {
      margin-bottom: 6px;
    }

    .remenbBox {
      /deep/.el-form-item {
        margin-bottom: 0px;
      }
    }
  }


  .divider {
    border-top: 0px solid rgba(0, 0, 0, .4);
    box-sizing: border-box;
    color: rgba(0, 0, 0, .5);
    width: 100%;

    .text {
      width: 20%;
      display: inline-block;
      padding: 0 1em;
      text-align: center;
      transform: translate(0, 25%);
    }

  }


  .divider::before {
    content: "";
    display: inline-block;
    border-bottom: 0;
    border-top: 1px solid transparent;
    border-top-color: inherit;
    width: 35%;
  }

  .divider::after {
    border-bottom: 0;
    display: inline-block;
    border-top: 1px solid transparent;
    border-top-color: inherit;
    content: "";
    width: 35%;
  }
</style>