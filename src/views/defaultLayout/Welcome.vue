<template>
  <div>
    <el-row :gutter="20" style="background-color: #c1c1d8">
      <el-col :span="10">
        <div ref="bar_1" style="width: 500px; height: 600px"></div>
      </el-col>
      <el-col :span="10" :offset="1">
        <div ref="bar_2" style="width: 500px; height: 600px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="background-color: #c1c1d8">
      <el-col :span="6">
        <div ref="aqi" style="width: 500px; height: 500px"></div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div ref="parallel" style="width: 500px; height: 500px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="background-color: #c1c1d8">
      <el-col :span="12" :offset="6">

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {putChannelById, putTodayChannel} from '../../api/channel'

    let echarts = require('echarts');
    var upColor = '#ec0000';
    var upBorderColor = '#8A0000';
    var downColor = '#00da3c';
    var downBorderColor = '#008F28';

    export default {
        name: "Welcome",
        data(){
          return{
               channelNum:[],
              channelInform:{
                id:0,
                today:0,
              },
              dataSet_Bar1:{
                  title:{text:"堆叠柱状图"},
                  angleAxis: {
                      type: 'category',
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                      z: 10
                  },
                  radiusAxis: {
                  },
                  polar: {
                  },
                  series: [{
                      type: 'bar',
                      data: [1, 2, 3, 4, 3, 5, 1],
                      coordinateSystem: 'polar',
                      name: 'A',
                      stack: 'a'
                  }, {
                      type: 'bar',
                      data: [2, 4, 6, 1, 3, 2, 1],
                      coordinateSystem: 'polar',
                      name: 'B',
                      stack: 'a'
                  }, {
                      type: 'bar',
                      data: [1, 2, 3, 4, 1, 2, 5],
                      coordinateSystem: 'polar',
                      name: 'C',
                      stack: 'a'
                  }],
                  legend: {
                      show: true,
                      data: ['A', 'B', 'C']
                  }
              },
              dataSet_Bar2:{
                  title:{text:"条形图"},
                  tooltip : {
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  legend: {
                      data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  xAxis:  {
                      type: 'value'
                  },
                  yAxis: {
                      type: 'category',
                      data: ['周一','周二','周三','周四','周五','周六','周日']
                  },
                  series: [
                      {
                          name: '直接访问',
                          type: 'bar',
                          stack: '总量',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'insideRight'
                              }
                          },
                          data: [320, 302, 301, 334, 390, 330, 320]
                      },
                      {
                          name: '邮件营销',
                          type: 'bar',
                          stack: '总量',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'insideRight'
                              }
                          },
                          data: [120, 132, 101, 134, 90, 230, 210]
                      },
                      {
                          name: '联盟广告',
                          type: 'bar',
                          stack: '总量',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'insideRight'
                              }
                          },
                          data: [220, 182, 191, 234, 290, 330, 310]
                      },
                      {
                          name: '视频广告',
                          type: 'bar',
                          stack: '总量',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'insideRight'
                              }
                          },
                          data: [150, 212, 201, 154, 190, 330, 410]
                      },
                      {
                          name: '搜索引擎',
                          type: 'bar',
                          stack: '总量',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'insideRight'
                              }
                          },
                          data: [820, 832, 901, 934, 1290, 1330, 1320]
                      }
                  ]
              },

          }
        },
        methods:{
             DataInit(){

               /*  for(let i=0;i<this.$store.state.channel.length;i++) {
                   this.channelNum.push(this.channelInform);
                   this.channelNum[i].id = this.$store.state.channel[i].id;
                     /!*putChannelById(ID,this.$store.state.userid, this.channelInform);*!/
                   console.log(this.channelNum[i])
                 }
                 this.$store.commit("SET_TODAYCHANNEL_STATE",this.channelNum)
*/
             //页面浏览量统计
             /*  putTodayChannel(this.i)*/

             },
          TodayPageTimer(){
               console.log("时间计时器一运行")
               this.$store.commit("SET_TODAYDATA_STATE",this.$store.state.hoursData)
               this.$store.commit("SET_TODAYPAGE_STATE",this.$store.state.hoursData)
               this.$store.commit("SET_HOURSPAGE_STATE",0)

          },
            OncePageTimer(){
              console.log("时间计时器二运行")
            this.$store.commit("SET_ONCEDATA_STATE",this.$store.state.todayData)
            this.$store.commit("SET_TODAYPAGEINIT_STATE",0)

          },
          drawBar(){
                let bar_1 = echarts.init(this.$refs.bar_1);
                bar_1.setOption(this.dataSet_Bar1);
                let bar_2 = echarts.init(this.$refs.bar_2);
                bar_2.setOption(this.dataSet_Bar2);
             },
            drawAQI(){
                var dataBJ = [
                    [55,9,56,0.46,18,6,1],
                    [25,11,21,0.65,34,9,2],
                    [56,7,63,0.3,14,5,3],
                    [33,7,29,0.33,16,6,4],
                    [42,24,44,0.76,40,16,5],
                    [82,58,90,1.77,68,33,6],
                    [74,49,77,1.46,48,27,7],
                    [78,55,80,1.29,59,29,8],
                    [267,216,280,4.8,108,64,9],
                    [185,127,216,2.52,61,27,10],
                    [39,19,38,0.57,31,15,11],
                    [41,11,40,0.43,21,7,12],
                    [64,38,74,1.04,46,22,13],
                    [108,79,120,1.7,75,41,14],
                    [108,63,116,1.48,44,26,15],
                    [33,6,29,0.34,13,5,16],
                    [94,66,110,1.54,62,31,17],
                    [186,142,192,3.88,93,79,18],
                    [57,31,54,0.96,32,14,19],
                    [22,8,17,0.48,23,10,20],
                    [39,15,36,0.61,29,13,21],
                    [94,69,114,2.08,73,39,22],
                    [99,73,110,2.43,76,48,23],
                    [31,12,30,0.5,32,16,24],
                    [42,27,43,1,53,22,25],
                    [154,117,157,3.05,92,58,26],
                    [234,185,230,4.09,123,69,27],
                    [160,120,186,2.77,91,50,28],
                    [134,96,165,2.76,83,41,29],
                    [52,24,60,1.03,50,21,30],
                    [46,5,49,0.28,10,6,31]
                ];

                var dataGZ = [
                    [26,37,27,1.163,27,13,1],
                    [85,62,71,1.195,60,8,2],
                    [78,38,74,1.363,37,7,3],
                    [21,21,36,0.634,40,9,4],
                    [41,42,46,0.915,81,13,5],
                    [56,52,69,1.067,92,16,6],
                    [64,30,28,0.924,51,2,7],
                    [55,48,74,1.236,75,26,8],
                    [76,85,113,1.237,114,27,9],
                    [91,81,104,1.041,56,40,10],
                    [84,39,60,0.964,25,11,11],
                    [64,51,101,0.862,58,23,12],
                    [70,69,120,1.198,65,36,13],
                    [77,105,178,2.549,64,16,14],
                    [109,68,87,0.996,74,29,15],
                    [73,68,97,0.905,51,34,16],
                    [54,27,47,0.592,53,12,17],
                    [51,61,97,0.811,65,19,18],
                    [91,71,121,1.374,43,18,19],
                    [73,102,182,2.787,44,19,20],
                    [73,50,76,0.717,31,20,21],
                    [84,94,140,2.238,68,18,22],
                    [93,77,104,1.165,53,7,23],
                    [99,130,227,3.97,55,15,24],
                    [146,84,139,1.094,40,17,25],
                    [113,108,137,1.481,48,15,26],
                    [81,48,62,1.619,26,3,27],
                    [56,48,68,1.336,37,9,28],
                    [82,92,174,3.29,0,13,29],
                    [106,116,188,3.628,101,16,30],
                    [118,50,0,1.383,76,11,31]
                ];

                var dataSH = [
                    [91,45,125,0.82,34,23,1],
                    [65,27,78,0.86,45,29,2],
                    [83,60,84,1.09,73,27,3],
                    [109,81,121,1.28,68,51,4],
                    [106,77,114,1.07,55,51,5],
                    [109,81,121,1.28,68,51,6],
                    [106,77,114,1.07,55,51,7],
                    [89,65,78,0.86,51,26,8],
                    [53,33,47,0.64,50,17,9],
                    [80,55,80,1.01,75,24,10],
                    [117,81,124,1.03,45,24,11],
                    [99,71,142,1.1,62,42,12],
                    [95,69,130,1.28,74,50,13],
                    [116,87,131,1.47,84,40,14],
                    [108,80,121,1.3,85,37,15],
                    [134,83,167,1.16,57,43,16],
                    [79,43,107,1.05,59,37,17],
                    [71,46,89,0.86,64,25,18],
                    [97,71,113,1.17,88,31,19],
                    [84,57,91,0.85,55,31,20],
                    [87,63,101,0.9,56,41,21],
                    [104,77,119,1.09,73,48,22],
                    [87,62,100,1,72,28,23],
                    [168,128,172,1.49,97,56,24],
                    [65,45,51,0.74,39,17,25],
                    [39,24,38,0.61,47,17,26],
                    [39,24,39,0.59,50,19,27],
                    [93,68,96,1.05,79,29,28],
                    [188,143,197,1.66,99,51,29],
                    [174,131,174,1.55,108,50,30],
                    [187,143,201,1.39,89,53,31]
                ];

                var lineStyle = {
                    normal: {
                        width: 1,
                        opacity: 0.5
                    }
                };
                var dataSet_aqi = {
                    backgroundColor: '#c1c1d8',
                    title: {
                        text: 'AQI - 雷达图',
                        left: 'center',
                        textStyle: {
                            color: '#eee'
                        }
                    },
                    legend: {
                        bottom: 5,
                        data: ['北京', '上海', '广州'],
                        itemGap: 20,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        },
                        selectedMode: 'single'
                    },
                    // visualMap: {
                    //     show: true,
                    //     min: 0,
                    //     max: 20,
                    //     dimension: 6,
                    //     inRange: {
                    //         colorLightness: [0.5, 0.8]
                    //     }
                    // },
                    radar: {
                        indicator: [
                            {name: 'AQI', max: 300},
                            {name: 'PM2.5', max: 250},
                            {name: 'PM10', max: 300},
                            {name: 'CO', max: 5},
                            {name: 'NO2', max: 200},
                            {name: 'SO2', max: 100}
                        ],
                        shape: 'circle',
                        splitNumber: 5,
                        name: {
                            textStyle: {
                                color: 'rgb(238, 197, 102)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                                ].reverse()
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(238, 197, 102, 0.5)'
                            }
                        }
                    },
                    series: [
                        {
                            name: '北京',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataBJ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: '#F9713C'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.1
                                }
                            }
                        },
                        {
                            name: '上海',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataSH,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: '#B3E4A1'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.05
                                }
                            }
                        },
                        {
                            name: '广州',
                            type: 'radar',
                            lineStyle: lineStyle,
                            data: dataGZ,
                            symbol: 'none',
                            itemStyle: {
                                normal: {
                                    color: 'rgb(238, 197, 102)'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.05
                                }
                            }
                        }
                    ]
                };
                let aqi = echarts.init(this.$refs.aqi);
                aqi.setOption(dataSet_aqi)
            },
            drawParallel(){
                var dataBJ = [
                    [1,55,9,56,0.46,18,6,"良"],
                    [2,25,11,21,0.65,34,9,"优"],
                    [3,56,7,63,0.3,14,5,"良"],
                    [4,33,7,29,0.33,16,6,"优"],
                    [5,42,24,44,0.76,40,16,"优"],
                    [6,82,58,90,1.77,68,33,"良"],
                    [7,74,49,77,1.46,48,27,"良"],
                    [8,78,55,80,1.29,59,29,"良"],
                    [9,267,216,280,4.8,108,64,"重度污染"],
                    [10,185,127,216,2.52,61,27,"中度污染"],
                    [11,39,19,38,0.57,31,15,"优"],
                    [12,41,11,40,0.43,21,7,"优"],
                    [13,64,38,74,1.04,46,22,"良"],
                    [14,108,79,120,1.7,75,41,"轻度污染"],
                    [15,108,63,116,1.48,44,26,"轻度污染"],
                    [16,33,6,29,0.34,13,5,"优"],
                    [17,94,66,110,1.54,62,31,"良"],
                    [18,186,142,192,3.88,93,79,"中度污染"],
                    [19,57,31,54,0.96,32,14,"良"],
                    [20,22,8,17,0.48,23,10,"优"],
                    [21,39,15,36,0.61,29,13,"优"],
                    [22,94,69,114,2.08,73,39,"良"],
                    [23,99,73,110,2.43,76,48,"良"],
                    [24,31,12,30,0.5,32,16,"优"],
                    [25,42,27,43,1,53,22,"优"],
                    [26,154,117,157,3.05,92,58,"中度污染"],
                    [27,234,185,230,4.09,123,69,"重度污染"],
                    [28,160,120,186,2.77,91,50,"中度污染"],
                    [29,134,96,165,2.76,83,41,"轻度污染"],
                    [30,52,24,60,1.03,50,21,"良"],
                    [31,46,5,49,0.28,10,6,"优"]
                ];

                var dataGZ = [
                    [1,26,37,27,1.163,27,13,"优"],
                    [2,85,62,71,1.195,60,8,"良"],
                    [3,78,38,74,1.363,37,7,"良"],
                    [4,21,21,36,0.634,40,9,"优"],
                    [5,41,42,46,0.915,81,13,"优"],
                    [6,56,52,69,1.067,92,16,"良"],
                    [7,64,30,28,0.924,51,2,"良"],
                    [8,55,48,74,1.236,75,26,"良"],
                    [9,76,85,113,1.237,114,27,"良"],
                    [10,91,81,104,1.041,56,40,"良"],
                    [11,84,39,60,0.964,25,11,"良"],
                    [12,64,51,101,0.862,58,23,"良"],
                    [13,70,69,120,1.198,65,36,"良"],
                    [14,77,105,178,2.549,64,16,"良"],
                    [15,109,68,87,0.996,74,29,"轻度污染"],
                    [16,73,68,97,0.905,51,34,"良"],
                    [17,54,27,47,0.592,53,12,"良"],
                    [18,51,61,97,0.811,65,19,"良"],
                    [19,91,71,121,1.374,43,18,"良"],
                    [20,73,102,182,2.787,44,19,"良"],
                    [21,73,50,76,0.717,31,20,"良"],
                    [22,84,94,140,2.238,68,18,"良"],
                    [23,93,77,104,1.165,53,7,"良"],
                    [24,99,130,227,3.97,55,15,"良"],
                    [25,146,84,139,1.094,40,17,"轻度污染"],
                    [26,113,108,137,1.481,48,15,"轻度污染"],
                    [27,81,48,62,1.619,26,3,"良"],
                    [28,56,48,68,1.336,37,9,"良"],
                    [29,82,92,174,3.29,0,13,"良"],
                    [30,106,116,188,3.628,101,16,"轻度污染"],
                    [31,118,50,0,1.383,76,11,"轻度污染"]
                ];

                var dataSH = [
                    [1,91,45,125,0.82,34,23,"良"],
                    [2,65,27,78,0.86,45,29,"良"],
                    [3,83,60,84,1.09,73,27,"良"],
                    [4,109,81,121,1.28,68,51,"轻度污染"],
                    [5,106,77,114,1.07,55,51,"轻度污染"],
                    [6,109,81,121,1.28,68,51,"轻度污染"],
                    [7,106,77,114,1.07,55,51,"轻度污染"],
                    [8,89,65,78,0.86,51,26,"良"],
                    [9,53,33,47,0.64,50,17,"良"],
                    [10,80,55,80,1.01,75,24,"良"],
                    [11,117,81,124,1.03,45,24,"轻度污染"],
                    [12,99,71,142,1.1,62,42,"良"],
                    [13,95,69,130,1.28,74,50,"良"],
                    [14,116,87,131,1.47,84,40,"轻度污染"],
                    [15,108,80,121,1.3,85,37,"轻度污染"],
                    [16,134,83,167,1.16,57,43,"轻度污染"],
                    [17,79,43,107,1.05,59,37,"良"],
                    [18,71,46,89,0.86,64,25,"良"],
                    [19,97,71,113,1.17,88,31,"良"],
                    [20,84,57,91,0.85,55,31,"良"],
                    [21,87,63,101,0.9,56,41,"良"],
                    [22,104,77,119,1.09,73,48,"轻度污染"],
                    [23,87,62,100,1,72,28,"良"],
                    [24,168,128,172,1.49,97,56,"中度污染"],
                    [25,65,45,51,0.74,39,17,"良"],
                    [26,39,24,38,0.61,47,17,"优"],
                    [27,39,24,39,0.59,50,19,"优"],
                    [28,93,68,96,1.05,79,29,"良"],
                    [29,188,143,197,1.66,99,51,"中度污染"],
                    [30,174,131,174,1.55,108,50,"中度污染"],
                    [31,187,143,201,1.39,89,53,"中度污染"]
                ];

                var schema = [
                    {name: 'date', index: 0, text: '日期'},
                    {name: 'AQIindex', index: 1, text: 'AQI'},
                    {name: 'PM25', index: 2, text: 'PM2.5'},
                    {name: 'PM10', index: 3, text: 'PM10'},
                    {name: 'CO', index: 4, text: ' CO'},
                    {name: 'NO2', index: 5, text: 'NO2'},
                    {name: 'SO2', index: 6, text: 'SO2'},
                    {name: '等级', index: 7, text: '等级'}
                ];

                var lineStyle = {
                    normal: {
                        width: 1,
                        opacity: 0.5
                    }
                };
                var dataSet_parallel = {
                    backgroundColor: '#c1c1d8',
                    legend: {
                        bottom: 30,
                        data: ['北京', '上海', '广州'],
                        itemGap: 20,
                        textStyle: {
                            color: '#000',
                            fontSize: 14
                        }
                    },
                    tooltip: {
                        padding: 10,
                        backgroundColor: '#222',
                        borderColor: '#000',
                        borderWidth: 1,
                        formatter: function (obj) {
                            var value = obj[0].value;
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + obj[0].seriesName + ' ' + value[0] + '日期：'
                                + value[7]
                                + '</div>'
                                + schema[1].text + '：' + value[1] + '<br>'
                                + schema[2].text + '：' + value[2] + '<br>'
                                + schema[3].text + '：' + value[3] + '<br>'
                                + schema[4].text + '：' + value[4] + '<br>'
                                + schema[5].text + '：' + value[5] + '<br>'
                                + schema[6].text + '：' + value[6] + '<br>';
                        }
                    },
                    // dataZoom: {
                    //     show: true,
                    //     orient: 'vertical',
                    //     parallelAxisIndex: [0]
                    // },
                    parallelAxis: [
                        {dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
                        {dim: 1, name: schema[1].text},
                        {dim: 2, name: schema[2].text},
                        {dim: 3, name: schema[3].text},
                        {dim: 4, name: schema[4].text},
                        {dim: 5, name: schema[5].text},
                        {dim: 6, name: schema[6].text},
                        {dim: 7, name: schema[7].text,
                            type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']}
                    ],
                    visualMap: {
                        show: true,
                        min: 0,
                        max: 150,
                        dimension: 2,
                        inRange: {
                            color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
                            // colorAlpha: [0, 1]
                        }
                    },
                    parallel: {
                        left: '5%',
                        right: '18%',
                        bottom: 100,
                        parallelAxisDefault: {
                            type: 'value',
                            name: 'AQI指数',
                            nameLocation: 'end',
                            nameGap: 20,
                            nameTextStyle: {
                                color: '#fff',
                                fontSize: 12
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#aaa'
                                }
                            },
                            axisTick: {
                                lineStyle: {
                                    color: '#777'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    series: [
                        {
                            name: '北京',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: dataBJ
                        },
                        {
                            name: '上海',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: dataSH
                        },
                        {
                            name: '广州',
                            type: 'parallel',
                            lineStyle: lineStyle,
                            data: dataGZ
                        }
                    ]
                };
                let parallel = echarts.init(this.$refs.parallel);
                parallel.setOption(dataSet_parallel)
            }
        },
        mounted(){
          //按小时统计
            this.TodayPageTimer();
            setInterval(this.TodayPageTimer, 1000*60*60)
          //按天统计
            this.OncePageTimer();
            setInterval(this.OncePageTimer, 1000*60*60*24)
            this.DataInit();
            this.drawBar();
            this.drawAQI();
            this.drawParallel();
        }
    }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
