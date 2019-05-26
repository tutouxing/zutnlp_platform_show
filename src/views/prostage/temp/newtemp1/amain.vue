<template>
    <!--<div>
        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple"><span>新闻头条</span></div>
            </el-col>
            <el-col :span="20">
                <div class=" grid-content bg-purple-light"><span>头条内容</span></div>
            </el-col>
        </el-row>
    </div>-->
    <div>
        <el-row>
            <el-col :span="12">
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <!--<h4 style="float:left; padding: 3px 0;">{{this.label1[0]}}</h4>-->
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[0]}}</el-button>
                            <!--<span >{{this.label1[0]}}</span>-->
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many()">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews1" :key="index" class="title">
                                <a target="_blank" class="lian" v-on:click="skip(n)">{{n.title}}</a>
                                <span class="dianji">点击量：{{n.click_count}}</span>
                        </div>
                    </el-card>
                </div>

                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[1]}}</el-button>
                            <!--<span>{{this.label1[1]}}</span>-->
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many1">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews2"  :key="index" style="height: 30px">
                            <a v-on:click="skip(n)" class="lian" >{{n.title}}</a>
                        </div>
                    </el-card>
                </div>
            </el-col >
            <el-col :span="12">
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[2]}}</el-button>
                            <!--<span>{{this.label1[2]}}</span>-->
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many2()">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews3" :key="index" style="height: 30px">
                            <a target="_blank" class="lian" v-on:click="skip(n)">{{n.title}}</a>
                        </div>
                    </el-card>
                </div>
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <el-button style="float:left; padding: 3px 0; color: black" type="text" >{{this.label1[3]}}</el-button>
                            <!--<span>{{this.label1[3]}}</span>-->
                            <el-button style="float: right; padding: 3px 0" type="text" v-on:click="many3()">更多</el-button>
                        </div>
                        <div v-for="(n,index) in vnews4" :key="index" style="height: 30px">
                            <a target="_blank" class="lian" v-on:click="skip(n)">{{n.title}}</a>
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
                for( i = 0 ; i < 2 ; i++){
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
                /*this.vnews1 = this.channels[0].contents.splice(0,2);
                console.log(this.vnews1);
                this.vnews2 =this.channels[1].contents.splice(0,2);
                this.vnews3 =this.channels[2].contents.splice(0,2);
                this.vnews4 =this.channels[3].contents.splice(0,2);*/
            },
            getchannel(){
                console.log('mmmm');
                console.log(this.$store.state.channel);
                this.channels = this.$store.state.channel;
                console.log('kkkkkkkkkk');
                console.log(this.channels);
                let i;
                for( i = 0 ; i < 6 ; i++){
                    console.log(this.channels[i].chName);
                    this.label1.push(this.channels[i].chName);
                }
            },
            many(){
                this.$store.commit("SET_COMPONENTS_STATE",1);
                console.log('打印');
                console.log(this.$store.state.components);
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
            skip(n){
                this.$router.push({name:'detailed1', params:{item:n}});
                this.$router.push({path:'/prostage/detailed'})
            },

        },


    }
</script>

<style >
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
    .lian:hover{
        color: red;
    }
    .title{
        height: 30px;
    }
    .dianji{

    }

</style>