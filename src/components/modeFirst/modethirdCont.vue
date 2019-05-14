<template>
    <div>
    <el-header><modeDir></modeDir></el-header>
    <el-main><mode-net-name></mode-net-name>
    <mode-third-text></mode-third-text>
    <mode-image-box></mode-image-box></el-main>
    <el-footer><modeFoot></modeFoot></el-footer>
    </div>
</template>

<script>
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
            modeThirdText
        }
    }
</script>

<style scoped>

</style>