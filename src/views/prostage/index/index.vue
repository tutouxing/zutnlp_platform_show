<template>
    <div>
        <el-container>
            <el-header height="80px">
                <Header></Header>
            </el-header>
            <el-main>
                <!--<h3>hello</h3>-->
                <Amain></Amain>
                <!--<router-view>
                </router-view>-->
            </el-main>
            <el-footer height="80px">
                <Bottom></Bottom>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import Header from './phead'
    import Bottom from './bottom'
    import Amain  from '../temp/newtemp1/amain'
    export default {
        name: "index",
        components: {
            Amain,
            Header,
            Bottom,
        },

    }
</script>

<style >
    .el-header{
        /* background-color: #B3C0D1;*/
        color: #333;
        height: 3000px;


        /*  line-height: 200px;*/
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        line-height: 160px;
    }


</style>