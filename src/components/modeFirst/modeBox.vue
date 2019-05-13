<template>
    <div class="exBox">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{channelItem}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" >
                <router-link v-bind:to="channelItem">更多</router-link></el-button>
        </div>
        <div v-for="items in this.$store.state.channel" class="text item">
            <div v-if="items.chName==channelItem">
            <div v-for="(content,index) in items.contents" v-if="index <5&&content.title!=null">
                <!--<router-link :to="{path:'/modethirdCont/',query:{title:content.title}}">{{content.title}}</router-link></div>-->
                <router-link :to="{path:'/modethirdCont/'+content.title,query:{title:content.title}}">{{content.title}}</router-link></div>
            </div>
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
            }
        },methods:{
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
        height: 90%;

    }
    .exBox{
        text-align : left;
        width: 30%;
        height: 300px;
        float: left;
    }
</style>