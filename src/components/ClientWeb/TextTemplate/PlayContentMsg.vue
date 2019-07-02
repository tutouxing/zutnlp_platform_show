<template>
    <div  style="text-align:center; width: 520px; margin-left: 30%" >
    <h2>{{AllMsg.TextMsg[0].HeadLine}}</h2>
    <p style="margin-top: 100px">{{AllMsg.TextMsg[0].TextContent}} </p>


        <div style="margin-top: 50px;">
            <!--display:inline-block;-->
            <el-input  v-model="comment" style="float: left;width: 350px" placeholder="请输入评论" ></el-input><el-button type="primary" style="display:inline-block;" v-on:click="send()">确定</el-button>

        </div>
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

                },
                comment:''
            }
        },
        methods:{
            send(){
                let url='http://127.0.0.1:8848/Pros/delete';
                this.$axios(
                    {
                        method:'post',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        //withCredentials:true,
                        params:{
                            comment:comment
                        },
                        data:{
                            //未知
                        }

                    }
                );
            }

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