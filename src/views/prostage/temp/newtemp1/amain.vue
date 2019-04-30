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
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>{{this.label1[0]}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                        </div>
                        <div v-for="n in vnews1" :key="n" style="height: 30px">
                            {{n.title}}
                        </div>
                    </el-card>
                </div>

                <div>
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>{{this.label1[1]}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                        </div>
                        <div v-for="n in vnews2" :key="n" style="height: 30px">
                            {{n.title}}
                        </div>
                    </el-card>
                </div>
            </el-col >
            <el-col :span="12">
                <div>
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>{{this.label1[2]}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                        </div>
                        <div v-for="n in vnews3" :key="n" style="height: 30px">
                            {{n.title}}
                        </div>
                    </el-card>
                </div>
                <div>
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>{{this.label1[3]}}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                        </div>
                        <div v-for="n in vnews4" :key="n" style="height: 30px">
                            {{n.title}}
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
            }

        },
        created(){
            this.getchannel();
            this.slice();
        },
        methods:{
            slice(){
                this.vnews1 = this.channels[0].contents.splice(0,2);
                this.vnews2 =this.channels[1].contents.splice(0,2);
                this.vnews3 =this.channels[2].contents.splice(0,2);
                this.vnews4 =this.channels[3].contents.splice(0,2);
            },
            getchannel(){
                this.channels = this.$store.state.channel;
                console.log(this.channels);
                let i;
                for( i = 0 ; i < 6 ; i++){
                    console.log(this.channels[i].chName);
                    this.label1.push(this.channels[i].chName);
                }
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

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
 /*   .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }*/

</style>