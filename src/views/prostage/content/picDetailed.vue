<template>
    <div>
        <Header></Header>
        <div v-html="this.datas">
        </div>
    </div>
</template>

<script>
    import Header from '../index/phead'
    export default {
        name: "picDetailed",
        components:{
            Header
        },
        data(){
            return{
                datas:"",
            }
        },
        methods:{
            getdetailed(){
                this.datas=this.$route.params.item.content.textHref;
                console.log(this.$route.params.item);
            },
        },
        created(){
            this.getdetailed();
        },
    }
</script>

<style scoped>

</style>