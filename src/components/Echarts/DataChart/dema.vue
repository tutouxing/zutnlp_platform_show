<template>
    <div>
        <el-card :body-style="{ padding: '40px' }">
            <div id="dema_dv" style="width: 650px; height: 580px"></div>
        </el-card>
    </div>
</template>
<script>
  let echarts = require('echarts')
  export default {
    name: 'dema',
    data(){
      return {
        option : {
          title: {
            text: '趋势分析'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['独立访客统计','IP统计','PV统计']
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
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'独立访客统计',
              type:'line',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'IP统计',
              type:'line',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'PV统计',
              type:'line',
              data:[150, 232, 201, 154, 190, 330, 410]
            }
          ]
        },
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('dema_dv'));
        myChart.setOption(this.option);
      },
    }
  }
</script>
