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
    <el-row>
      <el-col :span="4" style="margin-top: 40px">
        <el-button @click="dialogVisible = true" type="primary">批量上传</el-button>
        <!--上传对话框-->
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
          <!--<span>-->
          <!--批量上传文档-->
          <el-upload
              class="upload"
              action="http://localhost:8848/doc/uploadDoc"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-progress="handleProgress"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
            <el-button size="small" type="primary">添加</el-button>
            <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
          </el-upload>
          <!--</span>-->
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>
    </el-row>

    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-table
          ref="multipleTable"
          :data="docsData"
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
            prop="publish"
            label="已发布"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="done"
            label="已完成"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="publisher"
            label="发布者">
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
            <el-button @click="handlePublish(scope.row)" type="text" size="small">发布</el-button>
            <!--发布任务对话框begin-->
            <el-dialog title="发布标注任务" :visible.sync="dialogTableVisiblePublish">
              <el-table :data="gridData">
                <el-table-column property="annotation_type" label="标注类型" width="150"></el-table-column>
                <el-table-column property="status" label="状态" width="200"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="changeStatus(scope.row)" type="text" size="small">{{scope.row.opera}}</el-button>
                    <!--<el-button @click="changeStatus(scope.row)" type="text" size="small" v-if="scope1.row.operation=='撤回'">撤回</el-button>-->
                  </template>
                </el-table-column>
              </el-table>
            </el-dialog>
            <!--发布任务对话框end-->
            <el-dropdown>
              <span class="el-dropdown-link" style="color: cornflowerblue">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="handleDetail(scope.row)">详情</el-dropdown-item>
                <!--详情对话框-->
                <el-dialog
                    title="文档详情"
                    :visible.sync="docDetailVisible"
                    :append-to-body="true">
                  <div v-html="docContent"></div>
                  <!--<el-input
                      type="text"
                      :rows="15"
                      :disabled="true"
                      v-model="docContent">
                  </el-input>-->
                </el-dialog>
                <el-dropdown-item @click.native="deleteDoc(scope.row)">删除</el-dropdown-item>
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
 * Date:2020-01-31 23:57
 */
import {
    deleteDoc,
    getAllDocs,
    paragraphProcess,
    postDocs,
    publishTask,
    recallPublish,
    updateDoc
} from "../../../api/annotation";
import * as Vue from "vue";

export default {
    name: "index",
    data() {
        return {
            inputID: "",
            inputName: "",
            fileList: [],
            docsData: [{}],
            multipleSelection: [],
            dialogVisible: false,
            dialogTableVisiblePublish: false,//发布对话框
            docDetailVisible:false,//文档详情对话框
            docContent:"",
            //发布对话框中的表单数据
            gridData: [{
                annotation_type: '中文分词',
                status: '',
                opera: ''
            }, {
                annotation_type: '词性标注',
                status: '',
                opera: ''
            }],
            doc: null,//准备发布的id
        }
    },
    created() {
        this.getAllDocs();
    },
    methods: {
        //获取所有文档
        getAllDocs() {
            getAllDocs().then(response => {
                this.docsData = response.data;//后台响应的数据，返回给前台的列表
            })
        },
        //文件上传
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleProgress(event, file, fileList) {
            postDocs(fileList).then((res) => {
                this.getAllDocs();
                this.$notify({
                    title: '成功',
                    message: '上传成功',
                    type: 'success',
                    duration: 2000
                })
            }, err => {
                this.getAllDocs();
            })
        },
        //表格方法
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //查看详情
        handleDetail(row) {
            this.docContent=row.content.replace(/\n/g,"<br/>");
            this.$nextTick(()=>{
            });
            this.docDetailVisible=true;
        },
        //发布
        handlePublish(row) {
            //保存当前选中的文档
            this.doc = row;
            let tasks = this.doc.tasks;
            this.$nextTick(() => {
                for (let i = 0; i < this.gridData.length; i++) {
                    this.$set(this.gridData[i], 'status', "未发布");
                    this.$set(this.gridData[i], 'opera', "发布");
                }
                if (tasks != null) {
                    for (let i = 0; i < this.gridData.length; i++) {
                        for (let j = 0; j < tasks.length; j++) {
                            if (this.gridData[i].annotation_type === tasks[j].annotation_type) {
                                this.$set(this.gridData[i], 'status', "已发布");
                                this.$set(this.gridData[i], 'opera', "撤销");
                            }
                        }
                    }
                }
            });
            //显示对话框
            this.dialogTableVisiblePublish = true;

        },
        //更改发布对话框中的状态
        changeStatus(row) {
            if (row.annotation_type == '中文分词') {
                if (row.opera == '发布') {//即本来未发布改为已发布，撤回
                    console.log("changStatus");
                    console.log(row.annotation_type);
                    console.log(this.doc.doc_id);
                    publishTask(row.annotation_type, this.doc.doc_id).then(res => {
                        if (res.data == true) {
                            this.$notify({
                                title: '成功',
                                message: '分词成功',
                                type: 'success',
                                duration: 2000
                            });
                            this.getAllDocs();
                            this.$set(this.gridData[0], 'status', '已发布')
                            this.$set(this.gridData[0], 'opera', '撤回')
                            // this.$router.push({path:"/annotationTask"});
                        }
                    })
                } else {//改为未发布，发布
                    console.log(this.doc.doc_id)
                    console.log(row.annotation_type)
                    console.log("stop")

                    recallPublish(this.doc.doc_id,row.annotation_type).then(res => {
                        console.log(res.data)
                        if(res.data){
                            this.getAllDocs();
                            this.$set(this.gridData[0], 'status', '未发布')
                            this.$set(this.gridData[0], 'opera', '发布')
                        }
                    }, err => {
                        console.log(err);
                        this.$notify({
                            title: '失败',
                            message: '撤回失败',
                            type: 'failure',
                            duration: 2000
                        });
                    });

                }

            } else if (row.annotation_type === '词性标注') {
                if (row.opera === '发布') {//同上
                    publishTask(row.annotation_type, this.doc.doc_id).then(res => {
                        this.getAllDocs();
                        if (res.data == true) {
                            this.$notify({
                                title: '成功',
                                message: '词性标注成功',
                                type: 'success',
                                duration: 2000
                            });
                            this.$set(this.gridData[1], 'status', '已发布')
                            this.$set(this.gridData[1], 'opera', '撤回')
                        }
                    }, err => {
                        console.log(err);
                        this.$notify({
                            title: '失败',
                            message: '未能成功进行词性标注',
                            type: 'failure',
                            duration: 2000
                        });
                    })
                } else {
                    recallPublish(this.doc.doc_id,row.annotation_type).then(res => {
                        console.log(res);
                        if (res.data){
                            this.getAllDocs();
                            this.$set(this.gridData[1], 'status', '未发布')
                            this.$set(this.gridData[1], 'opera', '发布')
                        }

                    }, err => {
                        console.log(err);
                        this.$notify({
                            title: '失败',
                            message: '撤回失败',
                            type: 'failure',
                            duration: 2000
                        });
                    });
                }
            }

        },
        //删除
        deleteDoc(row) {
            console.log(row);
            deleteDoc(row.doc_id).then(res => {
                this.getAllDocs();
            })
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {
                });
        },
    },
}
</script>

<style scoped>

</style>