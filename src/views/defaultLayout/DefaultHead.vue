<template>
    <div id="user_defaulthead">
        <div id="user_left">
            <h2>智能快速开发平台</h2>
            <!--<i class="iconfont icon-user"></i>-->
        </div>
        <div id="user_right">
            <i class="iconfont icon-user" style="size: A4"></i>
            <p>user</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'top'
    }
</script>
<link ref="stylesheet" href="http://at.alicdn.com/t/font_926813_2c4yoi208d.js"/>
<style>
    @import url("http://at.alicdn.com/t/font_926813_2c4yoi208d.css");
    div#user_defaulthead {
        display:flex;
        justify-content:space-between;
    }
    div#user_right {
        width: 100px;
        color: aliceblue;
    }

    div#user_left {
        text-align: left;
        color: aliceblue;
        padding-left: 10px;
    }
</style>
