<template>
  <div>
    <el-row>
      <el-col :span="5">请输入翻译文本：</el-col>
      <el-col :span="19">
        <el-input
            type="textarea"
            autosize
            :rows="2"
            placeholder="请输入内容"
            v-model="textArea">
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-select v-model="targetLang" placeholder="请选择">
        <el-option
            v-for="item in languages"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
      <el-button @click="translate" type="primary">翻译</el-button>
    </el-row>
    <el-row style="font-size: 25px">{{textResult}}</el-row>
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
                targetLang:"",
                languages:[{
                    value:"zh",
                    label:"中文"
                },{
                    value:"en",
                    label:"英文"
                },{
                    value:"ja",
                    label:"日语"
                },{
                    value:"de",
                    label:"德语"
                },{
                    value:"fr",
                    label:"法语"
                }, {
                    value: "es",
                    label: "西班牙语"
                }]
            }
        },
        methods:{
            translate(){
                machineTranslate(this.textArea,this.targetLang).then(res=>{
                    this.textResult=res.data;
                },err=>{

                })
            }
        }
    }
</script>

<style scoped>

</style>