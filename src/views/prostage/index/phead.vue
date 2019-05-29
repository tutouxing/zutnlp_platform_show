<template>
    <div>
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <h2 style="color: darkslateblue"><span @click="welcome">欢迎来到展示台</span></h2>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light">
                    <el-menu mode="horizontal">
                        <el-menu-item v-for="(items,i) in this.$store.state.channel" :index=i.toString()>
                            <router-link to="/prostage/chanel/123">{{items.chName}}</router-link>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="2">
                <div class=" return">
                    <router-link to="/welcome">返回首页</router-link>
                </div>

            </el-col>
        </el-row>

    </div>


</template>

<script>
    export default {
        name: "phead",
        data:{
            term:[
                {index:'新闻'},
                {index:'图片'},
                {index:'视频'}
            ]
        },
        methods:{
            welcome(){
                this.$router.push('/prostage');
            },
        }
    }
</script>

<style>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    /*.grid-content {
        border-radius: 4px;
        min-height: 36px;
    }*/
    .bg-purple {
        /* background: #d3dce6;*/
    }
    .bg-purple-light {
        /* background: #e5e9f2;*/
    }
    .return{
        margin-top: 20px;
        margin-bottom: 10px;
    }
</style>