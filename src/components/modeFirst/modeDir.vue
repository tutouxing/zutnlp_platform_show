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
            <el-submenu v-for="(channel,i) in this.channels" :index="i.toString()">
                <template slot="title">{{channel.title}}</template>
                <el-menu-item v-for="subChannel in channel.childrenTitle">{{subChannel}}</el-menu-item>
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
                    childrenTitle:['子菜单一','子菜单一','子菜单一']
                },
                {
                    title:'文档',
                    childrenTitle:['子菜单一','子菜单一','子菜单一']
                }
            ]
        }
    }
    ,methods: {
        handleSelect(key, keyPath) {
            alert(key,keyPath)
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
