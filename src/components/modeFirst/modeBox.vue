<template>
    <div class="exBox">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{channelItem}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" >
                <router-link v-bind:to="channelItem">更多</router-link></el-button>
        </div>

<!--        <div v-show="items!=null" v-for="items in this.$store.state.channel" class="text item">-->
<!--            <div v-if="items.chName==channelItem">-->
<!--            <div v-for="(content,index) in items.contents" v-if="index <5&&content.title!=null">-->
<!--                &lt;!&ndash;<router-link :to="{path:'/modethirdCont/',query:{title:content.title}}">{{content.title}}</router-link></div>&ndash;&gt;-->
<!--                <router-link :to="{path:'/modethirdCont/'+content.title,query:{title:content.title}}">{{content.title}}</router-link></div>-->
<!--            </div>-->
<!--        </div>-->
        <div v-for="(item,index) in this.TitleList "v-if="index <5">
            <li><router-link :to="{path:'/modethirdCont/'+oldTitleList[index].title}" type="li">{{item}}</router-link></li>
        </div>
    </el-card>
    </div>
</template>

<script>
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
                                if (AllChennel[i].contents[m].title.length<=15)
                            {
                               split=AllChennel[i].contents[m].title
                            }
                            if (AllChennel[i].contents[m].title.length>15){
                                split=AllChennel[i].contents[m].title.toString().substring(0,15)+"..."
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
        width:90%;
        height: 90%;

    }
    .exBox{
        text-align : left;
        width: 30%;
        height: 300px;
        float: left;
    }
    a:hover{color: #aaccee}
    a{text-decoration: none;}
    a:visited{color:#2361b9}
    a:active{color: #ffffff}
</style>