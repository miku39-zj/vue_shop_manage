<!--
 * @Description: 
 * @Date: 2021-05-18 20:28:47
-->
<template>
  <div class="headerRight">
    <div class="btn-fullscreen" @click="handleFullScreen">
      <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
        <svg-icon icon-class='fullscreen' className="fullscreen-icon" />
      </el-tooltip>
    </div>
    <div class="headerbell">
      <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
        <svg-icon icon-class='msg' className="msg-icon" />
      </el-tooltip>
      <span class="btn-bell-badge" v-if="message"></span>
    </div>
    <div class="headPortrait"></div>
    <div class="headerLogout">
      <span class="right-navi-inner">
        <el-dropdown class="dropMore" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/kangnaj/vue_shop_manage" target="_blank">
              <el-dropdown-item class="projectIcon">
                <svg-icon icon-class='github' className="github-icon" />
                项目仓库
              </el-dropdown-item>
            </a>
            <el-dropdown-item command="loginout">
              <svg-icon icon-class='layout' className="layout-icon" />
              退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fullscreen: false,
        message: 2
      }
    },
    methods: {
      //退出登录
      handleCommand(command) {
        console.log(command,"command");
        if (command == 'loginout') {
          this.$router.push('/login');
        }
      },
      handleFullScreen() {
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      },
      handleClick() {

      },
      logout() {

      }
    }
  }
</script>

<style lang="less" scoped>
  a {
    text-decoration: none;

  }

  .headerRight {
    height: 100%;
    display: flex;
    justify-content: space-around;
  }

  .btn-fullscreen {
    line-height: 2.5em;
    border-radius: 15px;
    cursor: pointer;
    transform: rotate(45deg);
    margin-right: 10px;
    font-size: 20px;
  }



  .headerbell {
    position: relative;
    line-height: 2.5em;
    border-radius: 15px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 20px;
  }

  .btn-bell-badge {
    position: absolute;
    right: -2px;
    top: 10px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
  }

  .headPortrait {
    background-image: url('../../assets/img/333.jpg');
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: 5px 5px;
  }

  .right-navi-inner {
    margin: 0 15px;

  }

  .dropMore {
    font-size: 15px;
    color: #000000;
  }

  .projectIcon .github-icon {
    width: 1.2em;
    height: 1.2em;
    vertical-align: middle;
  }

  .headerLogout {
    line-height: 3.5em;
    font-size: 15px;
    color: #000000;
  }
</style>