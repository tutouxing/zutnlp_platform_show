<template>
    <div class="exBox">
        <el-image
                style="width: 150px; height: 100px"
                :src="hr"
                :fit="fill">
        </el-image>
    </div>
</template>

<script>
    export default {
        name: "modeImageBox",
        props:{
            hr:String
        }
    }
</script>

<style scoped>
    .box-card {
        width:90%;
    }
    .exBox{
        float:left;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        float:left; /*图片在文本的左边*/
        border:1px solid red;/*图片边框的颜色，大小，样式*/
        margin-top:10px;/*上方与其它元素保持10px*/
        margin-botton:10px;/*下方与其它元素保持10px*/
        margin-left:10px;/*左方与其它元素保持10px*/
        margin-right:60px;/*右方与其它元素保持10px*/
        height:80px;
        width:100px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    a {color:#252525; text-decoration:none; font-family: "Helvetica Neue"}
    a:visited {text-decoration:none; font-family: "Helvetica Neue"}
    a:hover {color:#ba2636;text-decoration:underline;font-family: "Helvetica Neue"}
    a:active {color:#ba2636; font-family: "Helvetica Neue"}
</style>