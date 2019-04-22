<template>
    <div class="tab-container">
        <!--tabs标签用于绑定事件，可以用@click-tab-->
        <!--修改-->
        <tab-pane></tab-pane>
    </div>
</template>

<script>
    import tabPane from './groupDetail'
    export default {
        name: "index",
        components:{
            tabPane,
        },
        data(){
            return{
            }
        },
        created(){
        },
        methods:{
        },
    }
</script>

<style scoped>
    .tab-container{
        line-height: 60px;
    }
</style>