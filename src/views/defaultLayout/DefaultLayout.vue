<template>
    <div id="DefaultLayout">
        <el-container>
            <el-header style="background-color: #2361b9">
                <Top></Top>
            </el-header>
            <el-container>
                <side-bar style="background-color: #2361b9"></side-bar>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import SideBar from './DefaultSideBar.vue'
    import Top from './DefaultHead.vue'
    import AppMain from '../layout/AppMain.vue'
    import Bar from "../../components/Echarts/twodimensional/Bar";
    import echartLine from "../../components/Echarts/twodimensional/Line";
    import user from '../../components/Admin/user/index'
    export default {
        name:'DefaultLayout',
        components:{
            Bar,
            echartLine,
            SideBar,
            Top,
            AppMain,
            user
        },
        data() {
            return {
                id: 'default'
            }
        },
        methods:{
        },

    }
</script>
