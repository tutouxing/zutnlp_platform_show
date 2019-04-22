<template>
  <div>
    <component :is="selection" v-show="false"></component>
  </div>
</template>
<script>
    import Bar_2D from '../../components/Echarts/twodimensional/Bar'
    import Line_2D from '../../components/Echarts/twodimensional/Line'
    import Pie_2D from '../../components/Echarts/twodimensional/Pie'
    import tableTree from '../editable/UserTreeGrid.vue'
    import bus from '../../assets/eventBus.js'

    export default {
        data() {
            return {
                url: '',
                dataSet: {
                    columns: [
                        {
                            text: "事件",
                            value: "event",
                            width: 200
                        },
                        {
                            text: "ID",
                            value: "id"
                        },
                        {
                            text: "时间线",
                            value: "timeLine"
                        },
                        {
                            text: "备注",
                            value: "comment"
                        }
                    ],
                    data: [
                        {
                            id: 0,
                            event: "事件1",
                            timeLine: 50,
                            comment: "无"
                        },
                        {
                            id: 1,
                            event: "事件1",
                            timeLine: 100,
                            comment: "无",
                            children: [
                                {
                                    id: 2,
                                    event: "事件2",
                                    timeLine: 10,
                                    comment: "无"
                                },
                                {
                                    id: 3,
                                    event: "事件3",
                                    timeLine: 90,
                                    comment: "无",
                                    children: [
                                        {
                                            id: 4,
                                            event: "事件4",
                                            timeLine: 5,
                                            comment: "无"
                                        },
                                        {
                                            id: 5,
                                            event: "事件5",
                                            timeLine: 10,
                                            comment: "无"
                                        },
                                        {
                                            id: 6,
                                            event: "事件6",
                                            timeLine: 75,
                                            comment: "无",
                                            children: [
                                                {
                                                    id: 7,
                                                    event: "事件7",
                                                    timeLine: 50,
                                                    comment: "无",
                                                    children: [
                                                        {
                                                            id: 71,
                                                            event: "事件71",
                                                            timeLine: 25,
                                                            comment: "xx"
                                                        },
                                                        {
                                                            id: 72,
                                                            event: "事件72",
                                                            timeLine: 5,
                                                            comment: "xx"
                                                        },
                                                        {
                                                            id: 73,
                                                            event: "事件73",
                                                            timeLine: 20,
                                                            comment: "xx"
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 8,
                                                    event: "事件8",
                                                    timeLine: 25,
                                                    comment: "无"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                selection: Line_2D
            }
        },
        mounted() {
            //接收dialog.vue
            bus.$on("init", (formData) => {
                this.$store.commit("set_chartUrl_state", formData.selection);
                console.log(this.$store.state.chartUrl);
                console.log(formData);
                //传给对应类型的echart
                // bus.$emit("passURL",this.url);
                if (formData.show_type === "2DLine")
                    this.selection = Line_2D;
                else if (formData.show_type === "2DBar")
                    this.selection = Bar_2D;
                else if (formData.show_type === "2DPie")
                    this.selection = Pie_2D;
                else if (formData.show_type === "网状图TreeGrid")
                    this.selection = tableTree;
                //传给AppMain.vue
                bus.$emit("passComponent", this.selection)
            });

        },
        components: {
            Bar_2D, Line_2D, Pie_2D, tableTree
        },
        methods: {}
    }
</script>
