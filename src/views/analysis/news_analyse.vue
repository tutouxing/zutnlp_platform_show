<template>
  <div>
  <el-row>
    <!--<el-col :span="10">-->
      <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 10}"
          placeholder="请输入内容"
          v-model="text_area">
      </el-input>
  </el-row>
    <!--</el-col>-->
    <el-row>
      <el-col :span="5"><el-button type="primary" @click="analysis_wpn">词性标注</el-button></el-col>
      <el-col :span="5"><el-button type="primary" @click="analysis_dependence">依存分析</el-button></el-col>
      <el-col :span="5"><el-button type="primary" @click="analysis_tree">命名实体识别</el-button></el-col>
    </el-row>
    <el-row>
      <template v-if="flag == 1">
        <el-button v-for="word in wpn_result" :type="word.type" :key="index">{{word.word+word.pos}}</el-button>
      </template>
      <template v-if="flag == 2">
        <p>{{dependence_result}}</p>
      </template>
      <template v-if="flag == 3">
        <p>{{tree_result}}</p>
      </template>
    </el-row>
  <!--</el-row>-->
  </div>
</template>

<script>/**
 * author:wastelands
 * Date:2019-05-05 15:53
 */
import {analysis_dependence, analysis_tree, analysis_wpn} from "../../api/analysis";

export default {
        name: "news_analyse",
        data() {
            return {
                text_area: '',
                wpn_result:[],
                flag:0,
                dependence_result:"",
                tree_result:"",
            }
        },
    /*watch:{
        text_area(){
            this.text_area = this.text_area.replace(/[^0-9\u4e00-\u9fa5]/g,'')
        }
    },*/
        methods:{
            analysis_wpn(){//词性标注
                let text = this.text_area;
                this.flag = 1;
                analysis_wpn(text).then(res=>{
                    this.result = res.data;
                    for(let i=0;i<this.result.length;i++){
                        if (this.result[i].pos==="NN"){
                            this.$set(this.result[i],"type","primary");
                        }else if (this.result[i].pos==="VC"){
                            this.$set(this.result[i],"type","warning");
                        } else if (this.result[i].pos==="PN"){
                            this.$set(this.result[i],"type","success");
                        } else if (this.result[i].pos==="AD"){
                            this.$set(this.result[i],"type","danger");
                        } else if (this.result[i].pos==="VA"){
                            this.$set(this.result[i],"type","info");
                        } else if (this.result[i].pos==="PP"){
                            this.$set(this.result[i],"type","text");
                        }
                    }
                    console.log(this.result);
                })
            },
            analysis_dependence(){//依存分析
                let text = this.text_area;
                this.flag = 2;
                analysis_dependence(text).then(res=>{
                    console.log(res.data);
                    this.dependence_result = res.data;
                });
            },
            analysis_tree(){//命名实体识别
                let text = this.text_area;
                this.flag = 3;
                analysis_tree(text).then(res=>{
                    console.log(res.data);
                    this.tree_result = res.data;
                });
            },
        }
    }
</script>

<style scoped>

</style>