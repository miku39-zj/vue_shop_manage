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
        <el-card shadow="hover" class="rank-box">
          <div class="chase-rank">追番排名:</div>
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
                <svg-icon :icon-class='item.iconName' className="myIcon" />
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
      <el-col :span="14">
        <el-card shadow="hover" class="dataV-box">
          <div class="quick-nav">

            <div class="nav-box">
              <div class="nav-title one">快捷导航</div>
              <div class="nav-flex-one">
                <div class="nav-item one">
                  <div>
                    <svg-icon icon-class='home' className="Icon home-icon" />
                    <p class="nav-item-name">首页</p>
                  </div>
                </div>
                <div class="nav-item two">
                  <div>
                    <svg-icon icon-class='user' className="Icon user-icon" />
                    <p class="nav-item-name">用户</p>
                  </div>
                </div>
                <div class="nav-item three">
                  <div>
                    <svg-icon icon-class='skill' className="Icon skill-icon" />
                    <p class="nav-item-name">设置</p>
                  </div>
                </div>
              </div>
              <div class="nav-flex-two">
                <div class="nav-item one">
                  <div>
                    <svg-icon icon-class='menu' className="Icon menu-icon" />
                    <p class="nav-item-name">菜单</p>
                  </div>
                </div>
                <div class="nav-item two">
                  <div>
                    <svg-icon icon-class='component' className="Icon component-icon" />
                    <p class="nav-item-name">组件</p>
                  </div>
                </div>
                <div class="nav-item three">
                  <div>
                    <svg-icon icon-class='chart' className="Icon chart-icon" />
                    <p class="nav-item-name">图表</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-chart">
              <dv-charts :option="option" class="dataV-contain" />
            </div>
          </div>

        </el-card>
        <el-card shadow="hover" class="chart-box">
          <div id="chart-contain" class="chart-contain"></div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import * as echarts from 'echarts';
  import '@/assets/theme/purple-passion.js'
  export default {
    data() {
      return {
        option: {},
        dynamicList: [{
            name: '蜘蛛子',
            type: '追了新番',
            msg: '海贼王',
            time: '05-10 10:05',
            iconName: "avatar",
          },
          {
            name: '路飞',
            type: '追了新番',
            msg: '火影忍者',
            time: '05-10 10:05',
            iconName: "avatar1",
          },
          {
            name: '平泽唯',
            type: '追了新番',
            msg: '轻音少女',
            time: '05-10 10:05',
            iconName: "avatar2",
          },
          {
            name: '五条悟',
            type: '追了新番',
            msg: 'overlord',
            time: '05-10 10:05',
            iconName: "avatar3",
          },
          {
            name: '飞鼠',
            type: '追了新番',
            msg: '转生蜘蛛又怎样',
            time: '05-10 10:05',
            iconName: "avatar4",
          },
          {
            name: '佐助',
            type: '追了新番',
            msg: '咒术回战',
            time: '05-10 10:05',
            iconName: "avatar5",
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
    },
    methods: {
      initChart() {
        const myChart = echarts.init(document.getElementById('chart-contain'));
        const option = {
          title: {
            text: "年度追番",
            textStyle: {
              fontWeight:'normal',
              fontSize: '18'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            top: '5px',
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          legend: {
            data: ['新番', '旧番', '总追番量占比'],
            top: '5px',
          },
          xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }],
          yAxis: [{
              type: 'value',
              // name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              // name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          series: [{
              name: '新番',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name: '旧番',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: '总追番量占比',
              type: 'line',
              yAxisIndex: 1,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        };
        myChart.setOption(option, {
          notMerge: true
        })
      },
      initDataV() {
        const option1 = {
          title: {
            text: '项目语言占比'
          },
          legend: {
            data: ['同比', '环比'],
            orient: 'vertical'
          },
          series: [{
              name: '同比',
              type: 'pie',
              data: [{
                  name: '可口可乐',
                  value: 93
                },
                {
                  name: '百事可乐',
                  value: 32
                },
                {
                  name: '哇哈哈',
                  value: 65
                },
                {
                  name: '康师傅',
                  value: 44
                },
                {
                  name: '统一',
                  value: 52
                },
              ],
              radius: '30%',
              outsideLabel: {
                show: false
              },
              insideLabel: {
                show: true
              }
            },
            {
              name: '环比',
              type: 'pie',
              data: [{
                  name: '可口可乐',
                  value: 93
                },
                {
                  name: '百事可乐',
                  value: 32
                },
                {
                  name: '哇哈哈',
                  value: 65
                },
                {
                  name: '康师傅',
                  value: 44
                },
                {
                  name: '统一',
                  value: 52
                },
              ],
              radius: ['40%', '50%']
            }
          ]
        }

        const option2 = {
          title: {
            text: '项目语言占比'
          },
          legend: {
            data: ['同比', '环比']
          },
          series: [{
              name: '同比',
              type: 'pie',
              data: [{
                  name: 'JS',
                  value: 93
                },
                {
                  name: 'VUE',
                  value: 32
                },
                {
                  name: 'CSS',
                  value: 65
                },
                {
                  name: 'HTML',
                  value: 44
                }
              ],
              radius: '30%',
              outsideLabel: {
                show: false
              },
              insideLabel: {
                show: true
              }
            },
            {
              name: '环比',
              type: 'pie',
              data: [{
                  name: 'JS',
                  value: 93
                },
                {
                  name: 'VUE',
                  value: 32
                },
                {
                  name: 'CSS',
                  value: 65
                },
                {
                  name: 'HTML',
                  value: 44
                }
              ],
              radius: ['40%', '50%']
            }
          ]
        }
        this.option = option2
      }
    },
    mounted() {
      this.initChart()
      this.initDataV()
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
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 20px
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
  .dynamic-list-left svg {
    width: 45px;
    height: 45px;
    overflow: hidden;
    margin-right: 20px;
  }

  .dynamic-list-right {
    flex: 1;
    height: 45px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

  }

  .dynamic-list-right .dynamic-list-right-top {
    font-size: 15px;
    line-height: 15px;
    margin: 10px 0 0 0;
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
    margin: 10px 0 0 0px;
  }

  .dataV-box {
    width: 100%;
    height: 31vh;

    /deep/ .el-card__body {
      width: 100%;
      height: 100%;
      padding: 0;
    }
  }

  .quick-nav {
    display: flex;
    height: 100%;
    justify-content: space-between;
  }

  .nav-box {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // margin: 10px 20px;

    .nav-title {
      width: 100%;
      height: 10%;
      // box-sizing: border-box;
      margin: 2% 20px;
    }

    .nav-flex-one {
      width: 100%;
      height: 42%;
      display: flex;

      .nav-item {
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;

        .Icon {
          width: 2em;
          height: 2em;
        }

        .home-icon {
          fill: rgb(31, 218, 202);
        }

        .user-icon {
          fill: rgba(77, 175, 27);
        }

        .skill-icon {
          fill: rgb(191, 12, 44);
        }
      }

      .one {
        border: 1px solid rgba(0, 0, 0, 0.1);
      }

      .two {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .three {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .nav-flex-two {
      width: 100%;
      height: 42%;
      display: flex;

      .nav-item {
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;

        .Icon {
          width: 2em;
          height: 2em;
        }

        .menu-icon {
          fill: rgb(63, 178, 127);
        }

        .component-icon {
          fill: rgb(225, 133, 37);
        }

        .chart-icon {
          fill: rgb(0, 216, 255);
        }
      }

      .one {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .two {
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .three {
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

  }



  .nav-chart {
    width: 50%;
    height: 100%;
  }

  .dataV-contain {
    width: 90%;
    height: 30vh;
  }

  .chart-box {
    margin-top: 10px;
    width: 100%;
    height: 35vh;

    /deep/ .el-card__body {
      width: 100%;
      height: 100%;
      padding: 0;
    }
  }

  .chart-contain {
    width: 95%;
    height: 100%;
  }
</style>