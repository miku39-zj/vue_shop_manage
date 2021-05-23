<!--
 * @Description: 
 * @Date: 2021-05-21 09:39:18
-->
<template>
  <el-dialog :visible.sync="dialogVisible" width="35%">
    <dv-border-box-11 :title="userMsg.name" class="containBox">
      <div class="user-info">
        <img :src="userMsg.img" class="user-avator" alt />
        <div class="user-info-cont">
          <div class="user-info-name">
            {{userMsg.name}}
          </div>
          <div class="use-info-titel">
            <span>{{userMsg.info}}</span>
          </div>
        </div>
      </div>
    </dv-border-box-11>

  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        userMsg: {
          name: "",
          info: "",
          img: "",
        },
        infoList: [{
          name: "路飞",
          info: "蒙奇·D·路飞，日本漫画《航海王》及其衍生作品中的男主角。外号“草帽”路飞，是草帽一伙、草帽大船团船长，极恶的世代之一。橡胶果实能力者，悬赏金15亿贝里。梦想是找到传说中的One Piece，成为海贼王。",
          img: require('../../assets/img/lufei.jpg')
        },
        {
          name: "平泽唯",
          info: "平泽唯，日本漫画《轻音少女》及其衍生的动画等作品中的主人公。私立樱丘女子高等学校轻音部的吉他手兼主唱，最初因为错把轻音乐当成“轻便、简易的音乐”而加入了轻音部，乐器演奏方面是完全的初学者，依靠直觉自学成才 [1]  。是个迷糊冒失、有点天然呆，不擅长读书与运动，拥有绝对音感的女孩",
          img:require('../../assets/img/yui.jpg')
        }
        ]
      }
    },
    methods: {
      initPage(row) {
        const name = row.name
        this.userMsg
        let user = this.infoList.filter(x => x.name === name)
        if (!user.length) {
          this.userMsg = {
            name: name,
            info: "无",
            img: ""
          }
        } else {
          this.userMsg = user[0]
        }
        this.dialogVisible = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .containBox {
    transform: scale(0.85,1) translate(-60px);
    width: 100%;
    padding: 60px;
    // overflow: hidden;
    overflow-wrap: break-word;
  }

  .user-info {
    width: 70%;
    height: 70%;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    // border-bottom: 2px solid rgb(106, 163, 216);
    margin-bottom: 20px;
  }



  .user-avator {
    margin-right: 20px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
</style>