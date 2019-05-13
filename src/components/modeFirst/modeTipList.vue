<template>
<div>
        <ul v-for="items in this.$store.state.channel" class="text item">
            <div v-if="items.chName==retitle">
                <li class="liList" v-for="(content,index) in items.contents" v-if="index <7&&content.title!=null">{{content.title}}</li>
            </div>
        </ul>

</div>
</template>

<script>
    export default {
        name: "modeTipList",
        data() {
            return {

                reChannel:"fggfg"
            }
        },props:{
            retitle:""
        }
    }
</script>

<style scoped>
    .liList{
        float:left;
        margin-left: 5%;
        margin-left: 6%;
        text-align:left;
        line-height:28px;
        color:#666;
        text-decoration:none;
        width: 100%;
        height: 30px;
        margin:5px;
    }
</style>