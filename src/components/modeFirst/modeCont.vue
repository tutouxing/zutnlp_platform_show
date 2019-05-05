<template>
<div bgcolor="#FFE4E1">
    <el-container>
        <el-header>
            <mode-dir>
            </mode-dir>
        </el-header>
        <el-main>
            <mode-slide-image>
            </mode-slide-image>
            <mode-box v-for="item in this.ChannelsList" :channelItem="item"></mode-box>
        </el-main>
        <el-footer>
            <mode-foot></mode-foot>
        </el-footer>
    </el-container>
</div>
</template>

<script>
    import modeDir from './modeDir'
    import modeSlideImage from './modeSlideImage'
    import modeBox from './modeBox'
    import modeFoot from './modeFoot'
    import modeImageBox from './modeImageBox'
export default {
    name: 'modeCont',
    components:{
        modeSlideImage,
        modeDir,
        modeBox,
        modeFoot,
        modeImageBox
    },
    data(){
        return{
            ChannelsList:['新闻','新闻1','新闻2','新闻3','新闻4','新闻5','新闻6','新闻7','新闻8']
        }
    }
    }

</script>


<style scoped>

</style>