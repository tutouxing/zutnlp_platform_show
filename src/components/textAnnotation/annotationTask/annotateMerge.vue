<template>
  <div>
    <el-row>
      <el-select
          v-model="record"
          value-key="annotator"
          placeholder="请选择要合并的标注"
          @change="getSelected">
        <el-option
            v-for="(item,index) in annotateData"
            :key="index"
            :label="item.annotator"
            :value="item">
          <span style="float: left">{{ item.annotator }}</span>
        </el-option>
      </el-select>
    </el-row>
    <el-row>
      <el-alert
          title="标注合并提示"
          type="info"
          description="合并的两结果如有不同，默认选择左侧标注结果；如需选择右侧标注结果，请点击对应文字后的按钮表示确认！"
          show-icon
          center>
      </el-alert>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10" style="margin-left: auto;border-radius: 2px">
        <div v-if="annotateTask.annotation_type==='中文分词'" style="font-size: 25px;text-align: left;line-height: 1.5" v-for="(word,index) of annotateTask.newSegmentWord" >
          <p> {{word}} </p>
          <br/>
        </div>
        <div v-if="annotateTask.annotation_type==='词性标注'" style="font-size: 25px;text-align: left" v-for="(word,index) of annotateTask.newPropertyWord">
          <p>{{word}}</p>
          <br/>
        </div>
      </el-col>
      <el-col :span="10" style="margin-right: auto">
        <div v-if="record.annotation_type==='中文分词'" style="font-size: 25px;text-align: left;line-height: 1.5" v-for="(word,index) of record.newSegmentWord" >
          <p v-if="record.newSegmentWord[index].length===annotateTask.newSegmentWord[index].length"> {{word}} </p>
          <p v-if="record.newSegmentWord[index].length!==annotateTask.newSegmentWord[index].length" style="background-color: darkgoldenrod">
            {{word}}
            <el-button type="success" icon="el-icon-check" circle @click="handleMerge(index,0)"/></p>
          <br/>
        </div>
        <div v-if="record.annotation_type==='词性标注'" style="font-size: 25px;text-align: left" v-for="(word,index) of record.newPropertyWord">
          <p v-if="record.newPropertyWord[index].length===annotateTask.newPropertyWord[index].length">{{word}}</p>
          <p v-if="record.newPropertyWord[index].length!==annotateTask.newPropertyWord[index].length" style="background-color: darkgoldenrod">
            {{word}}
            <el-button type="success" icon="el-icon-check" circle @click="handleMerge(index,1)"/>
          </p>
          <br/>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="commitResult">合并</el-button>
    </el-row>
  </div>

</template>

<script>/**
 * author:wastelands
 * Date:2020-04-18 18:42
 */
import {mergeAnnotate} from "../../../api/annotation";

export default {
        name: "annotateMerge",
        data(){
            return{
                annotateData:[],
                annotateTask:{},
                record:{},
                annotateResult:[],
            }
        },
        mounted(){
            this.annotateData=this.$store.state.annotateData;
            this.annotateTask=this.$store.state.mergeTask;
            if(this.annotateTask.annotation_type==="中文分词"){
                let segWord=[];
                for (let words of this.annotateTask.segmentWord){
                    let s="#";
                    for (let word of words){
                        if (word.length===0)continue;
                        s+=word+"#";
                    }
                    // if (s.length===2||s.length===1)continue;
                    segWord.push(s);
                }
                this.$set(this.annotateTask,"newSegmentWord",segWord);
                this.annotateResult=this.annotateTask.newSegmentWord;
                // this.record1.segmentWord=segWord;
            }else if(this.annotateTask.annotation_type==="词性标注"){
                let proWord=[];
                for (let words of this.annotateTask.propertyWord){
                    let s="#";
                    for (let word of words){
                        if (word.length===0)continue;
                        s+=(word.replace(/\//g,"") +"#");
                    }
                    proWord.push(s);
                }
                // this.record1.propertyWord=proWord;
                this.$set(this.annotateTask,"newPropertyWord",proWord);
                this.annotateResult=this.annotateTask.newPropertyWord;
            }
        },
        methods:{
            getSelected(){
                console.log(this.record)
                if(this.record.annotation_type==="中文分词"){
                    let segWord=[];
                    for (let words of this.record.segmentWord){
                        let s="#";
                        for (let word of words){
                            if (word.length===0)continue;
                            s+=word+"#";
                        }
                        // if (s.length===2||s.length===1)continue;
                        segWord.push(s);
                    }
                    this.$set(this.record,"newSegmentWord",segWord);
                    // this.record1.segmentWord=segWord;
                }else if(this.record.annotation_type==="词性标注"){
                    let proWord=[];
                    for (let words of this.record.propertyWord){
                        let s="#";
                        for (let word of words){
                            if (word.length===0)continue;
                            s+=(word.replace(/\//g,"") +"#");
                        }
                        proWord.push(s);
                    }
                    // this.record1.propertyWord=proWord;
                    this.$set(this.record,"newPropertyWord",proWord);
                }
            },
            getSelect(event,word,index){

            },
            handleMerge(right_index,flag){
                if (flag===0){//中文分词
                    this.$set(this.annotateResult,right_index,this.record.newSegmentWord[right_index]);
                } else {//词性标注
                    this.$set(this.annotateResult,right_index,this.record.newPropertyWord[right_index]);
                }
                console.log(right_index)
            },
            commitResult(){
                mergeAnnotate(this.annotateResult,this.annotateTask.doc_id,this.annotateTask.task_id,this.record.task_id,this.$store.state.username).then(res=>{
                   if (res.data==true){
                       this.$notify({
                           title:"合并成功",
                           type:"success",
                           message:"合并成功！",
                       })
                   }
                },err=>{
                    console.log(err)
                });
            },
        },
    }
</script>

<style scoped>

</style>