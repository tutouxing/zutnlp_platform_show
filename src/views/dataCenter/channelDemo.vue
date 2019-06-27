<template>
<div>
    <el-card>
        <el-col>
            <el-row  style="width: 20%">
                <span>日期：</span>
                <el-radio-group v-model="radio" @change="changeData()">
                    <el-radio-button label="今日"></el-radio-button>
                    <el-radio-button label="历史"></el-radio-button>
                </el-radio-group>
            </el-row>
            <el-row>
                <el-col>
                    <component :is="mode"></component>
                </el-col>
            </el-row>
        </el-col>
    </el-card>
    <el-card>
        <el-col>
            <el-row>
                <el-col span="12">
                    <el-card :body-style="{ padding: '40px' }">
                        <div id="channel_dv" style="width: 650px; height: 580px"></div>
                    </el-card>
                </el-col>
                <el-col span="12">
                    <el-card :body-style="{ padding: '40px' }">
                        <div id="channel2_dv" style="width: 650px; height: 580px"></div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-card>
</div>
</template>

<script>
  import OnceChart from './channelChart/OnceChart'
  import TodayChart from './channelChart/TodayChart'
  let echarts = require('echarts')
  export default {
    name: 'channelDemo',
    data () {
      return {
        mode:OnceChart,
        radio: '历史',
        dataSet:{
          title: {text: '栏目内容统计表'},
          tooltip: {},
          xAxis: {
            data: [],
            name: '栏目名'
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          yAxis: {
            name: '栏目内容数'
          },
          series: [{
            name: "",
            type: 'bar',
            data: [],
          }]
        },
        dataSet1:{
        title: {text: '栏目浏览统计表'},
        tooltip: {},
        xAxis: {
          data: [],
            name: '栏目名'
        },
        toolbox: {
          show: true,
            feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        yAxis: {
          name: '栏目浏览数'
        },
        series: [{
          name: "",
          type: 'bar',
          data: [],
        }]
      },
        option: {
          title : {
            text: '栏目内容占比',
            subtext: 'zutnlp-platform',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: []
          },
          series : [
            {
              name: '栏目内容数',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
      }
    },
    mounted () {
      this.drawLine();
    },
    methods: {
      changeData(){
        if(this.radio=="今日"){
          this.mode=TodayChart;
        }else{
          this.mode=OnceChart;
        }
      },
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        for (let i = 0;i<this.$store.state.channel.length;i++) {
          this.dataSet.xAxis.data.push(this.$store.state.channel[i].chName);
          this.dataSet.series[0].data.push(this.$store.state.channel[i].contents.length);
        }
        for (let i = 0;i<this.$store.state.channel.length;i++) {
          this.option.legend.data.push(this.$store.state.channel[i].chName);
          this.option.series[0].data.push(
            {
              value:this.$store.state.channel[i].contents.length,
              name:this.$store.state.channel[i].chName,
            }
          );
        }
        let myChart = echarts.init(document.getElementById('channel_dv'));
        myChart.setOption(this.dataSet);
        let myChart2 = echarts.init(document.getElementById('channel2_dv'));
        myChart2.setOption(this.option);
      },
    }
  }
</script>

<style scoped>

</style>
