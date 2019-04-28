<template>
  <div>
    <el-row>
    <el-col style="width: 20%">
      <p style="font-size: 18px">*选择栏目: </p>
    </el-col>
    <el-col style="width: 30%">
    <el-select v-model="value" placeholder="请选择">
        <el-option
                v-for="(item,i) in this.$store.state.userInformation.channel"
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
      <el-row >
          <el-col style="width: 20%">
              <p style="font-size: 18px">文章内容: </p>
          </el-col>
          <el-col style="width: 60%">
              <el-input
                      type="textarea"
                      :rows="7"
                      placeholder="请输入内容"
                      v-model="contentPass.text">
              </el-input>
          </el-col>
      </el-row>
    <el-row>
      <el-button type="primary" style="margin-top: 50px" @click="passContent()">保存</el-button>
      <el-button type="info">重置</el-button>
    </el-row>
  </div>
</template>

<script>
/**
     * author:wastelands
     * Date:2019-03-31 17:09
     */
import {addContent}from '../../api/content/index.js'
import {getContentById} from "../../api/content";
export default {
  name: 'addText',
  created () {
    let self = this
    self.getParams()
  },
  watch () {
    $route:'getParams'
  },
  data () {
    return {
      contentPass:{
          title:"",
          text:"",
      },
      dialogImageUrl: '',
      dialogVisible: false,
      radio2: '',
      input: '',
      value: ''
    }
  },
  methods: {
    getParams () {
      let id = this.$route.query.id
      let detailContent = getContentById(id)
      let type = this.$route.query.type
    },
    passContent(){
      addContent(this.$store.state.userid,this.value,this.contentPass)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>

</style>
