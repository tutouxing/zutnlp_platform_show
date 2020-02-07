<template>
  <div>
    <el-row style="margin-left: 50px">
      <el-col :span="6" style="margin-top: 40px">
        <el-input v-model="input" placeholder="请输入文档ID"></el-input>
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
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
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
            label="任务号"
            width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="文档名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="address"
            label="上传时间"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="操作"
            show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="handleDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2020-01-31 23:57
     */
    export default {
        name: "index",
        data() {
            return {
                input: "",
                fileList:
                    [{name: "aaa", url: "aaa"},{name:"vvv",url:"lll"}]
                ,
                docsData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                ],
                multipleSelection: [],
                dialogVisible: false,
            }
        },
        methods: {
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
            handleDetail(index, row) {
                console.log(index, row)
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            }
        },
    }
</script>

<style scoped>

</style>