<template>

    <div class="line">
        <el-menu   class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item  class="ziti" v-for="secChannel in secChanneList">{{secChannel.title}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "modeSecDir",
        data: function(){
            return {
                secChanneList:[{
                    title:'新闻岛屿'
                },{
                    title:'国内要闻'
                },{
                    title:'军事资讯'
                },{
                    title:'学习强国'
                },{
                    title:'阅读文章'
                },{
                    title:'更多'
                }]
            }
        },methods:{
            handleSelect(){
            }
        }
    }
</script>

<style scoped>
    .el-menu-item{
        font-family: "Arial";
        font-size:18px;
        font-weight:bold;
        width: 15%

    }
    a {color:#252525; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}
</style>