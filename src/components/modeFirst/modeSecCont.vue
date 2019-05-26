<template>
    <el-container>
        <el-header><modeDir></modeDir></el-header>
        <el-main >
            <mode-net-name class="divinter"></mode-net-name>
            <div class="secCont">
                <modeSecDir ></modeSecDir>
                <div class="line"></div>
                <div class="divinline"><mode-sec-slide-image></mode-sec-slide-image></div>
                <div class="divinline"><mode-tip-list :retitle=this.$route.params.title></mode-tip-list></div>
                Main+{{$route.params.title}}
            </div>
            <div class="splitLine"></div>
            <!--<div class="secLiList">
                <div class="secLiLeft">
                    <mode-Sec-List :mytopic=this.$route.params.title></mode-Sec-List>
                </div>
                <div class="secLiRight">
                    <h1>dfdfdf</h1>
                </div>
            </div>-->
            <div class="secLiList">
            <el-row>
                <el-col :span="24">
                    <div class="secLiLeft">
                    <mode-Sec-List :mytopic=this.$route.params.title></mode-Sec-List>
                    </div></el-col>

            </el-row>
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
    import modeSecList from './modeSecList'

    export default {
        name: "modeSecCont",
        components:{
            modeSecDir,
            modeDir,
            modeFoot,
            modeNetName,
            modeSecSlideImage,
            modeTipList,
            modeImageBox,
            modeSecList
        }
    }
</script>

<style scoped>
    .secCont{
        margin-left: 6%;
        margin-right: 6%;
        margin-top: 1px;
        height: 400px;
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
    .grid-content {
        background-color: rgb(44, 143, 121);
        border-radius: 4px;
        min-height: 150px;
        min-width: 100px;
    }.secLiList{
        margin-left: 6%;
        margin-right: 6%;
        margin-top: 3%;
        background: #99a9bf;
         }
    .splitLine{
        background-color: #99a9bf;
        border-radius: 4px;
        min-height: 10px;
        min-width: 90px;
        margin-right: 6%;
        margin-left: 6%;
        margin-top: 2%;
    }.secLiLeft{
        width: 70%;
        background-color: #aaccee;
         }
    .secLiRight{
        width: 28%;
        margin-left:5%;
        background-color: #E9EEF3;
    }
</style>