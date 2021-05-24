<template>
  <section>
    <el-row :gutter="20" class="header-row">

      <el-col :span="8">
        <el-card shadow="hover" class="header-msg">
          <div class="user-info">
            <img src="../assets/img/333.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">
                admin
                <svg-icon icon-class='rain' className="rain-icon" />
              </div>
              <div class="use-info-titel">
                <p>早上好,admin,祝你新的一天工作愉快</p>
                <p>今天小雨转阴天,21~27°,天凉,注意加衣</p>
              </div>
              <!-- <div class="user-info-list">
                上次登录时间：
                <span>2020-10-01</span>
              </div>
              <div class="user-info-list">
                上次登录地点：
                <span>伟大航路</span>
              </div> -->
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover" class="header-msg">
          <el-row :gutter="20">
            <el-col :span="6">

              <div class="tip-content ">
                <div class="icon-box chaseBox">
                  <svg-icon icon-class='chase' className="tip-icon" />
                </div>
                <div class="grid-cont-right">
                  <div class="grid-num">339</div>
                  <div>追番数</div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="tip-content">
                <div class="icon-box todolistBox">
                  <svg-icon icon-class='todolist' className="tip-icon" />
                </div>
                <div class="grid-cont-right">
                  <div class="grid-num">39</div>
                  <div>待办事项</div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="tip-content">
                <div class="icon-box msgBox">
                  <svg-icon icon-class='msg' className="tip-icon" />
                </div>
                <div class="grid-cont-right">
                  <div class="grid-num">393</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="tip-content">
                <div class="icon-box githubBox">
                  <svg-icon icon-class='github' className="tip-icon" />
                </div>
                <div class="grid-cont-right">
                  <div class="grid-num">3</div>
                  <div>项目数量</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

    </el-row>
    <el-row :gutter="20" class="secend-row">
      <el-col :span="10">
        <el-card shadow="hover">
          <span class="chase-rank">追番排名:</span>
          <dv-scroll-ranking-board :config="config" class="ranking-board" />
        </el-card>
        <el-card shadow="hover" class="dynamic-box">
          <div class="dynamic-titel">
            <div>最新动态</div>
            <div>更多</div>
          </div>
          <vue-seamless-scroll :data='dynamicList' class="dynamic-warp">
            <div class="dynamic-list" v-for="item in dynamicList" :key="item.name">
              <div class="dynamic-list-left">
                <svg-icon icon-class='github' className="tip-icon" />
              </div>
              <div class="dynamic-list-right">
                <p class="dynamic-list-right-top">
                  <span>{{item.name}}</span>
                  <span>{{item.type}}</span>
                  <span>{{item.msg}}</span>
                </p>
                <p class="dynamic-list-right-bottom">
                  {{item.time}}
                </p>
              </div>
            </div>
          </vue-seamless-scroll>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        dynamicList: [{
            name: '蜘蛛子',
            type: '追了新番',
            msg: '海贼王',
            time: '12-10 10:12'
          },
          {
            name: '路飞',
            type: '追了新番',
            msg: '火影忍者',
            time: '12-10 10:12'
          },
          {
            name: '平泽唯',
            type: '追了新番',
            msg: '轻音少女',
            time: '12-10 10:12'
          },
          {
            name: '五条悟',
            type: '追了新番',
            msg: 'overlord',
            time: '12-10 10:12'
          },
          {
            name: '飞鼠',
            type: '追了新番',
            msg: '转生蜘蛛又怎样',
            time: '12-10 10:12'
          },
          {
            name: '佐助',
            type: '追了新番',
            msg: '咒术回战',
            time: '12-10 10:12'
          },
        ],
        config: {
          data: [{
              name: '海贼王',
              value: 5656
            },
            {
              name: 'overlord',
              value: 4141
            },
            {
              name: '火影忍者',
              value: 3565
            },
            {
              name: '妖精的尾巴',
              value: 8451
            },
            {
              name: '轻音少女',
              value: 4321
            },
            {
              name: '七龙珠',
              value: 9999
            },
            {
              name: '转生蜘蛛又怎样',
              value: 3939
            }
          ],
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .header-msg {
    height: 20vh;
  }

  .tip-content {
    display: flex;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    height: 100px;
  }

  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
  }

  .grid-num {
    font-size: 30px;
    font-weight: bold;
  }

  .icon-box {
    font-size: 30px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
    color: #fff;

    .tip-icon {
      width: 2em;
      width: 2em;
    }
  }

  .chaseBox {
    background: rgb(242, 94, 67);

  }

  .todolistBox {
    background: #3eede7;
  }

  .msgBox {
    background: rgb(100, 213, 114);

  }

  .githubBox {
    background: rgb(45, 140, 240);
  }


  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    // border-bottom: 2px solid rgb(106, 163, 216);
    // margin-bottom: 20px;
  }



  .user-avator {
    margin-right: 20px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-info-name {
    .rain-icon {
      margin-left: 250px;
      width: 1em;
      height: 1em;
      vertical-align: middle;
    }
  }

  .use-info-titel {
    height: 56px;
  }

  .user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
  }

  .secend-row {
    margin-top: 10px;

  }

  .chase-rank {
    // border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .ranking-board {
    width: 600px;
    height: 30vh;
    color: #000;
  }

  .dynamic-box {
    margin-top: 10px;
    height: 30vh;
  }

  .dynamic-titel {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .dynamic-titel div:nth-child(2) {
    color: #ce17af;
    margin-left: 5px;
    // flex: 1;
  }

  .dynamic {
    width: 100%;
    height: auto;
  }

  .dynamic-warp {
    // height: 651px;
    overflow: hidden;
  }

  .dynamic-list {
    width: 100%;
    height: 93px;
    padding: 25px 0;
    border-bottom: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .dynamic-list:hover {
    background: #DBFEFB;
  }

  .dynamic-list-left,
  .dynamic-list-left img {
    width: 42px;
    height: 42px;
    border-radius: 21px;
    overflow: hidden;
    margin-right: 25px;
  }

  .dynamic-list-right {
    flex: 1;
    height: 52px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .dynamic-list-right .dynamic-list-right-top {
    font-size: 15px;
    line-height: 15px;
  }


  .dynamic-list-right-top span:nth-child(1) {
    color: #3B3C3C;
    margin-right: 15px;
  }

  .dynamic-list-right-top span:nth-child(2) {
    color: #7C7E81;
    margin-right: 5px;
  }

  .dynamic-list-right-top span:nth-child(3) {
    color: #2E93FD;
  }

  .dynamic-list-right-bottom {
    color: #999999;
    font-size: 12px;
  }
</style>