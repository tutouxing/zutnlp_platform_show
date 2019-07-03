<template>
    <div>
    <el-header><modeDir></modeDir></el-header>
    <el-main><mode-net-name></mode-net-name>
        <mode-third-text></mode-third-text>
        <modethirdtxt></modethirdtxt>
    </el-main>
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
    a {color:#252525; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}
</style>