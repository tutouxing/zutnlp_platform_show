<template>
<div bgcolor="#FFE4E1">
    <el-container>
        <el-header>
            <mode-net-name></mode-net-name>
        </el-header>
        <el-main>
            <mode-dir class="divinter">
            </mode-dir>
            <mode-slide-image class="divinter">
            </mode-slide-image>
            <div class="boxCont"><mode-box class="divinter" v-for="item in this.$store.state.channel" :channelItem="item.chName"></mode-box></div>

        </el-main>
        <el-footer>
            <mode-foot></mode-foot>
        </el-footer>
    </el-container>
</div>
</template>

<script>
    import modeNetName from './modeNetName'
    import modeDir from './modeDir'
    import modeSlideImage from './modeSlideImage'
    import modeBox from './modeBox'
    import modeFoot from './modeFoot'
    import modeImageBox from './modeImageBox'
    import { state } from '../../store/state'
    import modeTipList from './modeTipList'
export default {
    name: 'modeCont',
    components:{
        modeSlideImage,
        modeDir,
        modeBox,
        modeFoot,
        modeImageBox,
        modeNetName
    },
    data(){
        return{
            state
        }
    },
    methods:{

    },
    beforeCreate: function () {
        console.group('beforeCreate 创建前状态===============》');
        console.log(this.state); //undefined
    },
    }

</script>


<style scoped>
    .divinter{
        margin-top: 30px;
    }.boxCont{
             width: 100%;
             margin-left: 5%;
             margin-right:5%;
             text-align:center
         }
    a:hover{color: #aaccee}
    a{text-decoration: none;}
    a:visited{color:#ffffff}
    a:active{color: #ffffff}
</style>