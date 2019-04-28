<template>
    <div>
        <div>
            <el-card >
                <el-row >
                    <el-col :span="10">
                        <el-row>
                            <el-col :span="10">
                                <el-tree
                                        :data="tooldata"
                                        show-checkbox
                                        node-key="id"
                                        ref="tree1"
                                        highlight-current
                                        :props="defaultProps">
                                </el-tree>
                            </el-col>
                            <el-col :span="10">
                                <el-tree
                                        :data="chartdata"
                                        show-checkbox
                                        node-key="id"
                                        ref="tree2"
                                        highlight-current
                                        :props="defaultProps">
                                </el-tree>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col span="10">
                                <div class="buttons">
                                    <el-button @click="resetChecked">清空</el-button>
                                    <el-button @click="getCheckedKeys2">生成</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12">
                    </el-col>
                </el-row>
            </el-card>
        </div>
        <div >
            <el-row>
                <div v-show="this.$store.state.chartType[0]!=='NoType'">
                    <el-col :span="10">
                        <el-card style="width: 600px; height: 600px">
                            <el-button style="float: right; padding: 3px 0" type="text" @click=cancelOne()>关闭</el-button>
                            <div id="bar_dv" style="width: 500px; height: 500px"></div>
                        </el-card>
                    </el-col>
                </div>
                <div v-show="this.$store.state.chartType[1]!=='NoType'">
                    <el-col :span="10" >
                        <el-card style="width: 600px; height: 600px">
                            <el-button style="float: right; padding: 3px 0" type="text" @click=cancelTwo()>关闭</el-button>
                            <div id="line_dv" style="width: 500px; height: 500px"></div>
                        </el-card>
                    </el-col>
                </div>
            </el-row>
        </div>
    </div>
</template>
<script>
    import{MyEcharts} from "../../utils/chart";
    export default {
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                console.log("ok");
                var db = new MyEcharts("bar_dv",this.$store.state.chartDataUrl);
                var bd = new  MyEcharts("line_dv",this.$store.state.chartDataUrl);
                if(this.$store.state.chartType[0]==='Bar')
                    db.initBar();
                if(this.$store.state.chartType[0]==='Line')
                    db.initline();
                if(this.$store.state.chartType[0]==='Pie')
                    db.initPie();
                if(this.$store.state.chartType[0]==='Scatter')
                    db.initScatter();
                if(this.$store.state.chartType[0]==='Radar')
                    db.initRadar();
                if(this.$store.state.chartType[1]==='Bar')
                    bd.initBar();
                if(this.$store.state.chartType[1]==='Line')
                    bd.initline();
                if(this.$store.state.chartType[1]==='Pie')
                    bd.initPie();
                if(this.$store.state.chartType[1]==='Scatter')
                    bd.initScatter();
                if(this.$store.state.chartType[1]==='Radar')
                    bd.initRadar();
            },
            // getCheckedNodes1() {
            //     console.log(this.$refs.tree1.getCheckedNodes());
            // },
            // getCheckedKeys1() {
            //     console.log(this.$refs.tree1.getCheckedKeys());
            // },
            // getCheckedNodes2() {
            //     console.log(this.$refs.tree2.getCheckedNodes());
            // },
            cancelOne(){
                this.$store.commit('set_chartType_state',{num:0,type:'NoType'});
            },
            cancelTwo(){
                this.$store.commit('set_chartType_state',{num:1,type:'NoType'});
            },
            resetChecked() {
                this.$refs.tree1.setCheckedKeys([]);
                this.$refs.tree2.setCheckedKeys([]);
            },
            getCheckedKeys2() {
                console.log(this.$store.state.chartType);
                for(let i=0;i<this.$refs.tree2.getCheckedKeys().length;i++) {
                    console.log(this.$refs.tree2.getCheckedKeys()[i]);
                    this.$store.commit("set_chartType_state",{num: i, type:this.$refs.tree2.getCheckedKeys()[i]});
                }
                this.$store.commit("set_chartDataUrl_state",this.$refs.tree1.getCheckedKeys()[0]);
                 console.log(this.$store.state.chartDataUrl);
                this.drawLine();
            },

        },
        mounted() {
            this.drawLine();
        },
        data() {
            return {
                tooldata: [{
                    id: 'clothes',
                    label: '服务1',
                    children: [{
                        id: 'http://127.0.0.1:8848/echart/2D/176',
                        label: '服务1-1',
                    }, {
                        id: 'http://127.0.0.1:8848/echart/2D/175',
                        label: '服务1-2'
                    }, {
                        id: 'http://127.0.0.1:8848/echart/2D/177',
                        label: '服务1-3'
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                chartdata: [{
                    id:'2D',
                    label: '二维图表',
                    children: [{
                        id: 'Bar',
                        label: '条形图',
                    }, {
                        id: 'Line',
                        label: '折线图'
                    }, {
                        id: 'Pie',
                        label: '饼状图'
                    }, {
                        id: 'Scatter',
                        label: '散点图'
                    },{
                        id: 'Radar',
                        label: '雷达图'
                    }]
                }, {
                    id: 10,
                    label: '一级 2',
                    children: [{
                        id: 11,
                        label: '二级 2-1'
                    }, {
                        id: 12,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 13,
                    label: '一级 3',
                    children: [{
                        id: 14,
                        label: '二级 3-1'
                    }, {
                        id: 15,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }
    };
</script>
<style>
    /*div#tree1 .el-tree{
     background:#545c64;
        color: #ffd04b;
 }*/
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color:lightslategray;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color:silver;
    }
</style>
