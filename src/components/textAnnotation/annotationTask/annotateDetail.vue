<template>
  <div>
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" style="font-size: 25px;height: 40px">原文查看</span>
          <div v-html="content" style="font-size: 25px;text-align: left"></div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" v-if="annotation_type!=''" style="font-size: 25px;height: 40px"><i class="el-icon-date"></i> {{this.annotation_type}}</span>
          <div v-if="annotation_type==='中文分词'" style="font-size: 25px;text-align: left" v-for="(word,index) of newSegmentWord" ><p @click="getSelect($event,word,index)"> {{word}} </p><br/></div>
          <div v-if="annotation_type==='词性标注'" style="font-size: 25px;text-align: left" v-for="(word,index) of newPropertyWord"><p @click="getSelect($event,word,index)">{{word}}</p><br/></div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" style="font-size: 25px;height: 40px"><i class="el-icon-date"></i> 标注记录</span>
          <el-table :data="annotateRecord">
            <el-table-column
                type="index"
                width="50">
            </el-table-column>
            <el-table-column property="annotation_type" label="标注类型" width="200"></el-table-column>
            <el-table-column property="status" label="状态" width="200"></el-table-column>
            <el-table-column property="phrase" label="阶段" width="200"></el-table-column>
            <el-table-column property="annotator" label="标注者" width="200"></el-table-column>
            <el-table-column property="created_time" label="创建时间" width="200"></el-table-column>
            <el-table-column property="update_time" label="最后标注时间" width="200"></el-table-column>
            <!--<el-table-column label="操作">-->
              <!--<template slot-scope="scope">-->
                <!--<el-button @click="" type="text" size="small">查看</el-button>-->
                <!--&lt;!&ndash;<el-button @click="changeStatus(scope.row)" type="text" size="small" v-if="scope1.row.operation=='撤回'">撤回</el-button>&ndash;&gt;-->
              <!--</template>-->
            <!--</el-table-column>-->
          </el-table>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" style="font-size: 25px;height: 40px"><i class="el-icon-date"></i> 标注对比</span>
          标注对比
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <el-col :span="6"><el-button type="primary" @click="commitReview">提交审核</el-button></el-col>
      <el-col :span="6"><el-button type="success" @click="resetChange">还原修改</el-button></el-col>
      <el-col :span="6"><el-button type="warning" @click="save">保存</el-button></el-col>
    </el-row>
  </div>

</template>

<script>/**
 * author:wastelands
 * Date:2020-04-07 02:28
 */
import {getDocById, saveReAnnotateByUser, saveReannotateByUser} from "../../../api/annotation";

export default {
        name: "annotateDetail",
        data(){
            return{
                task:{},
                annotation_type:"",
                doc:{},
                content:"",
                annotateRecord:[],
                segmentWord:[],
                newSegmentWord:[],
                propertyWord:[],
                newPropertyWord:[],
            }
        },
        mounted(){
            this.task=this.$store.state.task;
            this.annotation_type=this.$store.state.annotationType;
            if(this.annotation_type==="中文分词"){
                console.log(this.task)
                for (let words of this.task.segmentWord){
                    let s="#";
                    for (let word of words){
                        s+=word+"#";
                    }
                    if (s.length===2||s.length===1)continue;
                    this.segmentWord.push(s);
                }
                this.newSegmentWord=this.segmentWord;
            }else if(this.annotation_type==="词性标注"){
                for (let words of this.task.propertyWord){
                    let s="#";
                    for (let word of words){
                        s+=(word+"#");//(word.replace(/\//g,"") +"#");
                    }
                    if (s.length===2||s.length===1){
                        continue;
                    }
                    this.propertyWord.push(s);
                    this.newPropertyWord=this.propertyWord;
                }
            }
            this.getDoc();

        },
        watch:{
        },
        methods:{
            getDoc(){
                let that=this;
                getDocById(this.task.doc_id).then(res=>{
                    that.doc=res.data;
                    that.$nextTick(()=>{
                        that.content=that.doc.content.replace(/\n/g,"<br/>");
                    });
                    for (let t of that.doc.tasks){
                        if(t.annotation_type===that.annotation_type){
                            that.annotateRecord.push(t);
                        }
                    }
                },err=>{
                    console.log(err)
                })
            },
            //获得选中的文本并更新
            getSelect(e,word,index){
              let win=window.getSelection()?window.getSelection():document.selection.createRange().text;
              if(this.annotation_type==="中文分词"){
                  //将选中的字符串重新分词再更新newSegmentWord
                  let str=win.toString(),new_str="#";
                  for (let s of str.split("#")){
                      new_str+=s;
                  }
                  new_str+="#";
                  this.$set(this.newSegmentWord,index,this.segmentWord[index].replace(str,new_str))
                  // console.log(this.segmentWord[index])
              }else if (this.annotation_type==="词性标注"){
                  //与分词一样
                  let str=win.toString(),new_str="#";
                  let result,character;
                  let reg = /[a-zA-Z]+/;  //[a-zA-Z]表示专匹配字母，g表示全局匹配
                  while (result = str.match(reg)) { //判断str.match(reg)是否没有字母了
                      str = str.replace(result[0], ''); //替换掉字母  result[0] 是 str.match(reg)匹配到的属字母
                      character=result[0];
                  }
                  for (let s of str.split("#")){
                      new_str+=s;
                  }
                  new_str+=(character+"#");
                  this.$set(this.newPropertyWord,index,this.newPropertyWord[index].replace(win.toString(),new_str))
              }
            },
            //提交审核
            commitReview(){

            },
            //还原修改
            resetChange(){
                if (this.annotation_type==="词性标注")this.newPropertyWord=this.propertyWord;
                else if (this.annotation_type==="中文分词")this.newSegmentWord=this.segmentWord;
            },
            //保存
            save(){
                let reqData;
                if (this.annotation_type==="中文分词")reqData=this.newSegmentWord;
                else if (this.annotation_type==="词性标注")reqData=this.newPropertyWord
                saveReAnnotateByUser(this.$store.state.username,reqData,this.task.doc_id,this.task.task_id).then(()=>{
                    this.$notify({
                        title: '成功',
                        message: '保存成功',
                        type: 'success',
                        duration: 2000
                    });
                },err=>{
                    this.$notify({
                        title: '失败',
                        message: '保存失败',
                        type: 'failure',
                        duration: 2000
                    });
                    console.log(err)
                })
            },
        },
    }
</script>

<style scoped>

</style>