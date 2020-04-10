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
            prop="task_name"
            label="档案名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="annotation_type"
            label="任务类型"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="发布者"
            prop="annotator"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="created_time"
            label="发布时间"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="操作"
            show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="goAnnotate(scope.row)" type="text" size="small">标注</el-button>
            <el-dropdown>
              <span class="el-dropdown-link" style="color: cornflowerblue">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="displayScore(scope.row)">实绩</el-dropdown-item>
                <el-dialog title="标注任务实绩" :visible.sync="dialogTableVisibleAnnotate">
                  <el-table :data="annotateData">
                    <el-table-column property="task_id" label="#" width="150"></el-table-column>
                    <el-table-column property="annotation_type" label="标注类型" width="200"></el-table-column>
                    <el-table-column property="status" label="状态" width="200"></el-table-column>
                    <el-table-column property="phrase" label="阶段" width="200"></el-table-column>
                    <el-table-column property="annotator" label="标注者" width="200"></el-table-column>
                    <el-table-column property="update_time" label="最后标注时间" width="200"></el-table-column>
                    <el-table-column label="操作">
                      <template slot-scope="scope">
                        <el-button @click="this.$router.push({path:'/annotate_detail'})" type="text" size="small">详情</el-button>
                        <!--<el-button @click="changeStatus(scope.row)" type="text" size="small" v-if="scope1.row.operation=='撤回'">撤回</el-button>-->
                      </template>
                    </el-table-column>
                  </el-table>
                </el-dialog>
                <el-dropdown-item @click.native="handleConnect(scope.row)">合并</el-dropdown-item>
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
 * Date:2020-02-01 02:35
 */
import {findTasks} from "../../../api/annotation";

export default {
        name: "index",
        created(){
             this.getTask();
        },
        data(){
            return{
                task_id:"",
                doc_id:"",
                taskData: [{}],
                value_status:"",
                value_task_type:"",
                dialogTableVisibleAnnotate:false,
                annotation_type:"",
                task:{},
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
                annotateData:[],
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
            goAnnotate(row){
                // destroyed();
                // this.annotation_type=row.annotation_type;
                // this.task=row;
                this.$store.commit("SET_ANNOTATIONTYPE_STATE",row.annotation_type);
                this.$store.commit("SET_TASK_STATE",row);
                // console.log(this.$store.state.annotationType);
                // console.log(this.$store.state.task);
                // console.log("----")
                // this.bus.$emit('task',row,row.annotation_type);
                this.$router.push("/annotate_detail")
            },
            //展示实绩
            displayScore(row) {
                this.dialogTableVisibleAnnotate=true;
                let resultWord="";
                for(let i=0;i<row.word.length;i++){
                    resultWord+=(row.word[i]+' &nbsp;&nbsp;&nbsp;&nbsp; ');
                }
                // this.$alert(resultWord, '词性标注结果', {
                //     confirmButtonText: '确定',
                //     dangerouslyUseHTMLString:true
                // });
            },
            //合并
            handleConnect(row){

            }
        },
        beforeDestroy(){
            // this.bus.$emit("task",(this.task,this.annotation_type));
        },
    }
</script>

<style scoped>
  div .el-row{
    margin-top: 50px;
    margin-left: 40px;
  }
</style>