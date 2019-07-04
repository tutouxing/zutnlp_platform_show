<template>
    <div>
    <el-header><modeDir></modeDir></el-header>
    <el-main><mode-net-name></mode-net-name>
        <mode-third-text></mode-third-text>
        <modethirdtxt></modethirdtxt>
    </el-main>
        <div class="modeBoxslide" >
            <el-card shadow="never" >
                <div slot="header" class="clearfix">
                    <span>友情链接</span>

                </div>
                <div v-for="item in 15" class="Link">
                    <router-link to="/welcome">外部链接</router-link>
                </div>
            </el-card>
        </div>
    <el-footer><modeFoot></modeFoot></el-footer>
    </div>
</template>

<script>
    import modethirdtxt from './modethirdtxt'
    import modeDir from './modeDir'
    import modeFoot from './modeFoot'
    import modeNetName from './modeNetName'
    import modeThirdText from './modeThirdText'
    import ModeImageBox from "./modeImageBox";
    export default {
        name: "modethirdCont",
        components:{
            ModeImageBox,
            modeDir,
            modeFoot,
            modeNetName,
            modeThirdText,
            modethirdtxt
        }
    }
</script>

<style scoped>
    a {color:#252525; text-decoration:none; font-family: "Helvetica Neue"}
    a:visited {text-decoration:none; font-family: "Helvetica Neue"}
    a:hover {color:#ba2636;text-decoration:underline;font-family: "Helvetica Neue"}
    a:active {color:#ba2636; font-family: "Helvetica Neue"}
    .modeBoxslide{
        margin-top: 2%;
        margin-left: 5%;
        margin-right: 5%;
        height: 300px;
        float:left;
    }
    .Link{
        width: 20%;
        height: 25px;
        float: left;
        ;
    }
</style>