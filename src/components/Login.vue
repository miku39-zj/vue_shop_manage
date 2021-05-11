<template>
  <div class="login_container">
    <div class="login_left">

    </div>
    <div class="login_right">
      <div class="login_box">
        <!-- 头像区 -->
        <div class="avatar_box">
          <img src="../assets/img/333.jpg" alt />
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
            <el-button class="MyLoginButton" style="width:100%" type="primary" @click="login" size="medium">立即登录
            </el-button>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item>
                <el-checkbox v-model="loginForm.remenbMe" style="color:#000">记住我</el-checkbox>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :style="{ 'text-align': 'right' }">
                <!-- No logic, you need to deal with it yourself -->
                <el-button type="text" size="small">
                  忘记密码？
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
        loginForm: {
          username: 'admin',
          password: '123456',
          remenbMe:false
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
      // 点击重置
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields()
      },
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
    },
  }
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #000;
    // background-image: linear-gradient(180deg, rgba(163, 234, 239, 0.77), rgba(200, 163, 239, 0.26));
    // background-image: url(../assets/img/222.jpg);
    // background-repeat: no-repeat;
    // clip-path: polygon(0% 0%, 84% 0, 100% 50%, 83% 100%, 0% 100%);
    // background-size: cover;
    height: 100%;

  }

  .login-box-title {
    line-height: 50px;
    font-size: 20px;
    color: #000;
    text-align: center;
    border-bottom: 1px solid #ffffff;
  }

  .login_left {
    width: 70%;
    height: 100%;

    background-image: url(../assets/img/222.jpg);
    background-repeat: no-repeat;
    // clip-path: polygon(0% 0%, 80% 0, 100% 50%, 83% 100%, 0% 100%);
    background-size: cover;
    opacity: 0.8;
  }

  .login_right {
    width: 30%;
    height: 100%;

    .login_box {
      width: 400px;
      height: 400px;
      // background-color: #fff;
      background: hsla(0, 0%, 100%, .3);
      border-radius: 3px;
      position: absolute;
      left: 85%;
      top: 50%;
      transform: translate(-50%, -50%);

      .avatar_box {
        height: 120px;
        width: 120px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -100%);
        background-color: #fff;

        img {
          width: 100%;
          height: 100%;
          // clip-path: circle(50% at 50% 50%);
          border-radius: 50%;
          background-color: #eee;
        }
      }
    }
  }

  .login_form {
    position: absolute;
    bottom: 10px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  // .btns {
  //   display: flex;
  //   justify-content: center;
  // }
</style>