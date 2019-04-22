<template>
    <div class="surface">
        <div id="surface_dv" style="width: 500px; height: 500px"></div>
    </div>
</template>
<script>
    let echarts = require('echarts')
    export default {
        name: 'tt',
        mounted() {
            this.drawLine();
        },
        data(){
            return{
                // myChart:{},
            }
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let surface_dv = document.getElementById("surface_dv");
                let myChart = echarts.init(surface_dv);
                // 绘制图表
                myChart.setOption({
                    backgroundColor: '#fff',
                    visualMap: {
                        show: false,
                        dimension: 2,
                        min: -1,
                        max: 1,
                        inRange: {
                            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                        }
                    },
                    xAxis3D: {
                        type: 'value'
                    },
                    yAxis3D: {
                        type: 'value'
                    },
                    zAxis3D: {
                        type: 'value'
                    },
                    grid3D: {
                        viewControl: {
                            // projection: 'orthographic'
                        }
                    },
                    series: [{
                        type: 'surface',
                        wireframe: {
                            // show: false
                        },
                        equation: {
                            x: {
                                step: 0.05
                            },
                            y: {
                                step: 0.05
                            },
                            z: function (x, y) {
                                if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
                                    return '-';
                                }
                                return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
                            }
                        }
                    }]
                });
            }
        }
    }
</script>