<template>
  <div>
    <el-row style="margin-left: 50px">
      <el-col :span="6" style="margin-top: 40px">
        <el-input v-model="inputID" placeholder="请输入档案ID"></el-input>
      </el-col>
      <el-col :span="6" style="margin-top: 40px">
        <el-input v-model="inputName" placeholder="请输入档案名称"></el-input>
      </el-col>
      <el-col :span="6" style="margin-top: 40px">
        <el-button type="primary">查询</el-button>
      </el-col>
      <el-col :span="6" style="margin-top: 40px">
        <el-button>重置</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-table
          ref="multipleTable"
          :data="docData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="doc_id"
            label="档案ID"
            width="120">
          <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
        </el-table-column>
        <el-table-column
            prop="name"
            label="名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="publisher"
            label="发布者">
        </el-table-column>
        <el-table-column
            prop="classifyResult"
            label="分类结果">
        </el-table-column>
        <el-table-column
            prop="len"
            label="长度">
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
            <el-button @click="handleClassify(scope.row)" type="text" size="small">分类</el-button>
            <!--分类对话框begin-->
            <el-dialog title="文本分类校正" :visible.sync="dialogTableVisibleClassify">
              <el-row>
                <el-col :span="10" style="text-align: center">当前分类结果：</el-col>
                <!--显示回调结果-->
                <el-col :span="10" style="text-align: center">{{classifyResult}}</el-col>
              </el-row>
              <el-row>
                <el-col :span="10" style="text-align: center">重新分类：</el-col>
                <el-col :span="10">
                  <el-select
                      v-model="value"
                      filterable
                      allow-create
                      default-first-option
                      placeholder="请选择分类标签或自创建标签"
                      @change="getOption">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
              <el-row>
                <el-button @click="saveClassify(scope.row)" style="margin-left: 40%" type="primary">保存结果</el-button>
              </el-row>
            </el-dialog>
            <!--文本分类对话框end-->
            <el-button @click="handleRecallClassify(scope.row)" type="text" size="small">撤销</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>/**
 * author:wastelands
 * Date:2020-04-27 04:08
 */
import {getAllDocs, getDocClassify, recallClassify, saveClassifyResult} from "../../api/annotation";

export default {
        name: "index",
        data(){
            return{
                docData:[],
                dialogTableVisibleClassify:false,
                doc_id:"",
                inputName:"",
                inputID:"",
                options: [{
                    value: '交通',
                    label: '交通'
                }, {
                    value: '政治',
                    label: '政治'
                }, {
                    value: '艺术',
                    label: '艺术'
                }],
                value: '',
                classifyResult:"",
            }
        },
        mounted(){
            this.getDocs();
        },
        methods:{
            getDocs(){
                getAllDocs().then(res=>{
                    if (res.data!==null){
                        this.docData=res.data;
                    } else {
                        this.$notify({
                            title:"获取失败",
                            type:"failed",
                            message:"数据获取失败！"
                        })
                    }
                },err=>{
                    console.log(err)
                })
            },
            handleSelectionChange(){},
            //显示对话框并回调分类结果
            handleClassify(row){
                this.doc_id=row.doc_id;
                if(row.classifyResult==null){
                    getDocClassify(row.doc_id).then(res=>{
                        console.log(res.data);
                        this.classifyResult=res.data;

                    },err=>{
                        console.log(err)
                    })
                }else {
                    this.classifyResult=row.classifyResult;
                }
                this.dialogTableVisibleClassify=true;
            },
            getOption(){
              console.log(this.value)
            },
            //保存分类结果
            saveClassify(row){
                console.log("row:===");
                console.log(row);
              if (this.value.length===0){//classifyResult即为分类结果
                  saveClassifyResult(this.doc_id,this.classifyResult).then(res=>{
                    if (res.data===true){
                        this.$notify({
                            message:"分类成功！",
                            type:"success",
                            duration:2000
                        })
                    } else {
                        this.$notify({
                            message:"分类失败！",
                            type:"failure",
                            duration:2000
                        })
                    }
                  },err=>{
                      console.log(err);
                  })
              } else {//value为分类结果
                  saveClassifyResult(this.doc_id,this.value).then(res=>{
                      if (res.data===true){
                          this.$notify({
                              type:"success",
                              message:"分类成功！",
                              duration:2000
                          })
                      } else {
                          this.$notify({
                              type:"failure",
                              message:"分类失败！",
                              duration:2000
                          })
                      }
                  },err=>{
                      console.log(err);
                  })
              }
            },
            //撤销分类
            handleRecallClassify(row){
                recallClassify(row.doc_id).then(res=>{
                    if (res.data==true){
                        this.$notify({
                            type:"success",
                            message:"撤销成功！"
                        })
                    } else {
                        this.$notify({
                            type:"failure",
                            message:"撤销失败！"
                        })
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