<template>
    <el-card>
        <el-col>
            <el-row  style="width: 20%">
                <span>日期：</span>
                <el-radio-group v-model="radio">
                    <el-radio-button label="今日"></el-radio-button>
                    <el-radio-button label="历史"></el-radio-button>
                </el-radio-group>
            </el-row>
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
</template>

<script>
  let echarts = require('echarts')
  export default {
    name: 'fromDemo',
    data () {
      return{
        option:{

        }
      }
    },
    mounted () {
      this.drawLine();
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('channel_dv'));
        myChart.setOption(this.option1);
        let myChart2 = echarts.init(document.getElementById('channel2_dv'));
        myChart2.setOption(this.option);
      },
    }
  }
</script>

<style scoped>

</style>
