<template>
    <div class="service">
        <el-card :body-style="{ padding: '0px' }" style="width: auto; height: 250px">
            <tree-grid :data="cv_data" :columns="cv_columns" border/>
        </el-card>
    </div>
</template>

<script>
    import treeGrid from '../../components/TableTree/index.vue'
    import {getCV} from "../../api/echarts/2D";
    export default {
        name: "CvTreeGrid",
        components: { treeGrid },
        data() {
            return {
                listQuery: {//列表的限制
                    page: 1,
                    limit: 20,
                },
                cv_columns:[
                    {
                        text: 'id',
                        value:'id',
                        width:200
                    },
                    {
                        text: 'image_url',
                        value:'url',
                        width:200,
                    },
                ],
                cv_data:[],
            };
        },
        mounted(){
            this.getAllServices();
        },
        methods:{
            getAllServices(){
                let that = this;
                getCV().then((res)=>{
                    that.cv_data = res.data.content;
                    /*that.dataSet.title["text"] = "图像处理展示";
                    that.dataSet.xAxis["name"] = "图像名";
                    that.dataSet.yAxis["name"] = "实体数";
                    for (let i = 0;i<res.data.content.length;i++) {
                        that.dataSet.xAxis.data.push(res.data.content[i]["id"]);
                        that.dataSet.series[0].data.push(res.data.content[i]["qasList"].length);
                    }
                    this.loading=false;
                    that.$nextTick(()=>{
                        that.drawLine();
                    })*/
                })
            },
        },
    }
</script>

<style scoped>

</style>
