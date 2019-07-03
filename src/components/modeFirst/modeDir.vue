<template>
        <div class="line" >
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#8B0000"
                text-color="#fff"
                active-text-color="#ffd04b"
                width="100%">
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

    }
    }

</script>

<style scoped>
    a {color:#ffffff; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}
</style>
