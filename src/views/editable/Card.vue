<template>
    <div>
        <el-card :body-style="{ padding: '0px' }">
            <img class="image" src="@/assets/img/plus.png" style="cursor: pointer;">
            <!--<el-dialog title="选择配置" :visible.sync="dialogFormVisible">-->

            <!--</el-dialog>-->
        </el-card>
    </div>
</template>
<script>
    export default {
        methods:{
            changeState(){
                this.$store.commit("SET_DIALOGFORMVISIBLE_STATE",true)
            }
        },
    }
</script>
<style>
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 50%;
        display: block;
        margin-top: 20px;
        margin-left: 25%;
        margin-right: 50%;

    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
