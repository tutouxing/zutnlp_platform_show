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
                                    <el-carousel-item v-for="item in 4" :key="item">
                                        <h3>{{ item }}</h3>
                                    </el-carousel-item>
                                </el-carousel>
                            </el-col >
                            <el-col :span="10">
                                <div class="pwapper">
                                    <div v-for="(n,index) in text" :key="index">
                                        <div class="pwapper_title">
                                            <h3>{{n.title}}</h3>
                                        </div>
                                        <div class="pwapper_main">{{n.text}}</div>
                                        <div class="pwapper_foot"><span>点击量：</span>{{n.click}}</div>
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
                                <img src=""/>
                            </div>
                            <div class="foot_span_src_h">
                                <div class="foot_span_head">
                                    <h4>{{n.text}}</h4>
                                </div>
                                <div class="foot_span_foot">
                                    <span>点击量：</span>{{n.click}}
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
                                        <div v-for="(n,index) in Item" :key="index"  >
                                            <el-button type="info" style="width: 100px;margin-bottom: 5px;color: #a4a7e6" >{{n.title}}</el-button>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div v-for="(n,index) in Item" :key="index">
                                            <el-button type="info" style="width: 100px;margin-bottom: 5px" >{{n.title}}</el-button>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div v-for="(n,index) in Item" :key="index">
                                            <el-button type="info" style="width: 100px;margin-bottom: 5px" >{{n.title}}</el-button>
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
                                        <img src=""/>
                                        <span v-on:click="skip(n)">{{n.title}}</span>
                                    </div>
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
    export default {
        name: "aindex",
        components:{
            Ahead
        },
        data(){
            return{
                Item:[
                    { title:'辛西娅嘻嘻'},
                    {title:'辛西娅嘻嘻'},
                    {title:'辛西娅嘻嘻'},
                    {title:'辛西娅嘻嘻'},
                ],
                content3:[
                    { title:'辛西娅嘻嘻'},
                    {title:'辛西娅嘻嘻'},
                    {title:'辛西娅嘻嘻'},
                    {title:'辛西娅嘻嘻'},
                ],
                text:[
                    { title:'呵呵呵呵',
                      text:'你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀',
                      click:12},
                    {title:'呵呵呵呵', text:'你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀',
                        click:12},
                    {title:'呵呵呵呵',
                        text:'你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀',
                        click:12},
                ]
            }
        },
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        /*background: #99a9bf;*/
    }
    .bg-purple {
      /*  background: #d3dce6;*/
    }
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
</style>