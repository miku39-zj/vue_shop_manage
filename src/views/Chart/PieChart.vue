<!--
 * @Description: 
-->
<template>
  <section class="chart">
    <el-card class="chart-box">
      <div slot="header" class="chart-title">
        <div>echarts使用:饼图</div>
      </div>
      <el-row class="pie-chart" :gutter="20">
        <el-col :span="12" class="pie-chart-left">
          <div id="left-contain" class="left-contain"></div>
        </el-col>
        <el-col :span="12" class="pie-chart-right">
          <div id="right-contain" class="right-contain"></div>
        </el-col>
      </el-row>
    </el-card>
  </section>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    methods: {
      initleftChart() {
        var chartDom = document.getElementById('left-contain');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [{
                value: 1048,
                name: '搜索引擎'
              },
              {
                value: 735,
                name: '直接访问'
              },
              {
                value: 580,
                name: '邮件营销'
              },
              {
                value: 484,
                name: '联盟广告'
              },
              {
                value: 300,
                name: '视频广告'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        };

        option && myChart.setOption(option);
      },
      initrightChart() {
        var chartDom = document.getElementById('right-contain');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
          },
          series: [{
              name: '访问来源',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],
              label: {
                position: 'inner',
                fontSize: 14,
              },
              labelLine: {
                show: false
              },
              data: [{
                  value: 1548,
                  name: '搜索引擎'
                },
                {
                  value: 775,
                  name: '直达'
                },
                {
                  value: 679,
                  name: '营销广告',
                  selected: true
                }
              ]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: ['45%', '60%'],
              labelLine: {
                length: 30,
              },
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                  a: {
                    color: '#6E7079',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#4C5058',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 33
                  },
                  per: {
                    color: '#fff',
                    backgroundColor: '#4C5058',
                    padding: [3, 4],
                    borderRadius: 4
                  }
                }
              },
              data: [{
                  value: 1048,
                  name: '百度'
                },
                {
                  value: 335,
                  name: '直达'
                },
                {
                  value: 310,
                  name: '邮件营销'
                },
                {
                  value: 251,
                  name: '谷歌'
                },
                {
                  value: 234,
                  name: '联盟广告'
                },
                {
                  value: 147,
                  name: '必应'
                },
                {
                  value: 135,
                  name: '视频广告'
                },
                {
                  value: 102,
                  name: '其他'
                }
              ]
            }
          ]
        };

        option && myChart.setOption(option);
      }
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

  .pie-chart {
    height: calc(100%);
    width: calc(100%);
  }

  .pie-chart-left {
    height: 100%;
  }

  .pie-chart-right {
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