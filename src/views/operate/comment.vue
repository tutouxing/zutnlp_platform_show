<template>
  <div>
    <el-row style="margin-top: 50px">
      <el-col :span="2">
        <el-select v-model="value1" placeholder="审核状态">
          <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-select v-model="value2" placeholder="是否推荐">
          <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2" :offset="12">
        文章ID
      </el-col>
      <el-col :span="2">
        <el-input v-model="input" placeholder="请输入ID"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button @click="searchId(input)">查询</el-button>
      </el-col>
    </el-row>
    <!--<el-row v-for="o in this.content_data" :key="o.id">
      <el-card>
        <el-row>
          <el-col :span="10" style="text-align: left"><a>{{o.title}}</a></el-col>
          <el-col :span="2" style="text-align: center;">文章ID:{{o.id}}</el-col>
          <el-col :span="2" style="text-align: right">
            <el-button>查看本文全部评论</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="15" style="text-align: left">评论内容:测试内容</el-col>
          <el-col :span="4">审核状态:<b style="color: forestgreen">等待审核</b></el-col>
        </el-row>
        <el-row>
          <el-col :span="2" style="color: #999;text-align: left">评论者:{{o.publish}}</el-col>
          <el-col :span="2" style="color:#999;">评论时间:{{o.dateCreated}}</el-col>
          <el-col :span="2" :offset="8">
            <el-button @click="passCom(o.id)">审核通过</el-button>
          </el-col>
          <el-col :span="2">
            <el-button @click="refuseCom(o.id)">审核不通过</el-button>
          </el-col>
          <el-col :span="2">
            <el-button>回复</el-button>
          </el-col>
          <el-col :span="2">
            <el-button>删除</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-row>-->
    <!--默认显示每篇内容首评-->
    <div v-for="o in content_data" :key="o.id" v-show="showType===''">
      <card :content_data="o" ></card>
    </div>
    <!--查看本文所有评论-->
    <div v-show="showType=='allComments'">
      <detail-comment></detail-comment>
    </div>
    <!--根据id查找对应评论-->
    <div v-show="showType=='referenceId'"></div>

  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2019-06-25 11:28
     */
    import {getContent} from "../../api/content";
    import Card from "../../components/operate/card";
    import detailComment from "detailComment";

    export default {
        name: "comment",
        data() {
            return {
                options1: [{
                    value: '选项1',
                    label: '等待审核'
                }, {
                    value: '选项2',
                    label: '审核通过'
                }, {
                    value: '选项3',
                    label: '审核不通过'
                }],
                value1: '',//审核状态
                options2: [{
                    value: '选项1',
                    label: '是'
                }, {
                    value: '选项2',
                    label: '否'
                }],
                value2: "",//是否推荐
                input: '',//搜索内容
                content_data: [],
                showType:'',
            }
        },
        components:{
          Card,detailComment
        },
        methods: {
            getContent() {
                getContent().then((res) => {
                    this.content_data = res.data.content;
                });

            },
            /*passCom(content_id) {//审核通过  首评状态改为1（-1不通过 0等待审核）
                for (let content in this.content_data) {
                    if (content.id === content_id) {
                        content.comments[0].state = 1;
                    }
                }
                this.$message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success'
                });
            },
            refuseCom(content_id) {//审核通过  首评状态改为1（-1不通过 0等待审核）
                for (let content in this.content_data) {
                    if (content.id === content_id) {
                        content.comments[0].state = 1;
                    }
                }
                this.$message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success'
                });
            },*/
            searchId(input){
                for (let content in this.content_data) {
                    if (content.id === input) {
                        return content;
                    }
                }
            },
        },
        created() {
            this.getContent();
        }
    }
</script>

<style scoped>
</style>