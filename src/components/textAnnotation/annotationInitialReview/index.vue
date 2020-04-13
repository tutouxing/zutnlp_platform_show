<template>
  <div>
    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-col :span="5">
        <el-input v-model="task_id" placeholder="档案编号"></el-input>
      </el-col>
      <el-col :span="5"><!--任务类型-->
        <el-select v-model="value" placeholder="标注类型">
          <el-option
              v-for="item in task_types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5"><!--任务状态-->
        <el-select v-model="value" placeholder="状态">
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
      <el-col :span="2"><el-button type="primary" @click="handleSearch()">查询</el-button></el-col>
      <el-col :span="2"><el-button @click="handleReset()">重置</el-button></el-col>
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
            prop="task_name"
            label="档案名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="reviewer"
            label="审核者"
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
            prop="annotator"
            label="标注者"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="created_time"
            label="提交时间"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="操作"
            show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="handleReview(scope.row)" type="text" size="small">审核</el-button>
            <el-dropdown>
              <span class="el-dropdown-link" style="color: cornflowerblue;">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="handlePass(scope.row)">通过</el-dropdown-item>
                <el-dropdown-item @click.native="refuseReview(scope.row)">拒绝</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>/**
 * author:wastelands
 * Date:2020-02-13 04:25
 */
import {findTasks, passInitial} from "../../../api/annotation";

export default {
        name: "index",
        data(){
            return{
                doc_id:"",
                task_id:"",
                value:"",
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
                taskData:[],
            }
        },
        mounted(){
            this.getTasks()
        },
        methods:{
            getTasks(){
                this.taskData=[];
                findTasks().then((res)=>{
                    for (let task of res.data){
                        if (task.phrase==="一标"){
                            this.taskData.push(task)
                        }
                    }
                    console.log(this.taskData)
                })
            },
            refuseReview(row){
                this.handleReview(row)
            },
            handleReview(row){
                this.$store.commit("SET_ANNOTATIONTYPE_STATE",row.annotation_type);
                this.$store.commit("SET_TASK_STATE",row);
                this.$router.push("/annotate_detail")
            },
            handlePass(row){
                passInitial(row.doc_id,row.task_id).then(res=>{
                    if (res.data===true){
                        this.$notify({
                            title: '成功',
                            message: '保存成功',
                            type: 'success',
                            duration: 2000
                        });
                    } else {
                        this.$notify({
                            title: '失败',
                            message: '保存失败',
                            type: 'failure',
                            duration: 2000
                        });
                    }
                    this.getTasks();
                },err=>{
                    this.$notify({
                        title: '失败',
                        message: '保存失败',
                        type: 'failure',
                        duration: 2000
                    });
                })
            },
            handleSearch(){},
            handleReset(){},
        },
    }
</script>

<style scoped>

</style>