<template>
    <div>
        <Ahead></Ahead>
        <div class="wapper">
            <el-row>
                <el-col :span="16">
                    <div class="" style="margin-right: 40px">
                        <el-row>
                            <el-col :span="14">
                                <el-carousel indicator-position="outside">
                                    <el-carousel-item v-for="(n,item) in picture" :key="item">
                                      <div @click="picSkip(n)"><img :src="n.url" /></div>
                                    </el-carousel-item>
                                </el-carousel>
                            </el-col >
                            <el-col :span="10">
                                <div class="pwapper">
                                    <div v-for="(n,index) in text" :key="index">
                                        <div class="pwapper_title">
                                            <h3 @click="skip(n)">{{n.title}}</h3>
                                        </div>
                                        <div class="pwapper_main" @click="skip(n)">{{n.text}}</div>
                                        <div class="pwapper_foot"><span>点击量：</span>{{n.click_count}}</div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="foot">
                        <div class="foot_head">
                            <h3 style="color: #eb85a3">热点聚焦</h3>
                        </div>
                        <div class="foot_span" v-for="(n,index) in text" :key="index">
                            <div class="foot_span_src">
                                <img :src="n.pictures.url"/>
                            </div>
                            <div class="foot_span_src_h">
                                <div class="foot_span_head">
                                    <h4 @click="skip(n)">{{n.title}}</h4>
                                </div>
                                <div class="foot_span_foot">
                                    <span>点击量：</span>{{n.click_count}}
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="">
                        <div class="head">
                            <div class="head_title">
                                <h3>大家都在搜</h3>
                            </div>
                            <div class="head_body">
                                <el-row>
                                    <el-col :span="8">
                                        <div v-for="(n,index) in Item11" :key="index"  >
                                            <el-button type="info" style="width: 100px;margin-bottom: 5px;color: #a4a7e6" >{{n}}</el-button>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div v-for="(n,index) in Item22" :key="index">
                                            <el-button type="info" style="width: 100px;margin-bottom: 5px" >{{n}}</el-button>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div v-for="(n,index) in Item33" :key="index">
                                            <el-button type="info" style="width: 100px;margin-bottom: 5px" >{{n}}</el-button>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                        <div class="body">
                            <div class="body_title" >
                                <h3>热门话题</h3>
                            </div>
                            <div class="body1">
                                <div class="rgwapper_body">
                                    <div class="mode1" v-for="(n,index) in content3" :key="index">
                                        <img :src="n.pictures[0].url"/>
                                        <span v-on:click="skip(n)">{{n.title}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="foot_foot">
                            <div class="foot_main">
                                <div class="foot_title">
                                    <div class="foot_title_feedback"><span >最新留言     </span><i class="el-icon-edit-outline" style="color: red"></i></div>
                                </div>
                                <div class="foot_body">
                                    <div class="foot_body_title"></div>
                                    <div class="foot_body_content"></div>
                                </div>
                                <div class="c_button">
                                    <el-button @click="feedback">我要留言....</el-button>
                                </div>
                            </div>

                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Ahead from '../index/phead'
    import {PicturePage} from '../../../api/picture/pt'
    export default {
        name: "aindex",
        components:{
            Ahead
        },
        data(){
            return{
                picture:[],
                Item:[],
                content3:[
                ],
                text:[
                ],
                list:[],
                list1:[],
                list2:[],
                list3:[],
                Item11:[],
                Item2:[],
                Item22:[],
                Item3:[],
                Item33:[]
            }

        },
       methods:{
            getPicture(){//得到图像列表
                PicturePage().then((response)=>{
                    for(let i=0;i<5;i++){
                        this.picture.push(response.data.content[i]);
                    };
                })
            },
            getChannel(){
                this.list=this.$store.state.channel;//得到数据列表
                this.list1=this.list[0].contents;
                this.list2=this.list[1].contents;
                this.list3=this.list[2].contents;
                for (let i=0;i<this.list1.length;i++){
                    this.Item.push(this.list1[i].title);
                }
                for (let j=0;j<5;j++){
                    this.Item11.push(this.Item[j].substr(0,5));
                }
                for (let a=0;a<this.list2.length;a++) {
                    this.Item2.push(this.list2[a].title);
                }
                for (let b=0;b<5;b++){
                    this.Item22.push(this.Item2[b].substr(0,5))
                }
                for (let d=0;d<this.list3.length;d++){
                    this.Item3.push(this.list3[d].title);
                }
                for (let m=0;m<5;m++){
                    this.Item33.push(this.Item3[m].substr(0,5))
                }
                this.getContent();
                this.getText();
            },
           skipButton(n){
           },
           getContent(){
                for(let i=0;i<4;i++){
                    this.content3.push(this.list1[i]);
                }
           },
           getText(){
                for(let j=0;j<3;j++){
                    this.text.push(this.list2[j]);
                }
                console.log('得到text的东西');
                console.log(this.text);

           },
           skip(n){
               this.$router.push({name:'detailed1', params:{item:n}});
               this.$router.push({path:'/prostage/detailed'})
           },
           picSkip(n){
                this.$router.push({name:'picDetailed',params:{item:n}});
                this.$router.push({path:'/prostage/picDetailed'});
           },
           feedback(){//留言
                this.$router.push('/prostage/comments');
           }
       },
        created(){
            this.getPicture();
            this.getChannel();
        }
    }
</script>

<style scoped>
    .bg-purple-light {
       /* background: #e5e9f2;*/
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
       /* background-color: #f9fafc;*/
    }
    .wapper{
        margin-top: 30px;
        margin-right: 50px;
       margin-left: 50px;
    }
    .head_title{
        border-bottom: 1px solid blue;
        margin-bottom: 10px;
    }
    .head_title h3{
        padding-top: 10px;
        color: orange;
        text-align: left;
        margin-bottom: 10px;
    }
    .body_title{
        border-bottom: 1px solid black;
        margin-bottom: 10px;
    }
    .body_title h3{
        padding-top: 10px;
        color: red;
        text-align: left;
        margin-bottom: 10px;
    }
    .rgwapper_body .mode1{
        overflow: auto;
        border-bottom: 1px dotted #99a9bf;
    }
    .rgwapper_body .mode1:hover{
        background-color: #eee;
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
    .pwapper{
        text-align: left;
        padding-left: 20px;
        margin-bottom: 10px;
    }
    .pwapper_title{
        margin-bottom: 5px;
    }
    .pwapper_title:hover{
       color: red;
    }
    .pwapper_main{
        margin-bottom: 5px;
        font-size: 13px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;      /* 可以显示的行数，超出部分用...表示*/
        -webkit-box-orient: vertical;
    }
    .pwapper_main:hover{
        color: red;
    }
    .pwapper_foot{
        font-size: small;
        margin-bottom: 10px;
        color: #99a9bf;
    }
    .foot{
        margin-right: 50px;
        height: 300px;
        text-align: left;
    }
    .foot_head{
        text-align: left;
        color: red;
        border-bottom: 1px solid blueviolet;
    }
    .foot_head h3{
        margin-bottom: 10px;
    }
    .foot_span{
        padding-top: 20px;
        padding-bottom: 10px;
    }
    .foot_span:hover{
        background-color: #dae4ee;
    }
    .foot_span_head{
        margin-bottom: 50px;
    }
    .foot_span_head:hover{
        color: red;

    }
    .foot_span_foot{

        font-size: smaller;
        font-style: inherit;
    }
    .foot_span_src {
        padding-left: 20px;
        width: 200px;
        height: 100px;
        overflow: hidden;
        float: left;
        transition: all 0.5s;
    }
    .foot_span_src:hover{
        transform: scale(1.5);
    }
    .foot_span_src_h{
      width:100%;
    }
    .foot_foot{
        margin-top: 20px;
        border:  1px solid #d3dce6;
    }
    .foot_main{
        padding: 15px;
    }
    .foot_title{
        margin-bottom: 20px;
    }
    .foot_title_feedback{
        text-align: left;
        font-size: 15px;

    }
</style>