<template>
  <div>
    <el-row>
      <el-col :span="5">请输入翻译文本：</el-col>
      <el-col :span="19">
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textArea">
        </el-input>
      </el-col>
    </el-row>
    <el-row><el-button type="primary" @click="translate">翻译</el-button></el-row>
    <el-row>{{textResult}}</el-row>
  </div>
</template>

<script>/**
 * author:wastelands
 * Date:2020-04-28 21:44
 */
import {machineTranslate} from "../../api/annotation";

export default {
        name: "textTranslate",
        data(){
            return{
                textArea:'',
                textResult:'',
            }
        },
        methods:{
            translate(){
                machineTranslate(this.textArea).then(res=>{
                    this.textResult=res.data;
                },err=>{

                })
            }
        }
    }
</script>

<style scoped>

</style>