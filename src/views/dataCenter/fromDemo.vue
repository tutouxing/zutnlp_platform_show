<template>
    <div>
    <el-card>
        <el-col>
            <el-row  style="width: 20%">
                <span>日期：</span>
                <el-radio-group v-model="radio" @change="drawLine">
                    <el-radio-button label="今日"></el-radio-button>
                    <el-radio-button label="历史"></el-radio-button>
                </el-radio-group>
            </el-row>
            <el-row>
                <el-col>
                    <el-card :body-style="{ padding: '40px' }">
                        <div id="channel2_dv" style="width: 1500px; height: 580px"></div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-card>
        <el-card>
            <el-col>
                <el-row>
                    <el-col>
                        <component :is="mode"></component>
                    </el-col>
                </el-row>
            </el-col>
        </el-card>
    </div>
</template>

<script>
  import fromData from './fromChart/fromData'
  let echarts = require('echarts')
  export default {
    name: 'fromDemo',
    data () {
      return{
        mode:fromData,
        radio: '今日',
        dottedBase:'',
      option: {
        title : {
          text: '用户浏览量统计',
          subtext: 'zutnlp-platform',
          x:'20',
          textStyle: {
            color: '#ccc'
          }
        },
          backgroundColor: '#0f375f',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#333'
              }
            }
          },
          legend: {
            data: ['line', 'bar'],
            textStyle: {
              color: '#ccc'
            }
          },
          xAxis: {
            data:[],
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          yAxis: {
            splitLine: {show: false},
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          series: [{
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data:[],
          }, {
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#14c8d4'},
                    {offset: 1, color: '#43eec6'}
                  ]
                )
              }
            },
            data:[],
          }, {
            name: 'line',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: 'rgba(20,200,212,0.5)'},
                    {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                    {offset: 1, color: 'rgba(20,200,212,0)'}
                  ]
                )
              }
            },
            z: -12,
            data:[],
          }, {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
              normal: {
                color: '#0f375f'
              }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data:[],
          }]
        }
      }
    },
    mounted () {
      this.drawLine();
    },
    methods: {
      Data1(){
        this.option.xAxis.data=[];
        this.option.series[1].data=[];
        this.option.series[0].data=[];
        this.dottedBase=new Date()
        this.dottedBase=this.dottedBase-20*1000*3600*24
        for (var i = 0; i < 20; i++) {
          this.dottedBase=this.dottedBase+1000*3600*24
          var date = new Date(this.dottedBase);
          this.option.xAxis.data.push([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
          ].join('-'));
          this.option.series[1].data.push(this.$store.state.Data.onceData[i])
          this.option.series[0].data.push(this.$store.state.Data.onceData[i]);
        }
      },
      Data2(){
        this.option.xAxis.data=[];
        this.option.series[1].data=[];
        this.option.series[0].data=[];
        this.dottedBase=new Date()
        this.dottedBase=this.dottedBase-1000*3600*23
        for (var i = 0; i < 24; i++) {
          this.dottedBase=this.dottedBase+1000*3600
          var date = new Date(this.dottedBase);
          this.option.xAxis.data.push([
            date.getDate(),
            date.getHours()+"点"
          ].join('日'));
          this.option.series[1].data.push(this.$store.state.Data.todayData[i])
          this.option.series[0].data.push(this.$store.state.Data.todayData[i]);
        }
      },
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        if(this.radio=="今日")
          this.Data2();
        else
          this.Data1();
        let myChart2 = echarts.init(document.getElementById('channel2_dv'));
        myChart2.setOption(this.option);
      },
    }
  }
</script>

<style scoped>

</style>
