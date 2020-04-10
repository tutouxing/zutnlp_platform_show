<template>
  <div>
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" style="font-size: 25px;height: 40px">原文查看</span>
          <div v-html="content" style="font-size: 25px;text-align: left"></div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" v-if="annotation_type!=''" style="font-size: 25px;height: 40px"><i class="el-icon-date"></i> {{this.annotation_type}}</span>
          <div v-if="annotation_type==='中文分词'">{{this.task.segmentWord}}</div>
          <div v-if="annotation_type==='词性标注'">{{this.task.propertyWord}}</div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" style="font-size: 25px;height: 40px"><i class="el-icon-date"></i> 标注记录</span>
          <el-table :data="annotateRecord">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column property="annotation_type" label="标注类型" width="200"></el-table-column>
            <el-table-column property="status" label="状态" width="200"></el-table-column>
            <el-table-column property="phrase" label="阶段" width="200"></el-table-column>
            <el-table-column property="annotator" label="标注者" width="200"></el-table-column>
            <el-table-column property="created_time" label="创建时间" width="200"></el-table-column>
            <el-table-column property="update_time" label="最后标注时间" width="200"></el-table-column>
            <!--<el-table-column label="操作">-->
              <!--<template slot-scope="scope">-->
                <!--<el-button @click="" type="text" size="small">查看</el-button>-->
                <!--&lt;!&ndash;<el-button @click="changeStatus(scope.row)" type="text" size="small" v-if="scope1.row.operation=='撤回'">撤回</el-button>&ndash;&gt;-->
              <!--</template>-->
            <!--</el-table-column>-->
          </el-table>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" style="font-size: 25px;height: 40px"><i class="el-icon-date"></i> 标注对比</span>
          标注对比
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <el-col :span="6"><el-button>提交审核</el-button></el-col>
      <el-col :span="6"><el-button>还原修改</el-button></el-col>
      <el-col :span="6"><el-button>保存</el-button></el-col>
    </el-row>
  </div>

</template>

<script>/**
 * author:wastelands
 * Date:2020-04-07 02:28
 */
import {getDocById} from "../../../api/annotation";

export default {
        name: "annotateDetail",
        data(){
            return{
                task:{},
                annotation_type:"",
                doc:{},
                content:"",
                annotateRecord:[],
            }
        },
        mounted(){
            this.task=this.$store.state.task;
            this.annotation_type=this.$store.state.annotationType;
            this.getDoc();

        },
        watch:{
        },
        methods:{
            getDoc(){
                let that=this;
                getDocById(this.task.doc_id).then(res=>{
                    that.doc=res.data;
                    that.$nextTick(()=>{
                        that.content=that.doc.content.replace(/\n/g,"<br/>");
                    });
                    let j=0;
                    for (let t of that.doc.tasks){
                        that.annotateRecord.push(t);
                        // if(that.doc.tasks[i].annotation_type===that.annotation_type){
                        //     that.$set(that.annotateRecord,j,t);
                        //     j++;
                        // }
                    }
                },err=>{
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped>

</style>