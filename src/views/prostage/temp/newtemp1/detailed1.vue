<template>
    <div>
        <span>{{this.datel[0].title}}</span>
    </div>

</template>

<script>
    export default {
        name: "detailed",
        data(){
            return{
                datel:[],
            }
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

</style>