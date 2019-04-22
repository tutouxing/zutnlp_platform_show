<template>
  <div class="code">
    <el-card :body-style="{ padding: '0px' }" style="width: auto; height: 250px">
      <tree-grid :data="code_data" :columns="code_columns" border/>
    </el-card>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2019-01-03 20:16
     */
    import treeGrid from '../../components/TableTree/index.vue'
    import {getTableMassage} from "../../api/tableconfig/Gettablemsg";
    export default {
        name: "CodeTreeGrid",
        data(){
            return{
                code_columns:[
                    {
                        text: "表名",
                        value: "tablename",
                    },
                    {
                        text: "说明",
                        value: "text"
                    },
                    {
                        text: "包名",
                        value: "packageName"
                    },
                    {
                        text: "作者",
                        value: "authod",
                    },
                    {
                        text: "实体名",
                        value: "entityName",
                    },
                ],
                code_data:[],
            }
        },
        components:{
            treeGrid
        },
        mounted(){
            getTableMassage().then(res => {
                this.code_data = res.data;
            });
        },
    }
</script>

<style scoped>

</style>