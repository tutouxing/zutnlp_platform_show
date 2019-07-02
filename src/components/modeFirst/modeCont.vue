<template>
<div bgcolor="#FFFFFF">
    <el-container>
        <div class="bg">
        <el-header >
                <mode-net-name></mode-net-name>
            </el-header>
        </div>
        <div class="bg">
            <el-main>
                <mode-dir>
                </mode-dir>
                <mode-slide-image >
                </mode-slide-image>
            </el-main>
        </div>
        <div class="boxCont" v-for="(item,i) in this.$store.state.channel ">
            <mode-box v-if="i%2==0" class="divinter"  :channelItem="item.chName"></mode-box>
            <mode-box2 v-if="i%2==1" class="divinter"  :channelItem="item.chName"></mode-box2>
        </div>

        <el-footer>
            <mode-foot></mode-foot>
        </el-footer>
    </el-container>
</div>
</template>

<script>
    import modeNetName from './modeNetName'
    import modeBox2 from './modeBox2'
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
        modeNetName,
        modeBox2
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
    beforeRouteEnter(to,from,next){
        window.document.body.style.backgroundColor="#FFFFFF";
        next();
    },
    beforeRouteLeave(to,from,next){
        window.document.body.style.backgroundColor="#FFFFFF";
        next();
    }
    }

</script>


<style scoped>
    .bg{
        background-color: brown;
    }
    .divinter{
        margin-top: 30px;
    }.boxCont{
             width: 100%;
             margin-left: 5%;
             margin-right:5%;
             text-align:center
         }
    a {color:#252525; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}
</style>