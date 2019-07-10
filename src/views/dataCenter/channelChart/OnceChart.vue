<template>
    <div>
      <el-card :body-style="{ padding: '40px' }">
        <div id="channel4_dv" style="width: 1500px; height: 580px"></div>
      </el-card>
    </div>
</template>

<script>
  let echarts = require('echarts')
  export default {
    name: 'OnceChart',
    data () {
      return {
        timer:'',
        num: {
          currentIndex: -1,
        },
        option:  {
          title : {
            text: '栏目浏览量统计',
            subtext: 'zutnlp-platform',
            x:'20',
            textStyle: {
              color: '#ccc'
            }
          },
          backgroundColor: '#0f375f',
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '2%',
            right: '4%',
            bottom: '14%',
            top: '16%',
            containLabel: true
          },
          legend: {
            data: [],
            right: 10,
            top: 12,
            textStyle: {
              color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
          },
          xAxis: {
            type: 'category',
            data: ['四月', '五月','六月'],
            axisLine: {
              lineStyle: {
                color: 'white'

              }
            },
            axisLabel: {
              // interval: 0,
              // rotate: 40,
              textStyle: {
                fontFamily: 'Microsoft YaHei'
              }
            },
          },

          yAxis: {
            type: 'value',
            max: '1200',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'white'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,0.3)'
              }
            },
            axisLabel: {}
          },
          "dataZoom": [{
            "show": true,
            "height": 12,
            "xAxisIndex": [
              0
            ],
            bottom: '8%',
            "start": 10,
            "end": 90,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
              color: "#d3dee5",

            },
            textStyle: {
              color: "#fff"
            },
            borderColor: "#90979c"
          }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
          }],
          series: [{
            name: '1',
            type: 'bar',
            barWidth: '8%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#fccb05'
                }, {
                  offset: 1,
                  color: '#f5804d'
                }]),
                barBorderRadius: 12,
              },
            },
            data: [620, 800,1000]
          },
            {
              name: '2',
              type: 'bar',
              barWidth: '8%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8bd46e'
                  }, {
                    offset: 1,
                    color: '#09bcb7'
                  }]),
                  barBorderRadius: 11,
                }

              },
              data: [430, 820,1100]
            },
            {
              name: '3',
              type: 'bar',
              barWidth: '8%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                  }, {
                    offset: 1,
                    color: '#6851f1'
                  }]),
                  barBorderRadius: 11,
                }
              },
              data: [680,1000, 800]
            }, {
              name: '4',
              type: 'bar',
              barWidth: '8%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#57eabf'
                  }, {
                    offset: 1,
                    color: '#2563f9'
                  }]),
                  barBorderRadius: 11,
                }
              },
              data: [710, 1000,900]
            },{
              name: '5',
              type: 'bar',
              barWidth: '8%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00df93'
                  }, {
                    offset: 1,
                    color: '#8e49ff'
                  }]),
                  barBorderRadius: 11,
                }
              },
              data: [760,1020,860]
            },{
              name: '6',
              type: 'bar',
              barWidth: '8%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8e49ff'
                  }, {
                    offset: 1,
                    color: '#ff49f9'
                  }]),
                  barBorderRadius: 11,
                }
              },
              data: [850,900,750]
            },]
        },
      }
    },
    mounted () {
      this.drawLine();
        this.Show();
      this.timer= setInterval(this.Show, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
      drawLine() {
        let myChart = echarts.init(document.getElementById('channel4_dv'));
        for(var i=0;i<this.$store.state.channel.length-1;i++){
          this.option.series[i].name=this.$store.state.channel[i].chName;
          this.option.series[i].data[0]=this.$store.state.channel[i].history;
          this.option.legend.data.push(this.$store.state.channel[i].chName)
        }

        myChart.setOption(this.option);
      },
       Show() {
           var dataLen = this.option.series[0].data.length;
           let myChart = echarts.init(document.getElementById('channel4_dv'));
           // 取消之前高亮的图形
           myChart.dispatchAction({
             type: 'downplay',
             seriesIndex: 0,
             dataIndex: this.num.currentIndex
           });
           this.num.currentIndex = (this.num.currentIndex + 1) % dataLen;
           console.log(this.num.currentIndex);
           // 高亮当前图形
           myChart.dispatchAction({
             type: 'highlight',
             seriesIndex: 0,
             dataIndex: this.num.currentIndex,
           });
           // 显示 tooltip
           myChart.dispatchAction({
             type: 'showTip',
             seriesIndex: 0,
             dataIndex: this.num.currentIndex
           });
         }
    }
  }
</script>

<style scoped>

</style>
