<template>
        <div class="line" >
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item ><router-link to="/modeCont">首页</router-link></el-menu-item>
            <el-submenu v-for="(channel,i) in this.channels" :index="i.toString()">
                <template slot="title"><router-link v-bind:to="channel.title" >{{channel.title}}</router-link></template>
                <el-menu-item v-for="subChannel in channel.childrenTitle"><a  v-bind:href=subChannel.href target="_blank">{{subChannel.title}}</a></el-menu-item>
            </el-submenu>
        </el-menu>
        </div>
</template>

<script>
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

        }
    }, beforeCreate: function(){
        getALLChannels()
    }
    }

</script>

<style scoped>
</style>
