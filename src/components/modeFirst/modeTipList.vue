<template>
<div>
<!--        <ul v-for="items in this.$store.state.channel&&items!=''" class="text item">-->
<!--            <div v-if="items.chName==retitle">-->
<!--                <li class="liList" v-for="(content,index) in items.contents" v-if="index <7&&content.title!=null">-->
<!--                    <router-link :to="{path:'/modethirdCont/'+content.title,query:{title:content.title}}">{{content.title}}</router-link>-->
<!--            </li>-->
<!--            </div>-->
<!--        </ul>-->

    <div v-for="(item,index) in this.TitleList "v-if="index <5">
        <li class="liList"><router-link :to="{path:'/modethirdCont/'+item}" type="li">{{item}}</router-link></li>
    </div>
</div>
</template>

<script>
    export default {
        name: "modeTipList",
        data() {
            return {

                reChannel:"fggfg"
            }
        },props:{
            retitle:""
        },computed:{
            TitleList:function () {
                var i=0;
                var title=[];
                var AllChennel= this.$store.state.channel
                for (;i<AllChennel.length;i++){
                    if(this.retitle===AllChennel[i].chName){
                        var m=0;
                        for (;m<AllChennel[i].contents.length;m++) {
                            var split=''
                            if (AllChennel[i].contents[m].title.length<=30)
                            {
                                split=AllChennel[i].contents[m].title
                            }
                            if (AllChennel[i].contents[m].title.length>30){
                                split=AllChennel[i].contents[m].title.toString()
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
    }
</script>

<style scoped>
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
    a {color:#252525; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}


</style>