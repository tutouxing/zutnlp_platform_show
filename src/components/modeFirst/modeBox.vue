<template>
    <div class="exBox">
        <div class="modeBoxslide">
            <mode-sec-slide-image :mytopic=channelItem></mode-sec-slide-image>
        </div>
        <div class="modeBoxslide">
            <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
           <span style="color:#ba2636">{{channelItem}}</span>

            <el-button style="float: right; padding: 3px 0" type="text" >
                <router-link v-bind:to="'/modeCont/'+channelItem">更多>></router-link></el-button>
        </div>
        <div v-for="(item,index) in this.TitleList "v-if="index <5">
            <li class="liList"><router-link :to="{path:'/modethirdCont/'+oldTitleList[index].title}" type="li">{{item}}</router-link></li>
        </div>
        </el-card>
        </div>
    </div>
</template>

<script>
    import modeSlideImage from './modeSlideImage'
    import ModeSecSlideImage from "./modeSecSlideImage";
    export default {
        name: "modeBox",
        props: {
            channelItem: String,
            required: true
        },
        data(){
            return{

            }
        },
        computed:{
            TitleList:function () {
                var i=0;
                var title=[];
                var AllChennel= this.$store.state.channel
                for (;i<AllChennel.length;i++){
                    if(this.channelItem===AllChennel[i].chName){
                        var m=0;
                        for (;m<AllChennel[i].contents.length;m++) {
                            var split=''
                                if (AllChennel[i].contents[m].title.length<=35)
                            {
                               split=AllChennel[i].contents[m].title
                            }
                            if (AllChennel[i].contents[m].title.length>35){
                                split=AllChennel[i].contents[m].title.toString().substring(0,35)+"..."
                            }

                            title.push(split)
                        }
                    }
                }
                console.log(title)
                return title
            },
            oldTitleList:function () {
                var i = 0;
                var title = [];
                var AllChennel = this.$store.state.channel
                for (; i < AllChennel.length; i++) {
                    if (this.channelItem === AllChennel[i].chName) {
                        var m = 0;
                        for (; m < AllChennel[i].contents.length; m++) {
                            var split = AllChennel[i].contents[m]
                            title.push(split)
                        }
                    }
                }
                console.log(title)
                return title
            }
            }
        ,methods:{
        },
        components:{
            ModeSecSlideImage,
            modeSlideImage
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width:100%;
        height: 100%;

    }
    .modeBoxslide{
        width: 49%;
        margin-left: 1%;
        height: 300px;
        float:left;
    }
    .exBox{
        text-align : left;
        width: 90%;
        height: 300px;
        float: left;

    }
    /*a:hover{color: #FF4921}*/
    /*a{text-decoration: none;}*/
    /*a:visited{color:#0a0a0a}*/
    /*a:active{color: #0a0a0a}*/
    /*a:link{color:#0a0a0a }*/
    a {color:#252525; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}
    .liList{
        float:left;
        margin-left: 5%;
        margin-left: 6%;
        text-align:left;
        line-height:28px;
        color:#666;
        text-decoration:none;
        width: 100%;
        height: 30px;
        margin:5px;
    }
</style>