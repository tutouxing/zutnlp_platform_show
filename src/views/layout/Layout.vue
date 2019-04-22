<template>
    <div id="layout">
        <el-container>
            <el-header height="70px" v-bind:style="{backgroundColor:this.$store.state.themeColor}">
                <Top></Top>
            </el-header>
            <el-container>
                <component :is="side" :style="{backgroundColor:this.$store.state.themeColor}"></component>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import SideBar from './SideBar.vue'
    import SideBarTwo from './SideBarTwo.vue'
    import Top from './Head.vue'
    import AppMain from './AppMain.vue'
    export default {
        name:'layout',
        components:{
            SideBar,
            Top,
            AppMain,
            SideBarTwo
        },
        data() {
            return {
                id: 'default',
                side:SideBar
            }
        },
        mounted(){
            this.setSide();
        },
        methods:{
            setSide(){
                if(this.$store.state.themeColor=='#66a3e0'){
                    this.side=SideBarTwo;
                }
                if(this.$store.state.themeColor=='#545c64'){
                    this.side=SideBar;
                }
            }
        },

    }
</script>
<style>
  #layout {
    height: 100%;
  }
  .el-container .el-header {
    padding: 0;
  }
  .el-main {
    padding: 5px 0 0 0;
  }
    /*.el-container .el-container .el-aside {*/
        /*background-color: #545c64;*/
        /*color: #2333;*/
        /*text-align: center;*/
        /*line-height: 200px;*/
        /*height: 1000px;*/
    /*}*/

    /*.el-container .el-container .el-main {*/
        /*background-color:#f5f7fa;*/
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 160px;*/
    /*}*/
    /*.el-container .el-header {*/
        /*background-color: #545c64;*/
    /*}*/
    /*.el-container {*/
        /*background-color:#545c64;*/
    /*}*/
    /*.el-container > .el-container{*/
        /*background-color:#545c64;*/
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 0px;*/
    /*}*/

</style>
