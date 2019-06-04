<template>
        <div class="line" >
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item ><router-link to="/modeCont">首页</router-link></el-menu-item>
            <el-submenu v-for="(channel,i) in this.$store.state.channel" :index="i.toString()">
                <!--<el-submenu v-bind:class="newchannel" v-for="(channel,i) in newchannel.channe" :index="i.toString()">-->
                <template slot="title"><router-link v-bind:to="'/modeCont/'+channel.chName" >{{channel.chName}}</router-link></template>
                <!--<el-menu-item v-for="subChannel in channel.childrenTitle"><a  v-bind:href=subChannel.href target="_blank">{{subChannel.title}}</a></el-menu-item>-->
               <!-- <template slot="title"><router-link v-bind:to="modeCont+channel.chName" >{{channel.chName}}</router-link></template>-->
            </el-submenu>
        </el-menu>
        </div>
</template>

<script>
    import {getChannelAll} from '../../api/mode/modeChannel.js'
    import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data: function(){
        return {
            channels:[
                {
                    title:'新闻',
                    href:'https://www.ele.me',
                    childrenTitle:[{
                        title:'新闻1',
                        href:'https://www.baidu.com'
                    },{
                        title:'新闻2',
                        href:'https://www.ele.me',
                    },{
                        title:'新闻3',
                        href:'https://www.ele.me'
                    }]
                },
                {
                    title:'文档',
                    childrenTitle:[{
                        title:'文档1',
                        href:'https://www.ele.me'
                    },{
                        title:'文档2',
                        href:'https://www.ele.me',
                    },{
                        title:'文档3',
                        href:'https://www.ele.me'
                    }]
                }
            ]
        }
    }
    ,methods: {
        handleSelect(key, keyPath) {
            //alert(key,keyPath)
        },
        getAllChannels(){
            //axios(getChannelAlactiveIndex2l(this.))
        }
    },Create: function () {
        console.group('beforeCreate 打印channel===============》');
        //console.log(this.$store.state.channel); //undefined

    }
    // ,computed:{
    //     newchannel: function () {
    //         // 计算过程省略，假设得出了isActive和isDanger的布尔值
    //         return {
    //             channelList:this.$store.state.channel
    //             'text-danger': isDanger
    //         }
    //     }
    // }
    }

</script>

<style scoped>
    a:hover{color: #aaccee}
    a{text-decoration: none;}
    a:visited{color:#ffffff}
    a:active{color: #ffffff}
</style>
