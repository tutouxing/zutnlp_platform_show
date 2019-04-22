<template>
  <div>
    <el-card v-loading="loading" :body-style="{ padding: '0px' }">
      <div ref="bar_dv" style="width: auto; height: 300px"></div>
    </el-card>
  </div>
</template>
<script>
    import {fetchTree} from "@/api/admin/group";
    import {getTableMassage} from "@/api/tableconfig/Gettablemsg";
    import {getAllObj} from "@/api/admin/Service";
    import {getCV} from "../../../api/echarts/2D";

    let echarts = require('echarts');
    // 引入柱状图组件
    require('echarts/lib/chart/bar');
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/toolbox');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/markLine');
    export default {
        name: 'bar',
        data() {
            return {
                dataSet:{
                    title: {text: 'yob'},
                    tooltip: {},
                    xAxis: {
                        data: [],
                        name: 'zum'
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
                        name: 'yhum'
                    },
                    series: [{
                        name: "",
                        type: 'bar',
                        data: [],
                    }]
                },
                loading: true
            }
        },

        mounted() {
            this.matchBar(this.$store.state.selection);

        },
        methods: {
            drawLine() {
                // this.dataSet = match(this.$store.state.selection);
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(this.$refs.bar_dv);
                myChart.setOption(this.dataSet);
            },
            matchBar(selection) {
                let that = this;
                if (selection === "用户组") {
                    fetchTree().then(res => {
                        that.dataSet.title["text"] = "用户组";
                        that.dataSet.xAxis["name"] = "组名";
                        that.dataSet.yAxis["name"] = "组人数";
                        this.loading=false;
                        for (let i = 0;i<res.data.length;i++) {
                            that.dataSet.xAxis.data.push(res.data[i]["name"]);
                            that.dataSet.series[0].data.push(res.data[i]["children"].length);
                        }
                        that.$nextTick(()=>{
                            that.drawLine();
                        })
                    });
                }else if (selection === "代码表单"){
                    getTableMassage().then(res => {
                        that.dataSet.title["text"] = "代码表单";
                        that.dataSet.xAxis["name"] = "表名";
                        that.dataSet.yAxis["name"] = "属性个数";
                        this.loading=false;
                        for (let i = 0;i<res.data.length;i++) {
                            that.dataSet.xAxis.data.push(res.data[i]["tablename"]);
                            that.dataSet.series[0].data.push(res.data[i]["props"].length);
                        }
                        that.$nextTick(()=>{
                            that.drawLine();
                        })
                    });
                }else if (selection === "服务组"){
                    getAllObj().then(res=>{
                        that.dataSet.title["text"] = "服务展示";
                        that.dataSet.xAxis["name"] = "服务组";
                        that.dataSet.yAxis["name"] = "服务数";
                        for (let i = 0;i<res.data.applications["application"].length;i++) {
                            that.dataSet.xAxis.data.push(res.data.applications["application"][i]["name"]);
                            that.dataSet.series[0].data.push(res.data.applications["application"][i]["instance"].length);
                        }
                        this.loading=false;
                        that.$nextTick(()=>{
                            that.drawLine();
                        })
                    })
                }else if (selection === "图像处理"){
                    getCV().then((res)=>{
                        that.dataSet.title["text"] = "图像处理展示";
                        that.dataSet.xAxis["name"] = "图像名";
                        that.dataSet.yAxis["name"] = "实体数";
                        for (let i = 0;i<res.data.content.length;i++) {
                            that.dataSet.xAxis.data.push(res.data.content[i]["id"]);
                            that.dataSet.series[0].data.push(res.data.content[i]["qasList"].length);
                        }
                        this.loading=false;
                        that.$nextTick(()=>{
                            that.drawLine();
                        })
                    })
                }
            }
        }

    }
</script>
