<template>
  <el-row>
    <el-col :span="10">
      <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 10}"
          placeholder="请输入内容"
          v-model="text_area">
      </el-input>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" @click="analysis">转换</el-button>
    </el-col>
    <el-col :span="10">
      <el-button v-for="word in result" :type="word.type">{{word.word+word.pos}}</el-button>
    </el-col>
  </el-row>
</template>

<script>/**
 * author:wastelands
 * Date:2019-05-05 15:53
 */
import {analysis_news} from "../../api/analysis";

export default {
        name: "news_analyse",
        data() {
            return {
                text_area: '',
                result:[],
            }
        },
    /*watch:{
        text_area(){
            this.text_area = this.text_area.replace(/[^0-9\u4e00-\u9fa5]/g,'')
        }
    },*/
        methods:{
            analysis(){
                let text = this.text_area;

                analysis_news(text).then(res=>{
                    this.result = res.data.wpns;
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
            }
        }
    }
</script>

<style scoped>

</style>