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
                <el-select v-model="valueOne" placeholder="请选择" @change="changeShow">
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
                <el-input v-model="channelStyleOne1.chName" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col style="width: 10%">
                <p style="font-size: 18px">栏目二标题: </p>
            </el-col>
            <el-col  style="width: 15%;">
                <el-input v-model="channelStyleOne2.chName" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col style="width: 10%">
                <p style="font-size: 18px">栏目三标题: </p>
            </el-col>
            <el-col  style="width: 15%;">
                <el-input v-model="channelStyleOne3.chName" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col style="width: 10%">
                <p style="font-size: 18px">栏目四标题: </p>
            </el-col>
            <el-col  style="width: 15%;">
                <el-input v-model="channelStyleOne4.chName" placeholder="请输入内容"></el-input>
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
                    <el-select v-model="valueTwo" placeholder="请选择">
                        <el-option
                                v-for="item in optionsTwo"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="10">
                    <el-card :style="photoShowTwo">
                    </el-card>
                </el-col>
            </el-row>
            <el-row style="margin-top:80px ">
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目一标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model=" channelStyleTwo1.chName" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目二标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model="channelStyleTwo2.chName" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目三标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model="channelStyleTwo3.chName" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col style="width: 10%">
                    <p style="font-size: 18px">栏目四标题: </p>
                </el-col>
                <el-col  style="width: 15%;">
                    <el-input v-model="channelStyleTwo4.chName" placeholder="请输入内容"></el-input>
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
      changeShow(val) {
        if (val == "主题一")
          this.photoShow.backgroundImage = 'url(' + require('../../assets/img/themeone.png') + ')';
        if (val == "主题二")
          this.photoShow.backgroundImage = 'url(' + require('../../assets/img/themetwo.png') + ')';
        if (val == "主题三")
          this.photoShow.backgroundImage = 'url(' + require('../../assets/img/styleone.png') + ')';
        if (val == "主题四")
          this.photoShow.backgroundImage = 'url(' + require('../../assets/img/styletwo.png') + ')';
      },
      passTheme(){
        this.pageSet.push(this.valueOne);
        this.pageSet.push(this.valueTwo);
        this.pageSet.push("待添加");
        console.log(this.valueOne);
        console.log(this.valueTwo);
        addChannel(this.$store.state.userid, this.channelStyleOne1)
        addChannel(this.$store.state.userid, this.channelStyleOne2)
        addChannel(this.$store.state.userid, this.channelStyleOne3)
        addChannel(this.$store.state.userid, this.channelStyleOne4)
        setObj(this.$store.state.userid, this.pageSet)
        }
      },
    data () {
      return {
        channelStyleOne1: {
          chName: ''
        },
        channelStyleOne2: {
          chName: ''
        },
        channelStyleOne3: {
          chName: ''
        },
        channelStyleOne4: {
          chName: ''
        },
        channelStyleTwo1: {
          chName: ''
        },
        channelStyleTwo2: {
          chName: ''
        },
        channelStyleTwo3: {
          chName: ''
        },
        channelStyleTwo4: {
          chName: ''
        },
        pageSet: [],
        photoShow: {
          backgroundImage: 'url(' + require('../../assets/img/welcome.png') + ')',
          width: '900px',
          height: '500px',
        },
        photoShowTwo: {
          backgroundImage: 'url(' + require('../../assets/img/welcome.png') + ')',
          width: '900px',
          height: '500px',
        },
        options: [{
          value: '主题一',
          label: '主题一'
        }, {
          value: '主题二',
          label: '主题二'
        }, {
          value: '主题三',
          label: '主题三'
        }, {
          value: '主题四',
          label: '主题四'
        }],
        optionsTwo: [{
          value: '主题一',
          label: '主题一'
        }, {
          value: '主题二',
          label: '主题二'
        }, {
          value: '主题三',
          label: '主题三'
        }, {
          value: '主题四',
          label: '主题四'
        }],
        valueOne: '',
        valueTwo: ''
      }
    }
  }
</script>

<style scoped>

</style>
