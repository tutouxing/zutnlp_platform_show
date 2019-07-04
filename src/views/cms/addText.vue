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
     <!-- <el-col style="width: 30%">
        <p style="font-size: 18px">上传图片: </p>
      </el-col>
      <el-col style="width: 30%">
      <el-upload
          action="http://127.0.0.1:8848/upload/fileUpload/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-error="error"
          :on-success="success">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      </el-col>-->
        <el-upload
                class="avatar-uploader"
                action="http://127.0.0.1:8848/upload/fileUpload/"
                :show-file-list="false"
                :on-success="success"
                :on-error="error"
                :before-upload="beforeUpload">
            <i class="el-icon-plus"></i>
        </el-upload>
    </el-row>
        <el-row v-loading="quillUpdateImg">
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
      quillUpdateImg: false,
      editorOption: {
        placeholder: '',
        theme: 'snow',  // or 'bubble'
        modules: {
          toolbar: {
            container: toolbarOptions,  // 工具栏
            handlers: {
              'image': function (value) {
                if (value) {
                  document.querySelector('.avatar-uploader input').click()
                } else {
                  this.quill.format('image', false);
                }
              }
            }
          }
        }},
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
       }).then(() => {
          getChannelById(this.$store.state.userid).then(res=>{
            this.$store.commit("SET_CHANNEL_STATE", res.data);
          });
        })
      }
      else
        addContent(this.$store.state.userid,this.value,this.contentPass).then(() => {
            this.$message({
              message: '保存成功',
              type: 'success',
            });
    }).then(() => {
      getChannelById(this.$store.state.userid).then(res=>{
        this.$store.commit("SET_CHANNEL_STATE", res.data);//得到内容
        var i=this.$store.state.todayData.todayContentNum
        i++;
        this.$store.commit("SET_TODAYDATA_CONTENT_STATE",i);
      });
    })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    error(err, file, fileList){
      this.quillUpdateImg = false
      this.$message.error('图片上传失败')
      console.log('上传失败，请重试！')
    },
    success(response, file, fileList){
      let quill = this.$refs.myQuillEditor.quill
      // 如果上传成功
      if (response ==="上传成功") {
        // 获取光标所在位置
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', "http://118.25.191.46:8080/img/pic_1.png")
        // 调整光标到最后
        quill.setSelection(length + 1)
        this.$message.success('图片插入成功')
      } else {
        this.$message.error('图片插入失败')
      }
      // loading动画消失
      this.quillUpdateImg = false
      console.log('上传成功！')
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeUpload(file) {
      // 显示loading动画
      this.quillUpdateImg = true
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
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{'header': 1}, {'header': 2}],               // custom button values
  [{'list': 'ordered'}, {'list': 'bullet'}],
  [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
  [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
  [{'direction': 'rtl'}],                         // text direction

  [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
  [{'header': [1, 2, 3, 4, 5, 6, false]}],

  [{'color': []}, {'background': []}],          // dropdown with defaults from theme
  [{'font': []}],
  [{'align': []}],
  ['link', 'image', 'video'],
  ['clean']                                         // remove formatting button
]

</script>

<style scoped>

</style>
