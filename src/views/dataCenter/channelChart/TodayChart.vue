<template>
    <div>
        <el-card :body-style="{ padding: '40px' }">
            <div id="channel3_dv" style="width: 1500px; height: 580px"></div>
        </el-card>
    </div>
</template>

<script>
  let echarts = require('echarts')
  export default {
    name: 'TodayChart',
    data(){
      return{
        option:{
          backgroundColor:'#0f375f',
          tooltip: {},
          grid:{
            top:'5%',
          },
          legend: {
            data:['栏目浏览量'],
            right:'10%',
            top:'5%',
            textStyle:{
              color:'#fff',
              fontSize:24,
            }
          },
          xAxis: {
            data: [],       //横坐标
            axisTick:{
              show:false,
            },
            axisLabel:{
              interval: 0,
              rotate:25,
              textStyle: {
                color:'#fff',
                fontSize:24,
              }
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color:'#fff',
                width:'1  ',                                                //坐标线的宽度

              }
            },
          },
          yAxis: {
            splitLine: {
              show: true,
              lineStyle:{
                color: '#40A1EA',                                         //网格横线颜色
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize:24,//坐标值得具体的颜色
              }
            },
            axisLine: {
              show:false,
            },
          },
          series: [{
            name: '栏目浏览量',
            type: 'bar',
            barWidth:70,
            data: [],        //数据
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#06B5D7'},                   //柱图渐变色
                    {offset: 0.5, color: '#44C0C1'},                 //柱图渐变色
                    {offset: 1, color: '#71C8B1'},                   //柱图渐变色
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#71C8B1'},                  //柱图高亮渐变色
                    {offset: 0.7, color: '#44C0C1'},                //柱图高亮渐变色
                    {offset: 1, color: '#06B5D7'}                   //柱图高亮渐变色
                  ]
                )
              }
            },
          }]
        },
      }
    },
    mounted(){
      this.drawLine();
    },
    methods:{
      drawLine() {
        for (let i = 0;i<this.$store.state.channel.length;i++) {
          this.option.xAxis.data.push(this.$store.state.channel[i].chName);
          this.option.series[0].data.push(this.$store.state.channel[i].today);
        }
        let myChart = echarts.init(document.getElementById('channel3_dv'));
        myChart.setOption(this.option);
      },
    }
  }
</script>

<style scoped>

</style>
