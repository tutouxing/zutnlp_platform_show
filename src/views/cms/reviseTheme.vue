<template>
    <div>
        <el-card>
            <el-row>
            <el-col style="width: 15%">
                <p style="font-size: 18px "><i class="el-icon-setting">一级页面配置中心</i></p>
            </el-col>
            </el-row>
        <el-row>
            <el-col style="width: 10%">
                <p style="font-size: 18px">*选择主题: </p>
            </el-col>
            <el-col style="width: 18%">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="10">
                <el-card :style="photoShow">
                </el-card>
            </el-col>
        </el-row>
        <el-row style="margin-top:80px ">
            <el-col style="width: 10%">
                <p style="font-size: 18px">栏目一标题: </p>
            </el-col>
            <el-col  style="width: 15%;">
                <el-input v-model="channelStyle1.chName" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col style="width: 10%">
                <p style="font-size: 18px">栏目二标题: </p>
            </el-col>
            <el-col  style="width: 15%;">
                <el-input v-model="channelStyle2.chName" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col style="width: 10%">
                <p style="font-size: 18px">栏目三标题: </p>
            </el-col>
            <el-col  style="width: 15%;">
                <el-input v-model="channelStyle3.chName" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col style="width: 10%">
                <p style="font-size: 18px">栏目四标题: </p>
            </el-col>
            <el-col  style="width: 15%;">
                <el-input v-model="channelStyle4.chName" placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
        </el-card>
        <el-card>
            <el-row>
                <el-col style="width: 15%">
                    <p style="font-size: 18px "><i class="el-icon-setting">二级页面配置中心</i></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col style="width: 10%">
                    <p style="font-size: 18px">*选择主题: </p>
                </el-col>
                <el-col style="width: 18%">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="10">
                    <el-card :style="photoShow">
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top:80px ">
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目一标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model=" channelStyle1.chName" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目二标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model="channelStyle2.chName" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目三标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model="channelStyle3.chName" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目四标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model="channelStyle4.chName" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>

            <el-row>
                <el-button type="primary" style="margin-top: 50px" @click="passTheme()">保存</el-button>
                <el-button type="info">重置</el-button>
            </el-row>
        </el-card>
    </div>
</template>

<script>
  import {addChannel}from '../../api/channel/index.js'
  import {setObj}from '../../api/admin/user/index.js'
  export default {
    name: 'reviseTheme',
    methods:{
      passTheme(){
        this.pageSet.push(this.value);
        this.pageSet.push(this.value);
        this.pageSet.push(this.value);
        console.log(this.value);
        addChannel(this.$store.state.userid, this.channelStyle1)
        addChannel(this.$store.state.userid, this.channelStyle2)
        addChannel(this.$store.state.userid, this.channelStyle3)
        addChannel(this.$store.state.userid, this.channelStyle4)
        setObj(this.$store.state.userid, this.pageSet)
        }
      },
    data () {
      return {
        channelStyle1:{
          chName:''
        },
        channelStyle2:{
          chName:''
        },
        channelStyle3:{
          chName:''
        },
        channelStyle4:{
          chName:''
        },
        pageSet:[],
        photoShow: {
          backgroundImage: 'url(' + require('../../assets/img/welcome.png') + ')',
          width: '900px',
          height: '500px',
        },
        options: [{
          value: '主题1',
          label: '主题一'
        }, {
          value: '主题2',
          label: '主题二'
        }, {
          value: '主题3',
          label: '主题三'
        }, {
          value: '主题4',
          label: '主题四'
        }],
        value: ''
      }
    }
  }
</script>

<style scoped>

</style>
