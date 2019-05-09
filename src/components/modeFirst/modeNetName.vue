<template>
    <div class="exImg"><img class="imgClass" :src="formData.avatar" alt="">
        <!--<div class="tx"><h1>人民网-----网上的人民日报</h1></div></div>-->
        <div class="tx">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input></div>

</div>
</template>

<script>
    export default {
        name: "modeNetName",
        data() {
            return {
                formData: {
                    avatar: require('@/assets/img/mo.png'),
                },
                routers: this.$router.options.routes
            }
        }
    }
</script>

<style scoped>
    .imgClass{
        display: inline;
        float: left;
        height: 60px;
        width: 150px;
        margin-bottom: 2%;

    }
    .exImg{
        width:100%;
        height:50px;
        line-height:50px;
        border: 1px ;
        margin-left: 15%;
        font-size:20px
    }
    .tx{
        font-family: "Helvetica Neue";
        float:left;
        margin-left: 10%;
        margin-top: 1%;
        width: 500px;
        in-left: 5%;
    }

</style>