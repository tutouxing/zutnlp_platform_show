<template>
  <div>
    <el-card>
      <el-row>
              <svg class="icon_set" aria-hidden="true">
                  <use xlink:href="#icon-setup"></use>
              </svg>
              <span style="font-size: 25px; font-weight:bold"> 一级页面配置</span>
      </el-row>
      <el-row style="margin-top: 30px">
        <el-col style="width: 10%">
          <p style="font-size: 18px">*选择主题: </p>
        </el-col>
        <el-col style="width: 18%">
          <el-select v-model="value" placeholder="请选择" @change="changeShow">
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
        <el-col style="width:25%" v-for="(items,i) in this.channelNum">
        <el-col style="width:40%">
          <p style="font-size: 18px">{{channelStyle[i].label}}</p>
        </el-col>
        <el-col style="width:60%">
        <el-input v-model="channelStyle[i].chName" placeholder="请输入内容"></el-input>
        </el-col>
        </el-col>
      </el-row>
      <el-row>
        <el-button type="primary" style="margin-top: 60px;margin-bottom: 50px" @click="passTheme()">保存</el-button>
        <el-button type="primary" style="margin-top: 60px;margin-bottom: 50px" @click="preview">预览</el-button>
        <el-button type="info">重置</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
    import {addChannel} from '../../api/channel/index.js'
    import {setObj,getObj} from '../../api/admin/user/index.js'
    import "../../assets/icon/iconfont_set";
    export default {
        name: 'reviseTheme',
      created(){
        this.getChannel();
      },
        methods: {
            changeShow(val) {
                if (val == "/prostage") {
                  this.photoShow.backgroundImage = 'url(' + require('../../assets/img/themeone.png') + ')';
                  this.channelNum=4;
                }
                if (val == "/ClientWeb/TextTemplate/FrameWork"){
                  this.photoShow.backgroundImage = 'url(' + require('../../assets/img/themetwo.png') + ')';
                  this.channelNum=6;
                }
                if (val == "/modeCont")
                    this.photoShow.backgroundImage = 'url(' + require('../../assets/img/styleone.png') + ')';
                if (val == "主题四")
                    this.photoShow.backgroundImage = 'url(' + require('../../assets/img/styletwo.png') + ')';
            },
            passTheme() {
                this.$store.commit("SET_FIRSTPAGE_STATE",this.value);
                for(let i=0;i<this.channelNum;i++){
                  if(this.channelStyle[i].chName!==''){
                    addChannel(this.$store.state.userid, this.channelStyle[i])
                  }
                }
                setObj(this.$store.state.userid, this.$store.state.pageSet);
                this.$message({
                    message: '设置成功',
                    type: 'success'
                });
            },
            preview(){
              this.$router.push(this.value);
            },
          getChannel() {
            getObj(this.$store.state.userid).then(res => {
              this.firstPage = res.data.page1
              if (this.firstPage != "") {
                this.value = this.firstPage;
                let i;
                for ( i = 0; i < res.data.channels.length; i++) {
                  this.channelStyle[i].chName=res.data.channels[i].chName
                }
              }
            })
          }

        },
        data() {
            return {
                channelNum:4,
                photoShow: {
                    backgroundImage: 'url(' + require('../../assets/img/welcome.png') + ')',
                    width: '900px',
                    height: '500px',
                },
                options: [{
                    value: '/prostage',
                    label: '主题一'
                }, {
                    value: '/ClientWeb/TextTemplate/FrameWork',
                    label: '主题二'
                }, {
                    value: '/modeCont',
                    label: '主题三'
                }, {
                    value: '主题四',
                    label: '主题四'
                }],
                channelStyle: [{
                    chName: '',
                    label: '栏目一标题：'
                }, {
                    chName: '',
                    label: '栏目二标题：'
                }, {
                    chName: '',
                    label: '栏目三标题：'
                }, {
                    chName: '',
                    label: '栏目四标题：'
                },{
                   chName: '',
                   label: '栏目五标题：'
                },{
                  chName: '',
                  label: '栏目六标题：'
                }, ],
                value: '',
               firstPage:''
            }
        }
    }
</script>

<style scoped>
    .icon_set {
        width: 2.5em;
        height: 2.5em;
        fill: currentColor;
    }
</style>
