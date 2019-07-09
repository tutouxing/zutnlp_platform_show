<template>
        <div class="" v-if="this.$store.state.components=='1'">
            <Header></Header>
            <el-row>
                <el-col :span="12">
                    <div class="wrap">
                    <div class="content">
                        <ul v-for="(n,index) in vnews1" :key="index" class="text item">
                            <li>
                                <div class="left"><img src="" alt=""></div>
                                <div class="right">
                                    <div class="right_top">
                                        <h3 class="lian" v-on:click="skip(n)" >{{n.title}}</h3>
                                    </div>
                                    <div class="right_bottom">
                                        <div class="right_bottom_left">
                                            <span class="lian" v-on:click="skip(n)" >{{n.title}}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                </el-col>
                <el-col :span="12">
                    <div class="wrap">
                        <div class="content">
                            <ul v-for="(n,index) in vnews1" :key="index" class="text item">
                                <li>
                                    <div class="left"><img src="" alt=""></div>
                                    <div class="right">
                                        <div class="right_top">
                                            <h3 class="lian" v-on:click="skip(n)"  >{{n.title}}</h3>
                                        </div>
                                        <div class="right_bottom">
                                            <div class="right_bottom_left">
                                                <span class="lian1" v-on:click="skip(n)" >{{n.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="" v-else-if="this.$store.state.components=='2'" >
            <Header></Header>
            <el-row>
                <el-col :span="12">
                    <div class="wrap">
                        <div class="content">
                            <ul v-for="(n,index) in vnews2" :key="index" class="text item">
                                <li>
                                    <div class="left"><img src="" alt=""></div>
                                    <div class="right">
                                        <div class="right_top">
                                            <h3 class="lian" v-on:click="skip(n)" >{{n.title}}</h3>
                                        </div>
                                        <div class="right_bottom">
                                            <div class="right_bottom_left">
                                                <span class="lian" v-on:click="skip(n)" >{{n.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="wrap">
                        <div class="content">
                            <ul v-for="(n,index) in vnews2" :key="index" class="text item">
                                <li>
                                    <div class="left"><img src="" alt=""></div>
                                    <div class="right">
                                        <div class="right_top">
                                            <h3 class="lian" v-on:click="skip(n)"  >{{n.title}}</h3>
                                        </div>
                                        <div class="right_bottom">
                                            <div class="right_bottom_left">
                                                <span class="lian" v-on:click="skip(n)" >{{n.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="" v-else-if="this.$store.state.components==='3'">
            <Header></Header>
            <el-row>
                <el-col :span="12">
                    <div class="wrap">
                        <div class="content">
                            <ul v-for="(n,index) in vnews3" :key="index" class="text item">
                                <li>
                                    <div class="left"><img src="" alt=""></div>
                                    <div class="right">
                                        <div class="right_top">
                                            <h3 class="lian" v-on:click="skip(n)" >{{n.title}}</h3>
                                        </div>
                                        <div class="right_bottom">
                                            <div class="right_bottom_left">
                                                <span class="lian" v-on:click="skip(n)" >{{n.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="wrap">
                        <div class="content">
                            <ul v-for="(n,index) in vnews3" :key="index" class="text item">
                                <li>
                                    <div class="left"><img src="" alt=""></div>
                                    <div class="right">
                                        <div class="right_top">
                                            <h3 class="lian" v-on:click="skip(n)"  >{{n.title}}</h3>
                                        </div>
                                        <div class="right_bottom">
                                            <div class="right_bottom_left">
                                                <span class="lian1" v-on:click="skip(n)" >{{n.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="" v-else-if="this.$store.state.components==='4'">
            <Header></Header>
            <el-row>
                <el-col :span="12">
                    <div class="wrap">
                        <div class="content">
                            <ul v-for="(n,index) in vnews4" :key="index" class="text item">
                                <li>
                                    <div class="left"><img src="" alt=""></div>
                                    <div class="right">
                                        <div class="right_top">
                                            <h3 class="lian" v-on:click="skip(n)" >{{n.title}}</h3>
                                        </div>
                                        <div class="right_bottom">
                                            <div class="right_bottom_left">
                                                <span class="lian1" v-on:click="skip(n)" >{{n.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="wrap">
                        <div class="content">
                            <ul v-for="(n,index) in vnews4" :key="index" class="text item">
                                <li>
                                    <div class="left"><img src="" alt=""></div>
                                    <div class="right">
                                        <div class="right_top">
                                            <h3 class="lian" v-on:click="skip(n)"  >{{n.title}}</h3>
                                        </div>
                                        <div class="right_bottom">
                                            <div class="right_bottom_left">
                                                <span class="lian1" v-on:click="skip(n)" >{{n.title}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    <div v-else="this.$store.state.components==='5'">
        <Header></Header>
        <div class="H_body">
            <el-table :data="vnews"  style="width: 100% ;" :row-style="style">
                <el-table-column prop="date" label="" width="350" >
                    <template scope="scope" ><img :src="scope.row.pictures[0].url"/></template>
                </el-table-column>
                <el-table-column prop="name" label="" width="450">
                    <template scope="scope" ><span span class="lian1" v-on:click="skip(scope.row.id)">{{scope.row.title}}</span></template>
                </el-table-column>
            </el-table>
        </div>
      <!--  <el-row>
            <el-col :span="12">
                <div class="wrap">
                    <div class="content">
                        <ul v-for="(n,index) in vnews" :key="index" class="text item">
                            <li>
                                <div class="left"><img src="" alt=""></div>
                                <div class="right">
                                    <div class="right_top">
                                        <h3 class="lian" v-on:click="skip(n)" >{{n.title}}</h3>
                                    </div>
                                    <div class="right_bottom">
                                        <div class="right_bottom_left">
                                            <span class="lian1" v-on:click="skip(n)" >{{n.title}}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="wrap">
                    <div class="content">
                        <ul v-for="(n,index) in vnews" :key="index" class="text item">
                            <li>
                                <div class="left"><img src="" alt=""></div>
                                <div class="right">
                                    <div class="right_top">
                                        <h3 class="lian" v-on:click="skip(n)"  >{{n.title}}</h3>
                                    </div>
                                    <div class="right_bottom">
                                        <div class="right_bottom_left">
                                            <span class="lian1" v-on:click="skip(n)" >{{n.title}}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>-->
    </div>
</template>

<script>
    import Header from '../../index/phead'
    import {PictureById} from '../../../../api/picture/pt'
    import {getContentById} from '../../../../api/content/index'
    export default {
        name: "second",
        data(){
            return{
                vnews1:[],
                vnews2:[],
                vnews3:[],
                vnews4:[],
                channels:[],
                vnews:[],
                content:'',//得到内容
                style:{
                    height: '100px',
                   padding:'0',
                },
              /*  listLoading:'true',//列表是否加载
                listQuery: {//列表的限制
                    page: 1,
                    limit: 5,
                },
                total:null,//一共多少页*/
            }
        },
        components:{
            Header
        },
        created(){
            this.slice1();
            /*this.datachuli();*/
        },
        methods:{
            slice1(){
                this.channels = this.$store.state.channel;
                /*this.vnews1 = this.channels[0].contents;
                this.vnews2 =this.channels[1].contents;
                this.vnews3 =this.channels[2].contents;
                this.vnews4 =this.channels[3].contents;*/
                this.vnews=this.$route.params;
            },
            skip(n){
                getContentById(n).then((response)=>{
                    this.content=response.data;
                    this.$router.push({name:'detailed1', params:{item:this.content}});
                    this.$router.push({path:'/prostage/detailed'})
                })

            },
            datachuli(){
                console.log("打印第一个内容返回的图像东西分析")
                for(let i=0;i<this.vnews1.length;i++){
                    PictureById(this.vnews1[i].id).then((response)=>{
                       console.log(response);
                    })
                }
            },
        },

    }
</script>

<style type="text/css" >
    .el-table__header th, .el-table__header tr{
        line-height: 10px;
    }
    .H_body{
        margin-left: 200px;
    }
    .text {
        font-size: 14px;
    }
    .item {
        padding: 18px ;
    }

    .lian{
        text-align: left;
    }
    .lian1{
        text-align: left;
    }
    .lian:hover{
        color: red;
    }

    *{
        margin: 0;
        padding:0;
    }
    .wrap{
        width: 600px;
        margin: 0px auto;
    }
    .menu{
        width: 600px;
        height: 30px;
        background: cornflowerblue;
        position: sticky;
        top:0px;
    }
    .menu ul li{
        float: left;
        list-style-type: none;
        padding: 0 40px;
    }
    .content ul li img:hover{
        transform: scale(1.2);/*当鼠标移动到图片上时实现放大功能*/
    }
    .content ul li{
        height: 100px;
        overflow: hidden;
        border-bottom: 1px solid lavender;
        background: white;
        list-style-type: none;
        transition-duration: 0.5s;
        margin: 10px 10px 5px 0;

    }
    .content ul li:hover{
          background-color: lavender;
          transition-duration: 0.5s;
    }
    .content .left{
        overflow: hidden;/*隐藏溢出图片内容*/
        transition-duration: 0.5s;
        width: 140px;
        height:80px;
        /*background: green;*/
        float: left;
        margin-right:20px;
    }
    .content .right{
        width:400px ;
        float: left;
        /*background: pink;*/
    }
    .right_top{
        height:60px;
    }
    .right_bottom{
        margin_top:50px;
    }
    .right_bottom_left span{
        color: darkgray;
        font-size: 12px;
    }
</style>