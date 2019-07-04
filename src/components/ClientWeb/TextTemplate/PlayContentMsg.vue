<template>
    <div  style="text-align:center; width: 520px; margin-left: 30%" >
    <h2>{{AllMsg.TextMsg[0].HeadLine}}</h2>
    <p style="margin-top: 100px">{{AllMsg.TextMsg[0].TextContent}} </p>


        <div style="margin-top: 50px;">
            <!--display:inline-block;-->
            <el-input  v-model="comment" style="float: left;width: 350px" placeholder="请输入评论" ></el-input><el-button type="primary" style="display:inline-block;" v-on:click="send()">确定</el-button>

        </div>

        <div>
            <p v-for="item in comments">
                {{item.details}}
            </p>
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
                comment:'',
                comments:'',
            }
        },
        methods:{
            send(){
                let url='http://localhost:8848/comment/add';
                let that=this;
                this.$axios(
                    {
                        method:'post',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        //withCredentials:true,
                        params:{
                            contentId:that.AllMsg.TextMsg[1].id
                        },
                        data:{

                            details:that.comment ,

                        }

                    }
                );
                this.comment='';
                this.$forceUpdate();
                this.$router.push({path:'/PlayContentMsg'});


            }

        },
        mounted(){


            let url='http://localhost:8848/comment/?page=1&limit=20';
            let that=this;
            this.$axios.get(url, {}).then(function (response) {

                that.comments=response.data;


            }).catch(function (error) {
                console.log(error);
            });

            console.log(this.comments);




            console.log(this.$route.params.items);
             this.AllMsg.TextMsg[1]=this.$route.params.items;////接收唯一标识
            console.log( this.AllMsg.TextMsg[1].id+"ididid");
            this.AllMsg.TextMsg[0].HeadLine=this.$route.params.items.title;
            this.AllMsg.TextMsg[0].TextContent=this.$route.params.items.text;

        }
    }
</script>

<style scoped>

</style>