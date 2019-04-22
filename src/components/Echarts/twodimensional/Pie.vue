<template>
    <div class="pie">
        <el-card v-loading="loading" :body-style="{ padding: '0px' }">
        <div ref="pie_dv" style="width: auto; height: 300px"></div>
        </el-card>
    </div>
</template>
<script>
    import {fetchTree} from "../../../api/admin/group";
    import {getTableMassage} from "../../../api/tableconfig/Gettablemsg";
    import {getAllObj} from "../../../api/admin/Service";
    import {getCV} from "../../../api/echarts/2D";

    let echarts = require('echarts')
    export default {
        name: 'tt',
        data(){
            return{
                dataSet:{
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
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
                            magicType: {type: ['line', 'bar']},
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
                            name: '',
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
                loading:true
            }
        },
        mounted(){
            this.matchPie(this.$store.state.selection);
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(this.$refs.pie_dv);
                // 绘制图表
                myChart.setOption(this.dataSet);
            },
            matchPie(selection) {
                let that = this;
                if (selection === "用户组") {
                    fetchTree().then(res => {
                        that.dataSet.title["text"] = "用户组";
                        that.dataSet.title["subtext"] = "zutnlp-platform";
                        that.dataSet.series[0]["name"] = "组情况";
                        console.log("res:" + res.data);
                        this.loading=false;
                        for (let i = 0;i<res.data.length;i++) {
                            that.dataSet.legend.data.push(res.data[i]["name"]);
                            that.dataSet.series[0].data.push(
                                {
                                    value:res.data[i]["children"].length,
                                    name:res.data[i]["name"],
                                }
                            );
                        }
                        that.$nextTick(()=>{
                            that.drawLine();
                        })
                    });
                }else if (selection === "代码表单"){
                    getTableMassage().then(res => {
                        that.dataSet.title["text"] = "代码表单";
                        that.dataSet.title["subtext"] = "zutnlp-platform";
                        that.dataSet.series[0]["name"] = "表属性个数";
                        this.loading=false;
                        for (let i = 0;i<res.data.length;i++) {
                            that.dataSet.legend.data.push(res.data[i]["tablename"]);
                            that.dataSet.series[0].data.push(
                                {
                                    value:res.data[i]["props"].length,
                                    name:res.data[i]["tablename"],
                                }
                            );
                        }
                        that.$nextTick(()=>{
                            that.drawLine();
                        })
                    });
                }else if (selection === "服务组"){
                    getAllObj().then(res=>{
                        that.dataSet.title["text"] = "服务表";
                        that.dataSet.title["subtext"] = "spring-cloud";
                        that.dataSet.series[0]["name"] = "服务个数";
                        for (let i = 0;i<res.data.applications["application"].length;i++) {
                            that.dataSet.legend.data.push(res.data.applications["application"][i]["name"]);
                            that.dataSet.series[0].data.push({
                                value:res.data.applications["application"][i]["instance"].length,
                                name:res.data.applications["application"][i]["name"],
                            });
                        }
                        this.loading=false;
                        that.$nextTick(()=>{
                            that.drawLine();
                        })
                    })
                }else if (selection === "图像处理"){
                    getCV().then((res)=>{
                        that.dataSet.title["text"] = "图像处理展示";
                        that.dataSet.title["subtext"] = "zutnlp-platform-cv";
                        that.dataSet.series[0]["name"] = "实体数";
                        for (let i = 0;i<res.data.content.length;i++) {
                            that.dataSet.legend.data.push(res.data.content[i]["id"]);
                            that.dataSet.series[0].data.push ({
                                value:res.data.content[i]["qasList"].length,
                                name:res.data.content[i]["id"]
                            });
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
