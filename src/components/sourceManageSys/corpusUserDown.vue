<template>
<!--   下载页面-->
<div class="index"   style="background-image: linear-gradient(to bottom right, #2F4F4F,#D3D3D3, #5F9EA0);background-size:cover ">
    <el-container>
        <el-header style=" height:120px">
            <div class="exImg">
                <img class="imgClass" :src="formData.avatar" alt="">
                <div class="tx">
                    <el-autocomplete placeholder="请输入搜索内容"
                                     class="inline-input"
                                     el-autocomplete
                                     v-model="input5"
                                     :fetch-suggestions="queryS"
                                     @select="handClick">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-autocomplete>
                </div>
            </div>
        </el-header>
        <el-divider></el-divider>
        <div >
            <el-container>
                <el-main>
                    <div class="body">
                        <div class="title">
                            <div class="divcss52">图片资源</div>
                            <button class="btn_color">更多</button>
                        </div>
                        <div class="interbody">
                            <div v-for="(item,index) in this.pngData"v-if="index <5">
                                <el-button class="liList" type="text" @click="downEvent(item.downLoadFileName)">{{item.downLoadFileName}}</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="body">
                        <div class="title">
                            <button class="btn_color">更多</button>
                            <div class="divcss52">文档资源</div>
                        </div>
                        <div class="interbody">
                            <div v-for="(item,index) in this.docxData"v-if="index <5">
                                <el-button class="liList" type="text" @click="downEvent(item.downLoadFileName)">{{item.downLoadFileName}}</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="body">
                        <div class="title">
                            <div class="divcss52">音频资源</div>
                            <button class="btn_color">更多</button>
                        </div>
                        <div class="interbody">
                            <div v-for="(item,index) in this.musicData"v-if="index <5">
                                <el-button class="liList" type="text" @click="downEvent(item.downLoadFileName)">{{item.downLoadFileName}}</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="body">
                        <div class="title">
                            <div class="divcss52">其他资源</div>
                            <button class="btn_color">更多</button>
                        </div>
                        <div>
                            <div class="inbody" v-for="(item,index) in this.otherData"v-if="index <5">
                                <el-button class="liList" type="text" @click="downEvent(item.downLoadFileName)">{{item.downLoadFileName}}</el-button>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
        <div>
            <el-footer>
                <mode-foot></mode-foot>
            </el-footer>
        </div>

    </el-container>
    </div>
</template>

<script>
    import modeFoot from "../modeFirst/modeFoot";
    import {hub} from "../../api/soureManagerApi/hub";
    import {FindALLFile, FindOneTypeFilePIC,FindOneTypeFileMusic,FindOneTypeFileDOCX,FindOneTypeFileOTHER} from "../../api/soureManagerApi/corpusManageApi";
    export default {
        name: "corpusUserDown",
        data() {
            return {
                formData: {
                    avatar: require('@/assets/img/logo-mini.png'),

                },
                tableData:[],
                backurl:'https://img.ivsky.com/img/tupian/t/201607/01/34_1250_97508.png',
                Findrestaurants:[],
                pngData:[],
                musicData:[],
                docxData:[],
                otherData:[]
            }
        },
        props:{
            input5:null,
            to:''
        },
        beforeDestroy() {
            hub.$emit("input",this.input5)//给子组件传值
            //console.log("this.input 给子组件传值"+this.input5)
            hub.$emit("FindByNameList",this.Findrestaurants)

        },
        methods:{
            downEvent(downLoadFileName){
                this.$axios({
                    baseURL: 'http://localhost:8848/',
                    url: "File/download?fileName=",
                    method: 'post',
                    responseType: 'blob', // 服务器返回的数据类型
                    params: { // 其他参数
                        fileName: downLoadFileName
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
                    const fileName = downLoadFileName // 导出文件名
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
            findPIC(){
                FindOneTypeFilePIC().then(response=>{
                    this.pngData=response.data;
                    console.log("pngData"+this.pngData.length)
                })
            },
            findMusic(){
                FindOneTypeFileMusic().then(response=>{
                    this.musicData=response.data;
                    console.log("musicData"+this.musicData.length)
                })
            },
            findDOCX(){
                FindOneTypeFileDOCX().then(response=>{
                    this.docxData=response.data;
                    console.log("docxData"+this.docxData.length)
                })
            },
            findOTHER(){
                FindOneTypeFileOTHER().then(response=>{
                    this.musicData=response.data;
                    console.log("otherData"+this.otherData.length)
                })
            },
            handClick(){
                console.log("点击跳转11111")
                if (this.input5!=null){
                    hub.$emit("input",this.input5)//给子组件传值
                    //console.log("this.input 给子组件传值"+this.input5)
                    hub.$emit("FindByNameList",this.Findrestaurants)
                    this.$router.push("/corpusUserDownSearch/"+this.input5)
                    console.log("传值结束"+this.input5)
                }
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
                //     console.log("restaurants"+restaurants[i])
                // }
                let newArr = restaurants.map(val => {
                    let json = {};
                    json.value = val;
                    return json;
                });
                console.log(newArr)
                let results = queryString ? newArr.filter(this.createFilter_front(queryString)) : newArr
                cb(results)
                this.Findrestaurants=results
            },
            createFilter_front (queryString) {
                return (newArr) => {
                    return (newArr.value.indexOf(queryString) > -1)
                }
            },
        },
        components:{
            modeFoot
        },
        created:function () {
            this.findALLFile()
            this.findPIC()
            this.findMusic()
            this.findDOCX()
            this.findOTHER()
        }
    }
</script>

<style scoped>
    .inbody{

    }
    .btn_color{
        background-color:transparent;
        border-style:none;
        float: right;
        line-height:8px; height:8px;
        color:#ffffff;
    }
    .divcss52{
        line-height:8px; height:8px;
        float: left;
    }
    .body{
        /*background-image: radial-gradient(farthest-corner at 50% 50%, #c1c1d8, #000000);*/
        filter:alpha(Opacity=80);-moz-opacity:0.4;z-index:100;
        background: rgba(0,0,0,0.2);
        margin-left: 8%;
        width: 40%;
        height: 250px;
        margin-top: 2%;
        float: left;
        color:#ffffff;
            /*background: #c1c1d8;*/
    }
    .title{
        opacity: 0.5;
        background:#041c34;
        opacity: 1;
        padding: 18px 20px;
        box-sizing: border-box;
        font-size:14px
    }
    .bg{
        background-color: brown;
        margin-top: 30px;
        margin-left: 30px;
    }
    .imgClass{
        display: inline;
        float: left;
        height: 60px;
        width: 200px;

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
        margin-top: 1%;
        width: 500px;
        in-left: 5%;
    }
    a {color:#252525; text-decoration:none; font-family: "Helvetica Neue"}
    a:visited {text-decoration:none; font-family: "Helvetica Neue"}
    a:hover {color:#ba2636;text-decoration:underline;font-family: "Helvetica Neue"}
    a:active {color:#ba2636; font-family: "Helvetica Neue"}
    .el-autocomplete{
        width: 500px;
    }
    .text {
          font-size: 14px;
        text-align: left;
      }

    .item {
        height: 1px;
       background-color:rgba(0,0,0,0.2);
        width: 92%;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .index {
        filter:alpha(Opacity=85);
        -moz-opacity:0.85;
        opacity: 0.85;
    }
    .card{
        background: #aaccee;
        float: left;
        margin-left: 9%;
        /*background-color:rgba(0,0,0,0.2);*/
        border-radius: 0%;
        width: 500px;
        height: 250px;
        margin-top: 2%;
    }
    .bodycard{
        height: px;
    }
    .liList{
        color:#ffffff;
        float:left;
        margin-left: 5%;
        margin-left: 6%;
        text-align:left;
        line-height:28px;
        text-decoration:none;
        width: 100%;
        height: 30px;
        margin:5px;
    }
</style>