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
        <el-select v-model="value_task_type" placeholder="标注类型">
          <el-option
              v-for="item in task_types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5"><!--任务状态-->
        <el-select v-model="value_status" placeholder="标注阶段">
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
          :data="taskData"
          tooltip-effect="dark"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="task_id"
            label="任务号"
            width="120">
          <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
        </el-table-column>
        <el-table-column
            prop="name"
            label="文档名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="update_time"
            label="上传时间"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="phrase"
            label="阶段"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="annotation_type"
            label="标注类型"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="标注者"
            prop="annotator"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="操作"
            show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click.native="handleDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>/**
 * author:wastelands
 * Date:2020-02-01 02:35
 */
import {findTasks} from "../../../api/annotation";

export default {
        name: "index",
        created(){
             this.getTask();
        },
    // {
    //   this.getTask();
    // },
        mounted(){
            this.getTask();
        },
        data(){
            return{
                task_id:"",
                doc_id:"",
                taskData: [{}],
                value_status:"",
                value_task_type:"",
                status:[{
                    value: '选项1',
                    label: '待初审'
                }, {
                    value: '选项2',
                    label: '待终审'
                }, {
                    value: '选项3',
                    label: '待标注'
                }],
                task_types:[{
                    value: '选项1',
                    label: '词性标注'
                }, {
                    value: '选项2',
                    label: '中文分词'
                }, {
                    value: '选项3',
                    label: '专业术语'
                }],
                keyword:"",
            }
        },
        methods:{
            getTask(){
                findTasks().then((res)=>{
                    this.taskData=res.data;
                    console.log(this.taskData);
                })
            },
            handleSearch(){

            },
            handleReset(){

            },
            handleMarkedStatus(){

            },
            handleAnnotation(){

            },
            //查看详情
            handleDetail(row) {
                let resultWord="";
                for(let i=0;i<row.word.length;i++){
                    resultWord+=(row.word[i]+' &nbsp;&nbsp;&nbsp;&nbsp; ');
                }
                this.$alert(resultWord, '词性标注结果', {
                    confirmButtonText: '确定',
                    dangerouslyUseHTMLString:true
                });
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