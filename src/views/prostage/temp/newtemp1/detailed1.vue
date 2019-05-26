<template>
    <div>
        <Header></Header>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <span>{{this.datel[0].title}}</span>
    </div>

</template>

<script>
    import Header from '../../index/phead'
    export default {
        name: "detailed",
        data(){
            return{
                datel:[],
            }
        },
        components:{
            Header
        },
        created(){
            this.getdetailed();
        },
        methods:{
            getdetailed(){
                this.datel[0]=this.$route.params.item;
            },
        },

    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>