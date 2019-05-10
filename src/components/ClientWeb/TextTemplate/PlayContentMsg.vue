<template>
    <h3>{{AllMsg.TextMsg.HeadLine}}</h3>
    <p style="margin-top: 20%">{{AllMsg.TextMsg.TextContent}} </p>
</template>

<script>
    export default {
        name: "PlayContentMsg",
        data(){
           return {
               AllMsg:{
                   TextMsg:[
                       {
                           HeadLine:   标题   ,//大字标题
                           TextContent:   sdsadasdasdasdasda   ,//文本内容
                           Iconograph:      ,//插图
                       }
                   ],

               }
           }
        },
        methods:{

        },
        mounted(){
            this.ProjectName=this.$route.params.toconfigtable;//接收唯一标识id
        }
    }
</script>

<style scoped>

</style>