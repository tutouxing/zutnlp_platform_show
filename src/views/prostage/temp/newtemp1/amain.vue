<template>
    <div class="wapper">
        <el-row>
            <el-col :span="12">
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[0]}}</el-button>
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many()">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews1" :key="index" >
                            <ul class="title">
                                <li class="lian" v-on:click="skip(n)">{{n.title}}</li>
                            </ul>
                        </div>
                    </el-card>
                </div>
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[1]}}</el-button>
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many1()">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews2" :key="index" >
                            <ul class="title">
                                <li class="lian" v-on:click="skip(n)">{{n.title}}</li>
                            </ul>
                        </div>
                    </el-card>
                </div>
            </el-col >
            <el-col :span="12">
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[2]}}</el-button>
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many2()">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews3" :key="index" >
                            <ul class="title">
                                <li class="lian" v-on:click="skip(n)">{{n.title}}</li>
                            </ul>
                        </div>
                    </el-card>
                </div>
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[3]}}</el-button>
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many3()">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews4" :key="index" >
                            <ul class="title">
                                <li class="lian" v-on:click="skip(n)">{{n.title}}</li>
                            </ul>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "amain",
        data(){
            return{
                vnews1:[],
                vnews2:[],
                vnews3:[],
                vnews4:[],
                label1:[],
                label:'新闻',
                channels:[],
                test:{
                    name:'hello',
                },
            }

        },
        created(){
            this.getchannel();
            this.slice();
        },
        methods:{
            slice(){
                let i;
                for( i = 0 ; i < 3; i++){
                    this.vnews1.push(this.channels[0].contents[i]);
                }
                for( i = 0 ; i < 3 ; i++){
                    this.vnews2.push(this.channels[1].contents[i]);
                }
                for( i = 0 ; i < 3 ; i++){
                    this.vnews3.push(this.channels[2].contents[i]);
                }
                for( i = 0 ; i < 3 ; i++){
                    this.vnews4.push(this.channels[3].contents[i]);
                }
            },
            getchannel(){
                console.log(this.$store.state.channel);
                this.channels = this.$store.state.channel;
                let i;
                for( i = 0 ; i < 6 ; i++){
                    console.log(this.channels[i].chName);
                    this.label1.push(this.channels[i].chName);
                }
            },
            many(){
                this.$store.commit("SET_COMPONENTS_STATE",1);
                this.$router.push('/prostage/many');
            },
            many1(){
                this.$store.commit('SET_COMPONENTS_STATE',2);
                this.$router.push('/prostage/many');
            },
            many2(){
                this.$store.commit('SET_COMPONENTS_STATE',3);
                this.$router.push('/prostage/many');
            },
            many3(){
                this.$store.commit('SET_COMPONENTS_STATE',4);
                this.$router.push('/prostage/many');
            },
            skip(n){//跳转到详情页
                this.$router.push({name:'detailed1', params:{item:n}});
                this.$router.push({path:'/prostage/detailed'})
            },

        },


    }
</script>

<style >
   /* .wapper{
        background-image: url("../../../../assets/demo1/bg1.png");
        height: 600px;
    }*/
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: red;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    .box-card {
        width: 600px;
        height: 320px;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .clearfix:before,after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .clearfix{
        height: 20px;
    }
    .lian{
        text-align: left;
    }
    .lian:hover{
        color: red;
    }
    .title{
        height: 30px;
    }
    .dianji{

    }
    *{
        margin: 0;
        padding:0;
    }
    .wrap{
        /*width: 600px;
        margin: 0px auto;*/

    }
 /*   .menu ul li{
        float: left;
        list-style-type: none;
        padding: 0 40px;
    }*/
    .content ul li img:hover{
        transform: scale(1.2);/*当鼠标移动到图片上时实现放大功能*/
    }
    .content ul li{
       /* height: 100px;*/
        overflow: hidden;
        border-bottom: 1px solid lavender;
        background: white;
        list-style-type: none;
        transition-duration: 0.5s;
        margin: 0px 0px 0px 0;

    }
    .content ul li:hover{
        background-color: lavender;
        transition-duration: 0.5s;
    }
    .content .left{
        overflow: hidden;/*隐藏溢出图片内容*/
        transition-duration: 0.5s;
        width: 140px;
        height:60px;
        /*background: green;*/
        float: left;
        margin-right:20px;
    }
    .content .right{
       /* width:400px ;*/
       /* float: left;*/
        /*background: pink;*/
    }

/*    .right_bottom{
        margin_top:50px;
    }
    .right_bottom_left span{
        color: darkgray;
        font-size: 12px;
    }*/

</style>