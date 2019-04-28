<template>

    <div>
        <el-card :body-style="{ padding: '0px' }">
            <div id="bar_dv" style="width: 500px; height: 500px"></div>
        </el-card>
    </div>
</template>
<script>
    import{MyEcharts} from "../../../utils/chart";
    export default {
        name: 'bar',
        mounted() {
            this.drawLine();
        },
        data(){
            return {}
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                console.log("ok");
                var db = new MyEcharts("bar_dv",'http://127.0.0.1:8848/echart/2D/177');
                db.initRadar();
            },
        }
    }
</script>
