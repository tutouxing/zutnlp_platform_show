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
      <el-col :span="5"><!--阶段-->
        <el-select v-model="value" placeholder="标注阶段">
          <el-option
              v-for="item in status"
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
            type="index"
            width="50">
        </el-table-column>
        <el-table-column
            prop="task_name"
            label="档案名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="annotation_type"
            label="标注任务类型"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="phrase"
            label="阶段"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="update_time"
            label="更新时间"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="created_time"
            label="创建时间"
            show-overflow-tooltip>
        </el-table-column>

        <el-table-column
            label="操作"
            show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="handleAnnotation(scope.row)" type="text" size="small">标注</el-button>
            <el-dropdown>
              <span class="el-dropdown-link" style="color: cornflowerblue">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="handleDetail(scope.row)">详情</el-dropdown-item>
                <el-dropdown-item @click="deleteDoc(scope.row)">提交初审</el-dropdown-item>
                <el-dropdown-item @click="cancelReview(scope.row)">撤回初审</el-dropdown-item>
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
 * Date:2020-02-01 03:32
 */
import {findTasks} from "../../../api/annotation";

export default {
        name: "index",
        data(){
            return{
                task_id:"",
                doc_id:"",
                value:"",
                taskData: [],
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
            }
        },
        mounted(){
          this.getTasks();
        },
        methods:{
            getTasks(){
                this.taskData=[];
                findTasks().then((res)=>{
                    for (let task of res.data){
                        if (task.annotator===this.$store.state.username){
                            this.taskData.push(task)
                        }
                    }
                })
            },
            handleSearch(){

            },
            handleReset(){

            },
            handleMarkedStatus(){

            },
            handleAnnotation(){
                this.$store.commit("SET_ANNOTATIONTYPE_STATE",row.annotation_type);
                this.$store.commit("SET_TASK_STATE",row);
                this.$router.push("/annotate_detail")
            },
            cancelReview(){

            },
        }
    }
</script>

<style scoped>

</style>