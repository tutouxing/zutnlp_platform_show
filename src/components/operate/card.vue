<template>
  <el-card>
    <el-row>
      <el-col :span="10" style="text-align: left"><a href="www.baidu.com" style="text-underline-style: none">{{this.content_data.title}}</a>
      </el-col>
      <el-col :span="2" style="text-align: center;">文章ID:{{content_data.id}}</el-col>
      <el-col :span="2" style="text-align: right">
        <el-button @click="reviewAllResponse(content_data)">查看本文全部评论</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="15" style="text-align: left">评论内容:测试内容</el-col>
      <el-col :span="4">审核状态:<b style="color: forestgreen">等待审核</b></el-col>
    </el-row>
    <el-row v-show="replay_show===1">
      <el-col :span="2" style="text-align: left;color: darkgoldenrod">回复</el-col>
      <el-col :span="10">
        <el-input
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="text_replay">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="commit">回复</el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="cancel">取消</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" style="color: #999;text-align: left">评论者:</el-col>
      <el-col :span="2" style="color:#999;">评论时间:{{content_data.dateCreated}}</el-col>
      <el-col :span="2" :offset="8">
        <el-button @click="passCom(content_data.comments[0])">审核通过</el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="refuseCom(content_data.comments[0])">审核不通过</el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="replay">回复</el-button>
      </el-col>
      <el-col :span="2">
        <el-button @click="del">删除</el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>/**
 * author:wastelands
 * Date:2019-06-28 09:44
 */
import {failReview, passReview} from "./event";

export default {
        name: "card",
        props: {
            content_data: {
                type: Object,
                required: true
            },
            text_replay: {
                type: String,
                default: () => '',
            },
            replay_show: {
                type: Number,
                default: () => -1,
            },
        },
        /*data(){
            return{
                text_replay:'',
                replay_show:-1,
            }
        },*/
        methods: {
            passCom(comment) {//审核通过  首评状态改为1（-1不通过 0等待审核）
                passReview(comment)
            },
            refuseCom(comment) {//审核不通过  首评状态改为-1（1通过 0等待审核）
                failReview(comment)
            },
            replay() {
                this.replay_show = -this.replay_show;
            },
            commit() {
                this.replay_show = -this.replay_show;
            },
            cancel(){
                this.replay_show = -this.replay_show;
            },
            del(){
                //删除第一条评论
                this.$message({
                    showClose:true,
                    type:'error',
                    message:"删除成功",

                })
            },
            reviewAllResponse(content){
                this.$emit('sendComments',content);
                console.log("111")
            },
        }
    }
</script>

<style scoped>

</style>