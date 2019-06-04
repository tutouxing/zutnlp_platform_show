<template>
    <div>
        <Header></Header>
        <div v-html="this.datas">
        </div>
    </div>

</template>

<script>
    import Header from '../../index/phead'
    export default {
        name: "detailed",
        data(){
            return{
                datas:"",
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
                this.datas=this.$route.params.item.textHref;
                console.log(this.$route.params.item);
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