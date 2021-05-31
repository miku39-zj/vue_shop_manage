<template>
  <div class="login_container"
    :style="showMoon ? {['background-color']:'rgba(28, 34, 48, 0.5)'} : {['background-color']:'hsla(0, 0%, 100%, 0.5)'}">
    <div class="rightTop">
      <svg-icon :icon-class="showMoon ? 'moontag' : 'suntag'" className="moon-icon" />
    </div>
    <div class="toggle" :class="{'is-moon': showMoon}" @click.prevent="showValue">
      <svg-icon icon-class='suntag' className="suntag-icon" />
      <svg-icon icon-class='moontag' className="moontag-icon" />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="wave" viewBox="0 0 1440 320">
      <path fill="#0099ff" fill-opacity="1"
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path>
    </svg>
    <div class="user">
      <div class="Icon">
        <svg-icon icon-class='userfill' className="user-icon" />
      </div>
      <div class="head">account login</div>
    </div>
    <transition name="move" mode="out-in">
      <SignIn ref="SignIn" v-if="isSignIn" @showSignUp="showSignUp"></SignIn>
      <SignUp ref="SignUp" v-else @showSignIn="showSignIn"></SignUp>
    </transition>
  </div>
</template>

<script>
  import SignIn from "./LoginChild/SignIn"
  import SignUp from "./LoginChild/SignUp"
  import otherLogin from "./LoginChild/otherLogin"
  export default {
    components: {
      otherLogin,
      SignUp,
      SignIn
    },
    data() {
      return {
        isSignIn: true,
        showMoon: false,
      }
    },
    methods: {
      showSignUp() {
        this.isSignIn = !this.isSignIn
      },
      showSignIn() {
        this.isSignIn = !this.isSignIn
      },
      showValue() {
        this.showMoon = !this.showMoon
      }
    },
  }
</script>

<style lang="less" scoped>
  .login_container {
    // background-color: #000;
    // background-image: url(../assets/img/222.jpg);
    // background-repeat: no-repeat;
    // clip-path: polygon(0% 0%, 84% 0, 100% 50%, 83% 100%, 0% 100%);
    // background-size: cover;
    // background-color: rgba(28, 34, 48, 0.8);
    // background-color: #1c2230;
    // background: hsla(0, 0%, 100%, 0.1);
    width: 100%;
    height: 100%;

    .wave {
      position: absolute;
      bottom: 0;
      z-index: -1;
      fill: #0099ff;
    }
  }

  .login_container::before {
    content: "";
    position: absolute;
    left: 0;
    width: 50%;
    height: 50%;
    z-index: -1;
    background-color: #0099ff;
    clip-path: ellipse(46% 60% at 0% 0%);
  }

  .toggle {
    position: relative;
    display: flex;
    height: 26px;
    width: 50px;
    background-color: #151515;
    cursor: pointer;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 0 6px;
    margin: 0 0 0 auto;
    top: 10px;
    right: 30px;
    justify-content: space-between;
    align-items: center;
  }

  .toggle::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background-color: #fff;
    z-index: 1;
    top: 4px;
    border-radius: 50%;
    transition: all .3s;
  }

  .is-moon::after {
    transform: translateX(calc(100% + 2px));
  }

  .rightTop {
    float: right;
    margin: 0 30px 0 0;

    .moon-icon {
      width: 4em;
      height: 4em;
    }
  }



  .user {
    position: absolute;
    top: 20rem;
    left: 8rem;
    z-index: -1;

    .Icon {
      text-align: center;
      margin-bottom: 2px;

    }

    .user-icon {
      fill: #0099ff;
      font-size: 5rem;
    }

    .head {
      font-size: 1.6rem;
      text-transform: uppercase;
      user-select: none;
      text-shadow: 1px 1px 1px rgba(16, 16, 16, 0.1), 1px 2px 1px rgba(16, 16, 16, 0.1), 1px 3px 1px rgba(16, 16, 16, 0.1), 1px 4px 1px rgba(16, 16, 16, 0.1), 1px 5px 1px rgba(16, 16, 16, 0.1), 1px 6px 1px rgba(16, 16, 16, 0.1), 1px 7px 1px rgba(16, 16, 16, 0.1), 1px 8px 1px rgba(16, 16, 16, 0.1);
    }
  }

  .move-enter,
  .move-leave-to {
    // transform: scale(0.5);
    opacity: 0;
  }

  .move-enter-to,
  .move-leave {
    // transform: scale(1);
    opacity: 1;
  }

  .move-enter-active,
  .move-leave-active {
    transition: opacity .5s;
  }
</style>