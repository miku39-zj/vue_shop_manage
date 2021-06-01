<!--
 * @Description: 
-->
<template>
  <section class="chart">
    <el-card class="chart-box">
      <div slot="header" class="chart-title">
        <div>echarts使用</div>
      </div>
      <el-row class="line-chart" :gutter="20">
        <el-col :span="12" class="line-chart-left">
          <div id="left-contain" class="left-contain"></div>
        </el-col>
        <el-col :span="12" class="line-chart-right">
          <div id="right-contain" class="right-contain"></div>
        </el-col>
      </el-row>
    </el-card>
  </section>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    data() {
      return {

      }
    },
    methods: {
      initleftChart() {
        let chartDom = document.getElementById('left-contain');
        let myChart = echarts.init(chartDom);
        let option;

        option = {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        option && myChart.setOption(option);
      },
      initrightChart() {
        var chartDom = document.getElementById('right-contain');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '堆叠区域图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        option && myChart.setOption(option);
      },
    },
    mounted() {
      this.initleftChart()
      this.initrightChart()
    }
  }
</script>

<style lang="less" scoped>
  .chart {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .chart-box {
    height: 100%;
    box-sizing: border-box;
  }

  .line-chart {
    height: calc(100%);
    width: calc(100%);
  }

  .line-chart-left {
    height: 100%;
  }

  .line-chart-right {
    height: 100%;
  }

  .left-contain {
    width: calc(100% - 20px);
    height: 60vh;
  }

  .right-contain {
    width: calc(100% - 20px);
    height: 60vh;
  }
</style>