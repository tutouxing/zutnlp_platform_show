<template>
  <div>
    <el-row>
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label" v-if="annotation_type!==''" style="font-size: 25px;height: 40px"><i class="el-icon-date"></i> {{this.annotation_type}}</span>
          <div v-if="annotation_type==='中文分词'" style="font-size: 25px;text-align: left" v-for="(word,index) of newSegmentWord" ><p @click="getSelect($event,word,index)"> {{word}} </p><br/></div>
          <div v-if="annotation_type==='词性标注'" style="font-size: 25px;text-align: left" v-for="(word,index) of newPropertyWord"><p @click="getSelect($event,word,index)">{{word}}</p><br/></div>
          <div v-if="annotation_type==='命名实体'" style="font-size: 25px;text-align: left" v-for="(word,index) of newNerTokens"><p @click="getSelect($event,word,index)">{{word}}</p><br/></div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label" style="font-size: 25px;height: 40px">原文查看</span>
          <div v-html="content" style="font-size: 25px;text-align: left"></div>
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
          <el-col :span="10">
            <el-row>
              <el-select
                  v-model="record1"
                  value-key="annotator"
                  placeholder="请选择用户标注"
                  clearable
                  @change="getSelectedLeft">
                <el-option
                    v-for="(item,index) in annotateRecord"
                    :key="index"
                    :label="item.annotator"
                    :value="item">
                  <span style="float: left">{{ item.annotator }}</span>
                </el-option>
              </el-select>
            </el-row>
            <el-row>
              <div v-if="record1.annotation_type==='中文分词'" style="font-size: 25px;text-align: left" v-for="(word,index) of record1.newSegmentWord" >
                <p> {{word}} </p><br/>
                <!--<p v-if="record1.newSegmentWord[index].length!==record2.newSegmentWord[index].length" style="color: darkgoldenrod"> {{word}} </p><br/>-->
              </div>
            </el-row>
          </el-col>
          <el-col :span="2"/>
          <el-col :span="10">
            <el-row>
              <el-select
                  v-model="record2"
                  value-key="annotator"
                  placeholder="请选择用户标注"
                  @change="getSelectedRight">
                <el-option
                    v-for="(item,index) in annotateRecord"
                    :key="index"
                    :label="item.annotator"
                    :value="item">
                  <span style="float: left">{{ item.annotator }}</span>
                </el-option>
              </el-select>
            </el-row>
            <el-row>
              <div v-if="record2.annotation_type==='中文分词'" style="font-size: 25px;text-align: left" v-for="(word,index) of record2.newSegmentWord" >
                <!--<p>{{word}}</p><br/>-->
                <p v-if="record1.newSegmentWord[index].length===record2.newSegmentWord[index].length"> {{word}} </p>
                <p v-if="record1.newSegmentWord[index].length!==record2.newSegmentWord[index].length" style="color: darkgoldenrod"> {{word}} </p><br/>
              </div>
              <div v-if="record2.annotation_type==='词性标注'" style="font-size: 25px;text-align: left" v-for="(word,index) of record2.newPropertyWord" >
                <!--<p>{{word}}</p><br/>-->
                <p v-if="record1.newPropertyWord[index].length===record2.newPropertyWord[index].length"> {{word}} </p>
                <p v-if="record1.newPropertyWord[index].length!==record2.newPropertyWord[index].length" style="color: darkgoldenrod"> {{word}} </p><br/>
              </div>
              <div v-if="record2.annotation_type==='命名实体'" style="font-size: 25px;text-align: left" v-for="(word,index) of record2.newPropertyWord" >
                <!--<p>{{word}}</p><br/>-->
                <p v-if="record1.newNerTokens[index].length===record2.newNerTokens[index].length"> {{word}} </p>
                <p v-if="record1.newNerTokens[index].length!==record2.newNerTokens[index].length" style="color: darkgoldenrod"> {{word}} </p><br/>
              </div>
            </el-row>
          </el-col>
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
import {getDocById, saveReAnnotateByUser, } from "../../../api/annotation";

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
                nerTokens:[],
                newNerTokens:[],
                record1:{},
                record2:{},
            }
        },
        mounted(){
            this.task=this.$store.state.task;
            this.annotation_type=this.$store.state.annotationType;
            if(this.annotation_type==="中文分词"){
                for (let words of this.task.segmentWord){
                    let s="#";
                    for (let word of words){
                        s+=word.word+"#";
                    }
                    if (s.length===2||s.length===1)continue;
                    this.segmentWord.push(s);
                }
                this.newSegmentWord=this.segmentWord;
            }else if(this.annotation_type==="词性标注"){
                for (let words of this.task.propertyWord){
                    let s="#";
                    for (let word of words){
                        s+=(word.word+"/"+word.pos +"#");
                    }
                    if (s.length===2||s.length===1){
                        continue;
                    }
                    this.propertyWord.push(s);
                }
                this.newPropertyWord=this.propertyWord;
            }else if(this.annotation_type==="命名实体"){
                for (let words of this.task.tokens){
                    let s='#'+words.word+words.type+'#';
                    this.nerTokens.push(s);
                }
                this.newNerTokens=this.nerTokens;
            }
            this.getDoc();
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
              }else if (this.annotation_type==="词性标注"){
                  //弹框输入新词性
                  let str=win.toString(),new_str="";
                  let pos = str.split("#");
                  for (let i=0;i<pos.length;i++){
                      if (pos[i]==="")continue;
                      let p=pos[i].split("/");
                      console.log(p);
                      new_str+=p[0];
                  }
                  this.$prompt('请输入'+new_str+'的再标注词性', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      inputPattern: /[a-z]+/,
                      inputErrorMessage: '词性格式不正确'
                  }).then(({ value }) => {
                      this.$message({
                          type: 'success',
                          message: '再标注词性为: ' + value
                      });
                      pos=value;
                      this.$set(this.newPropertyWord,index,this.newPropertyWord[index].replace(str,'#'+new_str+'/'+pos+'#'));
                  }).catch(() => {
                      this.$message({
                          type: 'info',
                          message: '取消输入'
                      });
                  });
              }
            },
            //提交审核
            commitReview(){
                let reqData,flag=1;
                if (this.annotation_type==="中文分词")reqData=this.newSegmentWord;
                else if (this.annotation_type==="词性标注")reqData=this.newPropertyWord;
                else if (this.annotation_type==="命名实体")reqData=this.newNerTokens;
                saveReAnnotateByUser(reqData,this.$store.state.username,this.task.doc_id,this.task.task_id,flag).then(()=>{
                    this.$notify({
                        title: '成功',
                        message: '提交成功',
                        type: 'success',
                        duration: 2000
                    });
                },err=>{
                    this.$notify({
                        title: '失败',
                        message: '提交失败',
                        type: 'failure',
                        duration: 2000
                    });
                    console.log(err)
                })
            },
            //还原修改
            resetChange(){
                if (this.annotation_type==="词性标注")this.newPropertyWord=this.propertyWord;
                else if (this.annotation_type==="中文分词")this.newSegmentWord=this.segmentWord;
                else if (this.annotation_type==="命名实体")this.newNerTokens=this.nerTokens;
            },
            //保存
            save(){
                let reqData;
                if (this.annotation_type==="中文分词")reqData=this.newSegmentWord;
                else if (this.annotation_type==="词性标注")reqData=this.newPropertyWord;
                else if (this.annotation_type==="命名实体")reqData=this.newNerTokens;
                saveReAnnotateByUser(reqData,this.$store.state.username,this.task.doc_id,this.task.task_id,0).then(()=>{
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
            getSelectedLeft(){
                console.log(this.record1);
                if(this.record1.annotation_type==="中文分词"){
                    let segWord=[];
                    for (let words of this.record1.segmentWord){
                        let s="#";
                        for (let word of words){
                            if (word.length===0)continue;
                            s+=word.word+"#";
                        }
                        // if (s.length===2||s.length===1)continue;
                        segWord.push(s);
                    }
                    this.$set(this.record1,"newSegmentWord",segWord);
                    // this.record1.segmentWord=segWord;
                }else if(this.record1.annotation_type==="词性标注"){
                    let proWord=[];
                    for (let words of this.record1.propertyWord){
                        let s="#";
                        for (let word of words){
                            if (word.length===0)continue;
                            s+=(word.word+"/"+word.pos+"#");
                        }
                        proWord.push(s);
                    }
                    // this.record1.propertyWord=proWord;
                    this.$set(this.record1,"newPropertyWord",proWord);
                }else if(this.record1.annotation_type==="命名实体"){
                    let token=[];
                    for (let words of this.record1.nerTokens){
                        token.push("#"+words.word+words.type+"#");
                    }
                    // this.record1.propertyWord=proWord;
                    this.$set(this.record1,"newNerTokens",token);
                }
            },
            getSelectedRight(){
                if(this.record2.annotation_type==="中文分词"){
                    let segWord=[];
                    for (let words of this.record2.segmentWord){
                        let s="#";
                        for (let word of words){
                            if (word.length===0)continue;
                            s+=word.word+"#";
                        }
                        // if (s.length===2||s.length===1)continue;
                        segWord.push(s);
                    }
                    // this.record1.segmentWord=segWord;
                    this.$set(this.record2,"newSegmentWord",segWord);
                }else if(this.record2.annotation_type==="词性标注"){
                    let proWord=[];
                    for (let words of this.record2.propertyWord){
                        let s="#";
                        for (let word of words){
                            s+=(word.word+"/"+word.pos+"#");
                        }
                        if (s.length===2||s.length===1){
                            continue;
                        }
                        proWord.push(s);
                    }
                    // this.record1.propertyWord=proWord;
                    this.$set(this.record2,"newPropertyWord",proWord);
                }else if(this.record2.annotation_type==="命名实体"){
                    let token=[];
                    for (let words of this.record2.nerTokens){
                        token.push("#"+words.word+words.type+"#");
                    }
                    // this.record1.propertyWord=proWord;
                    this.$set(this.record2,"newNerTokens",token);
                }
            }
        },
    }
</script>

<style scoped>

</style>