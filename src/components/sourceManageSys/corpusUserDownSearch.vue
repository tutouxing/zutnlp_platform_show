<template>
<!--    查询的结果页面-->
    <div class="index"   style="background-image: linear-gradient(to bottom right, #2F4F4F,#D3D3D3, #5F9EA0);background-size:cover ">
    <el-container >
            <el-header style=" height:120px">
                <div class="exImg">
                    <img class="imgClass" :src="formData.avatar" alt="">
                    <div class="tx">
                        <el-autocomplete placeholder="请输入搜索内容"
                                         el-autocomplete
                                         v-model="this.input5"
                                         :fetch-suggestions="queryS"
                                         @select="handClick">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-autocomplete>
                    </div>
                </div>
            </el-header>
        <el-divider></el-divider>
                    <div style="text-align:center;margin-left:8%">
                        <el-main>
                            <el-table
                                    :data="tableData"
                                    style="width: 100%">
                                <el-table-column
                                        label="上传时间"
                                        prop="releaseTime"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        label="文件名称"
                                        prop="downLoadFileName"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        label="文件描述"
                                        prop="description"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        label="文件类型"
                                        prop="fileTyp"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        align="right"
                                        label="操作"
                                        width="180">
                                    <template slot-scope="scope">
                                        <el-button
                                                size="mini"
                                                @click="handleEdit($event,scope.row)">下载</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-main>
                    </div>
            <el-footer style="margin-top: 200px">
                <mode-foot></mode-foot>
            </el-footer>
    </el-container>
    </div>
</template>

<script>
    import {FindALLFile,FindByInput,FindOneTypeFile} from "../../api/soureManagerApi/corpusManageApi";
    import {hub} from "../../api/soureManagerApi/hub";
    import modeFoot from "../modeFirst/modeFoot";
    export default {
        name: "corpusUserDownSearch",
        data() {
            return {
                formData: {
                    avatar: require('@/assets/img/logo-mini.png'),

                },
                input5:null,
                tableData:[],
                FindByNameListSon:[],
            }
        },
        props:{
            input:''
        },
        // beforeDestroy () {
        //     hub.$off('input', this.input5)
        // },
        created(){
            let that = this;
            console.log("开始了1")
            hub.$on('input',(data)=> {
                console.log("新created"+data)
                that.input5=data
                console.log("新created111111"+that.input5)
                // if (input!==undefined&&input!==null&&input!==''){
                //     this.input5=input
                //     console.log("input5赋值了+++++++++++++++"+this.input5)
                // }
                this.findByInput(this.input5)
                console.log("tableData++++++++++"+this.tableData)
            })
            console.log("在watch的return以后ated"+this.input5)

        },
        watch:{
            inputResult(curVal,oldVal){
                console.log(curVal,oldVal);
                console.log("watch.input5"+curVal)

            }
        },
        beforeDestroy () {
            hub.$off('input', this.input5)
        },
        components:{
            modeFoot
        },
        methods:{
            findByInput(input){
                let self = this;
                FindByInput(input).then(response=>{
                    var tran=JSON.stringify(response.data)
                    self.tableData=JSON.parse(tran)
                    // self.FindByNameListSon=response.data;
                    console.log(self.tableData)
                })
            },
            handleEdit(event,row){
                //console.log(row.downLoadFileName)
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
            handClick(){
                console.log("点击跳转")
                this.$router.push("/corpusUserDownSearch/"+this.input5)
            },
            findALLFile(){
                FindALLFile().then(response=>{
                    this.tableData=response.data;
                    console.log("wwaaaa"+this.tableData.length)
                })
            },
            queryS(queryString,cb){
                var input5 = this.input5;
                var AllContList= this.tableData
                for (i = 0; i < AllContList.length; i++){
                    //console.log("这是打印的AllContList"+AllContList[i].downLoadFileName)
                }
                var i
                var restaurants=[]
                for (i = 0; i < AllContList.length; i++) {
                    //console.log(queryString)
                    if (AllContList[i].downLoadFileName.includes(queryString)==true) {
                        restaurants.push(AllContList[i].downLoadFileName)
                    }
                }
                // for (i = 0; i < restaurants.length; i++){
                //     //console.log("restaurants"+restaurants[i])
                // }
                let newArr = restaurants.map(val => {
                    let json = {};
                    json.value = val;
                    return json;
                });
                let results = queryString ? newArr.filter(this.createFilter_front(queryString)) : newArr
                cb(results)
            },
            createFilter_front (queryString) {
                return (newArr) => {
                    return (newArr.value.indexOf(queryString) > -1)
                }
            }

        },
    }
</script>

<style scoped>
    .index {
        filter:alpha(Opacity=85);
        -moz-opacity:0.85;
        opacity: 0.85;
        height: 800px;
    }
    .bg{
        background-color: brown;
        margin-top: 100px;
    }
    .imgClass{
        display: inline;
        float: left;
        height: 60px;
        width: 150px;

    }
    .exImg{
        width:100%;
        height:50px;
        line-height:50px;
        border: 1px ;
        margin-left: 15%;
        margin-top: 30px;
        font-size:20px;

    }
    .tx{
        font-family: "Helvetica Neue";
        float:left;
        margin-left: 10%;
        width: 500px;

    }
    a {color:#252525; text-decoration:none; font-family: "Helvetica Neue"}
    a:visited {text-decoration:none; font-family: "Helvetica Neue"}
    a:hover {color:#ba2636;text-decoration:underline;font-family: "Helvetica Neue"}
    a:active {color:#ba2636; font-family: "Helvetica Neue"}
    .el-autocomplete{
        width: 500px;
    }
</style>