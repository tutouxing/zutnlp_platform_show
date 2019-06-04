<template>
    <div>
        <div>
            <Phead></Phead>
        </div>
        <div  class="mainapp">
            <el-row>
            <el-col :span="16" >
                <div style="margin-left: 20px;margin-right:30px ">
                    <div>
                        <el-row>
                            <el-col :span="4" class="grid-content bg-purple-right" >
                                <span style="">新闻头条</span>
                            </el-col>
                            <el-col :span="20" class="grid-content bg-purple-light">
                                <span>习近平总书记来访</span>
                            </el-col>
                        </el-row>
                    </div>
                   <div class="maingr">
                       <el-row>
                           <el-col class="grid-content bg-purple-right1" :span="10">
                               <div class="grwapper">
                                   <div class="huti">
                                       <div class="hutititle">
                                           <h4>热门话题</h4>
                                       </div>
                                       <div class="hutibody" v-for="(n,index) in content2" :key="index">
                                           <ul class="bul">
                                               <li class="bli" v-on:click="skip(n)">{{n.title}}</li>
                                           </ul>
                                       </div>
                                       <div class="huti_boder"></div>
                                   </div>
                                   <div class="pinglun">
                                       <div class="pingtitle">
                                           <h4 class="ph4">精彩评论</h4>
                                       </div>
                                       <div class="pingbody" v-for="(n,index) in content1" :key="index">
                                           <div class="pingbotitle">
                                               <span v-on:click="skip(n)">{{n.title}}</span><br/>
                                           </div>
                                           <div class="pingboclick">
                                               <span>来源：</span><span class="pingboclick_title">{{n.title}}</span>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </el-col>
                           <el-col :span="14" class="grid-content bg-purple-light1">
                               <div class="rgwapper">
                                       <div class="rgwapper_title">
                                           <el-row>
                                               <el-col :span="18"><h3 class="rgwapper_title_h4">热点聚焦</h3></el-col>
                                               <el-col :span="6"><el-button type="text" style="float: right" @click="many()">更多</el-button></el-col>
                                           </el-row>
                                       </div>
                                       <div class="rgwapper_body">
                                           <div class="mode1" v-for="(n,index) in content3" :key="index">
                                               <img src=""/>
                                               <span v-on:click="skip(n)">{{n.title}}</span>
                                           </div>
                                       </div>
                               </div>
                           </el-col>
                       </el-row>
                   </div>
                    <div class="m_footer">
                        <div class="word">
                            <h3>图说新闻</h3>
                        </div>
                        <div class="word_picture">
                            <el-carousel :interval="4000" type="card" height="200px">
                                <el-carousel-item v-for="item in 6" :key="item">
                                    <h3>{{ item }}</h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="item in depictions" :key="item.id">
                            <image :src="item.idView" alt=""></image>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="wapper">
                    <div class="title">
                        <h3>大家都在搜</h3>
                    </div>
                    <div class="newscontent" >
                        <div class="mode1">
                            <img src=""/>
                            <span>图像内容图像内容图像内容图像内容图像内哦让那个图像内容图像</span>
                        </div>
                        <div class="libiao">
                            <ul class="model2" v-for="(n,index) in content1" :key="index">
                                    <li v-on:click="skip(n)">{{n.title}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row></div>
    </div>


</template>

<script>
    import Phead from '../index/phead'
    export default {
        name: "amain",
        components:{
            Phead
        },
        data() {
            return {
                activeName: 'second',
                items:[],
             depictions:[
                 { id:0, idView:'https://inews.gtimg.com/newsapp_bt/0/9132517236/1000'},
                 { id:1, idView:'https://img1.gtimg.com/rcdimg/20190528/07/1245425028_273x145.jpg'},
                 { id:2, idView:'https://inews.gtimg.com/newsapp_ls/0/9153716802_294195/0'},
                 { id:3, idView:'https://inews.gtimg.com/newsapp_bt/0/9132543707/1000'},
             ],
                list:[],//所有栏目列表
                content:[],
                content1:[],
                content2:[],
                content3:[],
            };
        },
        computed:{
           count:function () {
               return this.$store.state.channel;
           }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
             helloWord(){//初始化页面
                 this.list=this.count;
                 for (let i=0;i<this.list.length;i++){
                     if (this.$route.params.chName === this.list[i].chName) {
                         this.content=this.list[i].contents;
                         break;
                     }
                 }
                 this.content1=[];
                 for (let j=0;j<5;j++){
                     this.content1.push(this.content[j]);
                 }
                 this.content2=[];
                 for (let j=0;j<4;j++){
                     this.content2.push(this.content[j]);
                 }
                 this.content3=[];
                    for (let j=0;j<5;j++){
                        this.content3.push(this.content[j]);
                    }
            },
            skip(n){
                this.$router.push({name:'detailed1', params:{item:n}});
                this.$router.push({path:'/prostage/detailed'})
            },
            many(){
                this.$store.commit('SET_COMPONENTS_STATE',5);
                this.$router.push({name:'second',params:this.content});
            }
        },
        created(){
            this.helloWord();
        },
        watch: {
            '$route' (to, from) {
              for (let i=0;i<this.count.length;i++){
                  if (to.params.chName===this.count[i].chName) {
                      this.content=this.count[i].contents;
                      break;
                  }
              }
                this.content1=[];
                for (let j=0;j<5;j++){
                    this.content1.push(this.content[j]);
                }
                this.content2=[];
                for (let j=2;j<6;j++){
                    this.content2.push(this.content[j]);
                }
                this.content3=[];
                for (let j=0;j<5;j++){
                    this.content3.push(this.content[j]);
                }

            },
        },
        created(){
            this.helloWord();
        }

    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-light {
        background: #e5e9f2;
        text-align: left;
        font-weight: bolder;
        font-size: 40px;
        font-family: "Adobe Caslon Pro Bold";
        color: black;
    }
    .bg-purple-right{
        background-color: #FF4921
    }
    .bg-purple-right1{
       /* background-color: bisque;*/

    }
    .grid-content {
        border-radius: 4px;
        min-height: 58px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .wapper{
        width: 400px;
        /*border: 1px solid #ccc;*/
    }
    .wapper .title{
        color: #FFA195;
        text-align: left;
        border-bottom: 1px solid #99a9bf;
        padding-bottom: 5px;
        margin-bottom: 20px;
    }
    .newscontent .liebiao{
        margin-right: 20px;
    }
    .newscontent .mode1{
        background-color: #eee;
        overflow: auto;
        margin-bottom: 20px;
    }
    .newscontent .mode1 img{
        overflow: hidden;/*隐藏溢出图片内容*/
        transition-duration: 0.5s;
        width:150px;
        height:75px;
        /*background: green;*/
        float: left;
        margin-right:10px;
        float: left;
    }
    .newscontent .mode1 span{
        width:170px;
        text-align: left;
    }
    .newscontent .mode1 span:hover{
        color: red;
    }
    .newscontent .libiao ul{
        padding: 10px;
    }
    .newscontent .libiao ul li{
        color: darkslateblue;
        text-align: left;
        /*border-bottom: 1px solid #ccc;*/
    }
    .newscontent .libiao ul li:hover{
        color: red;
        transition-duration: 0.5s;
    }
    .mainapp {
        margin: 20px 30px;
    }
    .maingr{
        /*height:400px;*/
        /*background-color: #d3dce6;*/
    }
    .grwapper{
        border: 1px solid skyblue;
        padding-left: 10px;
        padding-right: 10px;
    }
    .hutititle{
        padding-top: 10px;
        text-align: left;
        color: #333333;
        margin-bottom: 10px;
    }
    .grwapper .huti .hutibody .bul{
        padding: 10px;
    }
    .grwapper .huti .hutibody .bul .bli{
        color: midnightblue;
        text-align: left;
    }
    .grwapper .huti .hutibody .bul .bli:hover{
        color:red;
        transition-duration: 0.5s;
    }
    .pingtitle .ph4{
       /* float: left;*/
        text-align: left;
        color: #333333;
        margin-bottom: 10px;
    }
     .pingbotitle{
         height: 30px;
         text-align: left;
         color: black;
         font-size: 15px;
         margin-bottom: 5px;
    }

     .pingbotitle:hover{
         color: red;
         transition-duration: 0.5s;
     }
     .pingboclick{
         text-align: left;
         color: #475669;
     }
    .pingboclick span{
        font-size: 13px;
    }
     .pingboclick_title:hover{
         color: red;
         transition-duration: 0.5s;
     }
    .pingbody{
        border-bottom: 1px dotted #ccc;
        margin-bottom: 10px;
    }

    .rgwapper_title{
        height: 35px;
        padding-top: 10px;
        text-align: left;
        color: #FF6D9E;
        margin-bottom: 10px;
        border-bottom: 1px solid #BCA9CC;
    }
    .rgwapper_title_h4{
       /* margin-bottom: 10px;*/
    }
    .rgwapper{
        padding-left: 20px;
    }
    .rgwapper_body .mode1{
        background-color: #eee;
        overflow: auto;
        margin-bottom: 17px;
    }
    .rgwapper_body .mode1 img{
        overflow: hidden;/*隐藏溢出图片内容*/
        transition-duration: 0.5s;
        width:150px;
        height:75px;
        /*background: green;*/
        margin-right:10px;
        float: left;
    }
    .rgwapper_body .mode1 span{
        width:170px;
        text-align: left;
        color: #333333;
    }
    .rgwapper_body .mode1 span:hover{
        color: red;
    }
    .rgwapper{
        margin-right: 10px;
    }
    .huti_boder{
        border: 1px solid #d3dce6;
        margin-bottom: 10px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .m_footer .word{
        border-bottom: 1px dashed black;
        margin-bottom: 20px;
    }
    .m_footer .word h3{
        color: orangered;
        text-align: left;
        font-family: "Adobe 仿宋 Std R";
        font-weight: inherit;
        margin-bottom: 10px;

    }
</style>