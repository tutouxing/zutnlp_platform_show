<template>
    <div  style="text-align:center; width: 520px; margin-left: 30%" >
    <h2>{{AllMsg.TextMsg[0].HeadLine}}</h2>
    <p style="margin-top: 100px">{{AllMsg.TextMsg[0].TextContent}} </p>




        <div style="margin-top: 50px;">
            <!--display:inline-block;-->
            <el-input  v-model="comment" style="float: left;width: 350px" placeholder="请输入评论" ></el-input><el-button type="primary" style="display:inline-block;" v-on:click="send()">确定</el-button>

        </div>

<div v-if="isshow" style="margin-top: 20px">
    <h4>评论区</h4>
            <p v-show="item.status==1" style="margin-top: 10px" v-if="comments.comments.length>0" v-for="item in comments.comments">
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
                isshow:true
            }
        },
        methods:{
            gatdata(){
                let url='http://localhost:8848/Content/'+this.AllMsg.TextMsg[1].id.toString();
                let that=this;

                this.$axios.get(url, {
                }).then(function (response)
                {

                    that.comments=response.data;

                    //console.log(that.comments.comments[0].details);

                }).catch(function (error) {
                    console.log(error);
                });
            },
            send(){
                if(this.comment!='')
                {
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

                    this.isshow=false;
                    this.gatdata();
                    this.$nextTick(()=>{

                        this.gatdata();
                        this.isshow=true;
                    })
                }


                this.comment='';
               // this.$forceUpdate();
               // this.$router.push({path:'/PlayContentMsg'});


            }

        },
        mounted(){
           console.log("contentmsg");
           // console.log(this.$route.params.items);
            this.AllMsg.TextMsg[1]=this.$route.params.items;////接收唯一标识

            console.log(   this.AllMsg.TextMsg[1]);
           // console.log( this.AllMsg.TextMsg[1].id+"ididid");
            this.AllMsg.TextMsg[0].HeadLine=this.$route.params.items.title;
           this.AllMsg.TextMsg[0].TextContent=this.$route.params.items.text;
            console.log("contentmsg1");

            let url='http://localhost:8848/Content/'+this.AllMsg.TextMsg[1].id.toString();
            let that=this;

            this.$axios.get(url, {
            }).then(function (response)
            {

                that.comments=response.data;

                //console.log(that.comments.comments[0].details);

            }).catch(function (error) {
                console.log(error);
            });


/*
            console.log(this.comments.comments[0].details+'评论');
*/

           // console.log(this.comments+'评论');




        }
    }
</script>

<style scoped>

</style>