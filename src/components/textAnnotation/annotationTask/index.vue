<template>
  <div>
    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-col :span="5">
        <el-input v-model="task_id" placeholder="任务号"></el-input>
      </el-col>
      <el-col :span="5">
        <el-input v-model="doc_id" placeholder="档案编号"></el-input>
      </el-col>
      <el-col :span="5"><!--任务类型-->
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in task_types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5"><!--任务状态-->
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in status"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row style="margin-left: 50px;margin-top: 40px">
      <el-col :span="5">
        <el-input v-model="keyword" placeholder="所有"></el-input>
      </el-col>
      <el-col :span="2"><el-button type="primary" @click="handleSearch()">查询</el-button></el-col>
      <el-col :span="2"><el-button @click="handleReset()">重置</el-button></el-col>
    </el-row>
    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-col :span="6"><el-button @click="handleMarkedStatus()">导出已标注状态</el-button></el-col>
    </el-row>
    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            label="任务号"
            width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="档案名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="address"
            label="任务类型"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="address"
            label="状态"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="address"
            label="发布时间"
        show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="address"
            label="发布者"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="操作"
            show-overflow-tooltip>
          <el-button @click="handleAnnotation()">标注</el-button>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2020-02-01 02:35
     */
    export default {
        name: "index",
        data(){
            return{
                task_id:"",
                doc_id:"",
                status:[{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                task_types:[{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                keyword:"",
                docsData:{
                    type:Array,
                    default:()=>([{name:"",address:""}])
                }
            }
        },
        methods:{
            handleSearch(){

            },
            handleReset(){

            },
            handleMarkedStatus(){

            },
            handleAnnotation(){

            },
        }
    }
</script>

<style scoped>
  div .el-row{
    margin-top: 50px;
    margin-left: 40px;
  }
</style>