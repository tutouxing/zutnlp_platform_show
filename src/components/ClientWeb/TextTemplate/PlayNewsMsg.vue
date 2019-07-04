<template>
    <!--<div  style="text-align:center; width: 520px; margin-left: 30%" >
        <h2>{{AllMsg.OnlyMsg.title}}</h2>
      &lt;!&ndash;  <p>{{AllMsg.TextMsg[0].FrontText}} </p>&ndash;&gt;


        <img src="AllMsg.OnlyMsg.Iconograph" style="width: 510px;height: 316px"/>
        <p>{{   AllMsg.OnlyMsg.text}} </p>
       &lt;!&ndash; <p>{{AllMsg.TextMsg[0].TailText}} </p>&ndash;&gt;
    </div>-->


<el-container>


    <div v-html="this.AllMsg.OnlyMsg.textHref">




    </div>

    <el-footer style="margin: auto">
        <div style="margin-top: 50px">
            <el-input  v-model="comment" style="float: left;width: 350px" placeholder="请输入评论" ></el-input><el-button type="primary" style="display:inline-block; margin-left: 30px" v-on:click="send()">确定</el-button>
        </div>
    </el-footer>
</el-container>

</template>
<script>
    export default {
        name: "PlayNewsMsg",
        data(){
            return {
                AllMsg:{
                    TextMsg:[
                        {
                            HeadLine:'标题',/////大字标题
                            TextContent:'sdsadasdasdasdasda',//文本内容
                            Iconographs:[
                                {

                                }
                            ],//插图
                            Text:[
                                {
                                    msg:'',
                                }
                            ],
                            Iconograph:'',
                            FrontText:'',
                            TailText:''
                        }
                    ],
                    OnlyMsg:{

                    }
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
            this.AllMsg.OnlyMsg=this.$route.params.items;////接收唯一标识id
          /*  for(let i=0;i<this.AllMsg.TextMsg[1].Iconograph.length;i++)
            {

            }
                let that=this;
                this.AllMsg.TextMsg[0].FrontText= this.AllMsg.OnlyMsg.text.toString().substr(0,that.AllMsg.OnlyMsg.text.length/2);
                this.AllMsg.TextMsg[0].TailText= this.AllMsg.OnlyMsg.text.toString().substr(that.AllMsg.OnlyMsg.text.length/2,that.AllMsg.OnlyMsg.text.length);
*/


        }

    }
</script>

<style scoped>

</style>