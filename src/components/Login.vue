<template>
  <div class="login_container">
    <div class="rightTop">
      <svg-icon icon-class='cloud' className="cloud-icon" />
    </div>
    <div class="login_box">
      <!-- 头像区 -->
      <!-- <div class="avatar_box">
          A
        </div> -->
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
          <el-button class="MyLoginButton" style="width:100%" type="primary" @click="login" size="medium">立即登录
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
        <!-- <el-divider class="otherLogin">其它登录</el-divider> -->
      </el-form>
    </div>
    <otherLogin ref="otherLogin"></otherLogin>
  </div>
</template>

<script>
  import otherLogin from "./LoginChild/otherLogin"
  export default {
    components: {
      otherLogin
    },
    data() {
      return {
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

      login() {
        this.$refs.loginFormRef.validate(async (valid) => {
          if (!valid) return
          const {
            data: res
          } = await this.$http.post('login', this.loginForm)
          if (res.meta.status !== 200) return this.$message.error('登录失败')
          this.$message.success('登录成功')
          window.sessionStorage.setItem('token', res.data.token)
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

  .login_container {
    // background-color: #000;
    background-image: url(../assets/img/32.jpg);
    background-repeat: no-repeat;
    // clip-path: polygon(0% 0%, 84% 0, 100% 50%, 83% 100%, 0% 100%);
    background-size: cover;
    width: 100%;
    height: 100%;


  }

  .rightTop {
    float: right;
    margin: 15px 30px 0 0;

    .cloud-icon {
      width: 3em;
      height: 3em;
    }
  }

  .login-box-title {
    line-height: 50px;
    font-size: 20px;
    color: #000;
    text-align: center;
    border-bottom: 1px solid #ffffff;
  }



  .login_box {
    width: 400px;
    height: 400px;
    // background-color: #fff;
    background: hsla(0, 0%, 100%, .7);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .myIcon {
      width: 1.8em;
      height: 1.8em;
    }

    .iconBox {
      margin: 0.5em 1em;
    }

    .avatar_box {
      height: 120px;
      width: 120px;
      // border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: inset -50px 50px 100px #666666,
        inset 50px -50px 100px #ffffff;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -100%);
      background-color: #fff;
      font-size: 100px;
      color: red;
      // margin: 30px 800px;
      text-align: center;
      text-shadow: 0 0 4px white, 0 -5px 4px #ff3, 2px -10px 6px #fd3, -2px -15px 11px #f80, 2px -25px 18px #f20;
    }
  }


  .login_form {
    // position: relative;
    // bottom: 20px;
    margin-top: 35px;
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

  .otherLogin {
    background-color: hsla(0, 0%, 100%, .3);

    /deep/.el-divider__text {
      background-color: hsla(0, 0%, 100%, .3)
    }
  }
</style>