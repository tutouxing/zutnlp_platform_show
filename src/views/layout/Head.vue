<template>
  <div id="head">
    <el-row :gutter="20">
      <el-col :span="6">
        <div id="left" class="grid-content ">
          <h2>智能快速开发平台</h2>
          <!--<i class="iconfont icon-user"></i>-->
        </div>
      </el-col>
      <el-col :span="2" :offset="14">
        <div id="center" class="grid-content ">
          <i class="iconfont icon-user" style="size: A4"></i>
          <p>{{this.username}}</p>
        </div>
      </el-col>
      <el-col :span="2">
        <div id="right" class="grid-content ">
          <div v-if="this.username == '未登录'">
            <router-link to="/login" style="color: white;text-decoration: none">登录</router-link>
            <router-link to="/regist" style="color: white;text-decoration: none ">注册</router-link>
          </div>
          <div v-if="this.username !== '未登录'" @click="logout" style="color: white">
            注销
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        name: 'top',
        data() {
            return {
                username: "",
            }
        },
        mounted() {
            if (this.$store.state.username === "") {
                this.username = "未登录"
            } else {
                this.username = this.$store.state.username;
            }
        },
        watch:{
            username:function () {
                if (this.$store.state.username === "") {
                    return "未登录"
                } else {
                    return this.$store.state.username;
                }
            }
        },
        methods:{
            logout(){
                this.username = "未登录";
                this.$store.commit("SET_USERNAME_STATE",'');
                this.$nextTick(()=>{
                    this.$router.replace('/login')
                })
            }
        }
    }
</script>
<link ref="stylesheet" href="http://at.alicdn.com/t/font_926813_2c4yoi208d.js"/>
<style>
  @import url("http://at.alicdn.com/t/font_926813_2c4yoi208d.css");
  .el-row {
    margin-bottom: 20px;
    &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: white;
  }
  .bg-purple {
    background: rgb(84, 92, 100);
  }
  .bg-purple-light {
    background: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    color: white;
  }
  .row-bg {
    padding: 10px 0;
    background-color: rgb(84, 92, 100);
  }
</style>
