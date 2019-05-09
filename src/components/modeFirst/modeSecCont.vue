<template>
    <el-container>
        <el-header><modeDir></modeDir></el-header>
        <el-main >
            <mode-net-name class="divinter"></mode-net-name>
            <div class="secCont">
                <modeSecDir ></modeSecDir>
                <div class="line"></div>
                <div class="divinline"><mode-sec-slide-image></mode-sec-slide-image></div>
                <div class="divinline"><mode-tip-list></mode-tip-list></div>
                <div class="modeImageBoxCss"><mode-image-box>12121212</mode-image-box></div>
                Main+{{$route.params.title}}
            </div>
        </el-main>
        <el-footer><modeFoot></modeFoot></el-footer>
    </el-container>
</template>

<script>
    import modeDir from './modeDir'
    import modeFoot from './modeFoot'
    import modeSecDir from './modeSecDir'
    import modeNetName from './modeNetName'
    import modeSecSlideImage from './modeSecSlideImage'
    import modeTipList from './modeTipList'
    import modeImageBox from './modeImageBox'
    export default {
        name: "modeSecCont",
        components:{
            modeSecDir,
            modeDir,
            modeFoot,
            modeNetName,
            modeSecSlideImage,
            modeTipList,
            modeImageBox
        }
    }
</script>

<style scoped>
    .secCont{
        margin-left: 6%;
        margin-right: 6%;
        margin-top: 1px;
    }
    .divinter{
        margin-top: 10px;
        margin-bottom: 40px;
    }
    .divSecDir{
        text-align: center;
    }
    .secSlideImage{
        width: 450px;
        height: 300px;
        margin-top: 3%;
        background-color: #00C1DE;
    }
    .divinline{
        margin-left: 10px;
        width: 49%;
        margin-top: 4px;
        float:left;
    }
    .modeImageBoxCss{
        margin-top: 30%;
        width: 30%;
        height: 30%;
    }

</style>