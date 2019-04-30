<template>
    <div class="exBox">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{channelItem}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <div v-for="content in ContentList" class="text item">
            {{content.title}}
        </div>
    </el-card>
    </div>
</template>

<script>
    export default {
        name: "modeBox",
        props: {
            channelItem: String,
            required: true
        },
        data(){
            return{
                channel:"新闻",
                ContentList:[
                    {title:"唐山大地震"},
                    {title:"唐山大地震"},
                    {title:"唐山大地震"},
                    {title:"唐山大地震"},
                    {title:"唐山大地震"}
                ]
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width:90%;

    }
    .exBox{
        text-align : left;
        width: 30%;
        display:inline-block
    }
</style>