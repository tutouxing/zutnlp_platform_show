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
                    title:'标题二一'
                },{
                    title:'标题二一'
                },{
                    title:'标题二一'
                },{
                    title:'标题二一'
                },{
                    title:'标题二一'
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
    .ziti{
        font-family: "Arial";
        font-size:18px;
        font-weight:bold;
        text-color:#022445;
        active-text-color:#b491f6;
        width: 15%

    }
    a:hover{color: #aaccee}
    a{text-decoration: none;}
    a:visited{color:#2361b9}
    a:active{color: #ffffff}
</style>