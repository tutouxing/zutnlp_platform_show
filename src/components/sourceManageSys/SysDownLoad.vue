<template>
<!--    后台资源管理页面-->
    <div>
        <el-button type="primary"  style="float:right"  @click="handleClick">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-dialog :visible.sync="dialogFormVisible"  :destroy-on-close=true  @upedTableData=handleUpData>
            <SysReourceUp  :tranToSon=this.tableData></SysReourceUp>
        </el-dialog>
        <el-button type="primary"  style="float:right;margin:1px"   @click="findALLFile">刷新<i class="el-icon-upload el-icon--right"></i></el-button>

        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="上传时间"
                    prop="releaseTime">
            </el-table-column>
            <el-table-column
                    label="Date"
                    prop="downLoadFileName">
            </el-table-column>
            <el-table-column
                    label="文件描述"
                    prop="description">
            </el-table-column>
            <el-table-column
                    label="文件类型"
                    prop="fileTyp">
            </el-table-column>
            <el-table-column
                    align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit($event,scope.row)">下载</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete($event,scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import SysReourceUp from './SysReourceUp.vue'
    import {FindALLFile,DownLoadFile,DeleteFile} from '../../api/soureManagerApi/corpusManageApi.js'
    export default {
        data() {
            return {
                //dialogTableVisible: false,
                dialogFormVisible: false,
                tableData:[],
                search: '',
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleClick(){
                this.dialogFormVisible=true
                FindALLFile().then(response=>{
                    this.tableData=response.data;
                    console.log("上传以后的"+this.tableData.length)
                })
            },
            handlePreview(file) {
                console.log(file);
            },
            handleUpData(data) {
                this.tableData=data;
            },
            findALLFile(){
                FindALLFile().then(response=>{
                    this.tableData=response.data;
                    console.log("wwaaaa"+this.tableData.length)
                })
            },
            handleEdit(event,row){
                console.log(row.downLoadFileName)
                this.$axios({
                    baseURL: 'http://localhost:8848/',
                    url: "File/download?fileName=",
                    method: 'post',
                    responseType: 'blob', // 服务器返回的数据类型
                    params: { // 其他参数
                        fileName: row.downLoadFileName
                    },
                    data: {}
                }).then((res) => {
                    // 关闭loading
                    this.loading = false
                    console.log(res)
                    // 此处有个坑。这里用content保存文件流，最初是content=res，但下载的test.xls里的内容如下图1，
                    // 检查了下才发现，后端对文件流做了一层封装，所以将content指向res.data即可
                    // 另外，流的转储属于浅拷贝，所以此处的content转储仅仅是便于理解，并没有实际作用=_=
                    const content = res.data
                    const blob = new Blob([content]) // 构造一个blob对象来处理数据
                    const fileName = row.downLoadFileName // 导出文件名
                    // 对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
                    // IE10以上支持blob但是依然不支持download
                    if ('download' in document.createElement('a')) { // 支持a标签download的浏览器
                        const link = document.createElement('a') // 创建a标签
                        link.download = fileName // a标签添加属性
                        link.style.display = 'none'
                        link.href = URL.createObjectURL(blob)
                        document.body.appendChild(link)
                        link.click() // 执行下载
                        URL.revokeObjectURL(link.href) // 释放url
                        document.body.removeChild(link) // 释放标签
                    } else { // 其他浏览器
                        navigator.msSaveBlob(blob, fileName)
                    }
                }).catch((error) => {
                    console.log(error)
                    // 关闭loading
                    this.loading = false
                })
            },
            handleDelete(event,row){
                console.log("4545454545"+row.downLoadFileName)
                DeleteFile(row.downLoadFileName);
                FindALLFile().then(response=>{
                    this.tableData=response.data;
                })
                console.log("删除后的重新获取"+this.tableData.length)
            }
        },
        components:{
            SysReourceUp
        },
        created:function () {
            this.findALLFile()
        },
    }
</script>
<style >
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 480px;
    }
</style>
