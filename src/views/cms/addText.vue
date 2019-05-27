<template>
  <div>
    <el-card>
    <el-row>
    <el-col style="width: 20%">
      <p style="font-size: 18px">*选择栏目: </p>
    </el-col>
    <el-col style="width: 30%">
    <el-select v-model="value" :disabled="this.disable" placeholder="请选择">
        <el-option
                v-for="(item,i) in channel"
                :key="item.id"
                :label="item.chName"
                :value="item.id">
        </el-option>
    </el-select>
    </el-col>
      <el-col style="width: 20%">
        <p style="font-size: 18px">文章标题: </p>
      </el-col>
      <el-col style="width: 30%">
          <el-input v-model="contentPass.title" placeholder="请输入标题"></el-input>
    </el-col>
    </el-row>
    <el-row>
      <el-col style="width: 20%">
        <p style="font-size: 18px">作者: </p>
      </el-col>
      <el-col  style="width: 30%;">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col style="width: 20%">
        <p style="font-size: 18px">来源: </p>
      </el-col>
      <el-col  style="width: 30%;">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="width: 20%">
        <p style="font-size: 18px">浏览权限: </p>
      </el-col>
      <el-col style="width: 35%">
      <el-radio v-model="radio2" label="1" border>普通用户</el-radio>
      <el-radio v-model="radio2" label="2" border>超级用户</el-radio>
      <el-radio v-model="radio2" label="3" border>管理员</el-radio>
      </el-col>
      <el-col style="width: 20%">
        <p style="font-size: 18px">固定级别: </p>
      </el-col>
      <el-col  style="width: 10%;">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col style="width: 30%">
        <p style="font-size: 18px">上传图片: </p>
      </el-col>
      <el-col style="width: 30%">
      <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      </el-col>
    </el-row>
        <el-row>
            <quill-editor class="editor" style="height: 500px"
                          v-model="contentPass.textHref"
                          ref="myQuillEditor"
                          :options="editorOption"
                          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                          @change="onEditorChange($event)">
                        </quill-editor>
        </el-row>
    <el-row>
      <el-button type="primary" style="margin-top: 50px" @click="passContent()"> 保存 </el-button>
      <el-button type="info" @click="goBack()"> 返回 </el-button>
    </el-row>
    </el-card>
  </div>
</template>

<script>
/**
     * author:wastelands
     * Date:2019-03-31 17:09
     */
import {addContent}from '../../api/content/index.js'
import {getContentById} from "../../api/content";
import {putContentById} from "../../api/content";
import {getChannelById} from "../../api/channel";
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'addText',
  created () {
    let self = this
    self.getParams();
    getChannelById(this.$store.state.userid).then(res=>{
      for(let i=0;i<res.data.length;i++){
        this.channel.push({
          id:res.data[i].id,
          chName:res.data[i].chName,
        })
      }
    });
  },
  watch () {
    $route:'getParams'
  },
  data () {
    return {
      contentPass:{
          title:"",
          textHref:"",
      },
      channel:[],
      dialogImageUrl: '',
      dialogVisible: false,
      radio2: '',
      input: '',
      value: '',
      type:'',
      contentID:'',
      disable:false,
      editorOption: {}
    }
  },
  methods: {
    getParams () {
        this.contentID = this.$route.query.id
        this.value = this.$route.query.channel
        console.log(this.value)
        getContentById(this.contentID).then(res => {
          let detailContent = res.data
          this.contentPass.title = detailContent.title;
          this.contentPass.textHref = detailContent.textHref;
          console.log(this.contentPass.textHref)
          this.disable = true
        });
        this.type = this.$route.query.type
    },
    passContent(){
      if(this.type==='update'){
       putContentById(this.contentID,this.contentPass).then(() => {
         this.$message({
           message: '修改成功',
           type: 'success',
         });
       })
      }
      else
        addContent(this.$store.state.userid,this.value,this.contentPass).then(() => {
            this.$message({
              message: '保存成功',
              type: 'success',
            });
    })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    goBack(){
      this.$router.push({
        path: '/backcms',
      })
    },
    onEditorBlur () {
    },
    onEditorFocus () {//获得焦点事件
    },
    onEditorChange () {//内容改变事件
    }
  }
}
</script>

<style scoped>

</style>
