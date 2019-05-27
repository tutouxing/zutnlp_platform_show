<template>
    <div>
        <div>
            <Phead></Phead>
        </div>
        <div>
            <el-row>
            <el-col :span="18">
                <div>
                    <el-button></el-button>
                </div>
            </el-col>
            <el-col :span="6">
                <Aside></Aside>
            </el-col>
        </el-row></div>
    </div>


</template>

<script>
    import Aside from './aside'
    import Phead from '../index/phead'
    export default {
        name: "amain",
        components:{
            Aside,
            Phead,
        },
    }
</script>

<style scoped>

</style>