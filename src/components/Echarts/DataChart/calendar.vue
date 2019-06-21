<template>
    <div>
        <el-card body-style="{ padding: '0px' }">
            <div id="calendar_dv" style="width: 500px; height: 300px"></div>
        </el-card>
    </div>
</template>

<script>
  let echarts = require('echarts');
  export default {
    name: 'calendar',
    mounted () {
      this.drawLine();
      this.daa();
    },
    data () {
      return {
        option: {
          tooltip: {},
          legend: {
            data: ['工作', '娱乐', '睡觉'],
            bottom: 20
          },
          calendar: {
            top: 'middle',
            left: 'center',
            orient: 'vertical',
            cellSize: this.cellSize,
            yearLabel: {
              show: false,
              textStyle: {
                fontSize: 30
              }
            },
            dayLabel: {
              margin: 20,
              firstDay: 1,
              nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
            monthLabel: {
              show: false
            },
            range: ['2017-02']
          },
          series: [{
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                textStyle: {
                  color: '#000',
                  fontSize: 14
                }
              }
            },
            data: this.scatterData
          }]
        },
        scatterData: this.getVirtulData(),
        cellSize: [80, 80],
        pieRadius: 30,
      }
    },
    methods: {
      getVirtulData () {
        var date = +echarts.number.parseDate('2017-02-01');
        var end = +echarts.number.parseDate('2017-03-01');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
          ]);
        }
        return data;
      },
      daa() {
          var pieInitialized;
          setTimeout(function () {
            pieInitialized = true;
            let myChart = echarts.init(document.getElementById('calendar_dv'));
            myChart.setOption({
              series: this.getPieSeries(this.scatterData, myChart)
            });
          }, 10);

      },
      getPieSeries (scatterData, chart) {
        return echarts.util.map(scatterData, function (item, index) {
          var center = chart.convertToPixel('calendar', item);
          return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
              normal: {
                formatter: '{c}',
                position: 'inside'
              }
            },
            radius: this.pieRadius,
            data: [
              {name: '工作', value: Math.round(Math.random() * 24)},
              {name: '娱乐', value: Math.round(Math.random() * 24)},
              {name: '睡觉', value: Math.round(Math.random() * 24)}
            ]
          };
        });
      },
      getPieSeriesUpdate (scatterData, chart) {
        return echarts.util.map(scatterData, function (item, index) {
          var center = chart.convertToPixel('calendar', item);
          return {
            id: index + 'pie',
            center: center
          };
        });
      },
      drawLine () {
        // this.dataSet = match(this.$store.state.selection);
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('calendar_dv'));
        myChart.setOption(this.option)
      },
    }
  }
</script>

<style scoped>

</style>
