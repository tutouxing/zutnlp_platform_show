<template>
  <div>
    <el-row>
    <el-col style="width: 20%">
      <p style="font-size: 18px">*选择栏目: </p>
    </el-col>
    <el-col style="width: 30%">
    <el-select v-model="value" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    </el-col>
      <el-col style="width: 20%">
        <p style="font-size: 18px">关联专题: </p>
      </el-col>
      <el-col style="width: 30%">
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
    </el-col>
    </el-row>
    <el-row >
      <el-col style="width: 20%">
        <p style="font-size: 18px">摘要: </p>
      </el-col>
      <el-col style="width: 60%">
      <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="textarea">
      </el-input>
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
      <el-button type="primary" style="margin-top: 50px">报存</el-button>
      <el-button type="info">重置</el-button>
    </el-row>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2019-03-31 17:09
     */
    export default {
        name: "addText",
        created(){
            let self = this
            self.getParams()
        },
        watch(){
          $route:'getParams'
        },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
               radio2:'',
                input:'',
                textarea: '',
                options: [{
                    value: '选项1',
                    label: '新闻'
                }, {
                    value: '选项2',
                    label: '视频'
                }, {
                    value: '选项3',
                    label: '文档'
                }, {
                    value: '选项4',
                    label: '下载'
                },],
                value: ''
            }
        },
        methods:{
            getParams(){
                let id = this.$route.query.id;
                let detailContent = getContentById(id);
                let type = this.$route.query.type
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>