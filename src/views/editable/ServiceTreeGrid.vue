<template>
  <div class="service">
    <el-card :body-style="{ padding: '0px' }" style="width: auto; height: 250px">
      <tree-grid :data="service_data" :columns="service_columns" border/>
    </el-card>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2019-01-03 20:08
     */
    import treeGrid from '../../components/TableTree/index.vue'
    import {getAllObj} from "../../api/admin/Service";
    export default {
        name: "ServiceTreeGrid",
        components: { treeGrid },
        data() {
            return {
                listQuery: {//列表的限制
                    page: 1,
                    limit: 20,
                },
                service_columns:[
                    {
                        text: '服务名',
                        value:'id',
                    },
                    {
                        text: 'IP地址',
                        value:'ipAddr',
                    },
                    {
                        text: '主机名',
                        value: 'hostName'
                    },
                    {
                        text: '状态',
                        value: 'status'
                    }
                ],
                service_data:[],
            };
        },
        mounted(){
            this.getAllServices();
        },
        methods:{
            getAllServices(){
                let that = this;
                getAllObj().then(response=>{
                    for (let i = 0;i<response.data.applications.application.length;i++) {
                        for (let j = 0;j<response.data.applications.application[i]["instance"].length;j++){
                            that.service_data.push(response.data.applications.application[i]["instance"][j]);
                        }
                        // that.dataSet.xAxis.data.push(res.data.applications["application"][i]["name"]);
                        // that.dataSet.series[0].data.push(res.data.applications["application"][i]["instance"].length);
                    }

                })
            },
        },
    }
</script>

<style scoped>

</style>
