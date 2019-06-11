<template>
    <div  style="text-align:center; width: 520px; margin-left: 30%" >
    <h2>{{AllMsg.TextMsg[0].HeadLine}}</h2>
    <p>{{AllMsg.TextMsg[0].TextContent}} </p>
    </div>
</template>

<script>
    export default {
        name: "PlayContentMsg",
        data(){
            return {
                AllMsg:{
                    TextMsg:[
                        {
                            HeadLine:'标题'    ,////大字标题
                            TextContent:'sdsadasdasdasdasda',//文本内容
                            Iconograph:'',//插图
                        }
                    ],

                }
            }
        },
        methods:{

        },
        mounted(){
            console.log(this.$route.params.items);
             this.AllMsg.TextMsg[1]=this.$route.params.items;////接收唯一标识
            this.AllMsg.TextMsg[0].HeadLine=this.$route.params.items.title;
            this.AllMsg.TextMsg[0].TextContent=this.$route.params.items.text;

        }
    }
</script>

<style scoped>

</style>