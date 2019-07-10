<template>
    <div>
    <el-row>
        <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" style="width: 300px">
                <div  class="transition-box"><i class="el-icon-tickets"> 内容发布数</i></div>
                <div style="padding: 10px;">
                    <span>今日：{{this.$store.state.Data.todayContentNum}}</span>
                </div>
                <div style="padding: 10px;">
                    <span>累计：{{this.contentNum}}</span>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" style="width: 300px">
                <div  class="transition-box2"><i class="el-icon-service"> 会员注册数</i></div>
                <div style="padding: 10px;">
                    <span>今日：2</span>
                </div>
                <div style="padding: 10px;">
                    <span>累计：26</span>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" style="width: 300px">
                <div  class="transition-box3"><i class="el-icon-edit"> 文章评论数</i></div>
                <div style="padding: 10px;">
                    <span>今日：16</span>
                </div>
                <div style="padding: 10px;">
                    <span>累计：36</span>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" style="width: 300px">
                <div  class="transition-box4"><i class="el-icon-message"> 网站留言数</i></div>
                <div style="padding: 10px;">
                    <span>今日：1</span>
                </div>
                <div style="padding: 10px;">
                    <span>累计：2</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row>
        <el-col span="12">
               <dema></dema>
        </el-col>
        <el-col span="12">
              <demo></demo>
        </el-col>
    </el-row>
        <remote-js src="http://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
    </div>
</template>

<script>
    import dema from '../../components/Echarts/DataChart/dema.vue'
    import demo from '../../components/Echarts/DataChart/dema1.vue'
  export default {
    name: 'dataDemo',
    components: {
      dema,
      demo,
      'remote-js':{
      render(createElement) {
        return createElement('script', {attrs: {type:'text/javascript', src: this.src}});
      },
        props:{
        src:{type: String,required:true},
      },
      }
    },
    data(){
      return{
        contentNum:0,
        ip:''
      }
    },
    mounted(){
      this.Num();
    },
    beforeDestroy(){
      this.ip=returnCitySN["cname"];
      console.log(this.ip)
    },
    methods:{
      Num(){
        for(var i=0;i<this.$store.state.channel.length;i++){
          this.contentNum+=this.$store.state.channel[i].contents.length
        }
     }
    }
  }
</script>

<style scoped>
    .transition-box {
        margin-bottom: 10px;
        width: 100%;
        height: 100px;
        border-radius: 0px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
    .transition-box2 {
        margin-bottom: 10px;
        width: 100%;
        height: 100px;
        border-radius: 0px;
        background-color: #c172d8;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
    .transition-box3 {
         margin-bottom: 10px;
         width: 100%;
         height: 100px;
         border-radius: 0px;
         background-color: #fec92b;
         text-align: center;
         color: #fff;
         padding: 40px 20px;
         box-sizing: border-box;
         margin-right: 20px;
     }
    .transition-box4 {
        margin-bottom: 10px;
        width: 100%;
        height: 100px;
        border-radius: 0px;
        background-color: #17d57e;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }

</style>
