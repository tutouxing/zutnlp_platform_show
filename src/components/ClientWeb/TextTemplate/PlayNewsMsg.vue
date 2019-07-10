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
        <div v-if="isshow" style="margin-top: 20px">

            <h4>评论区</h4>
            <p v-show="item.status==1" style="margin-top: 10px" v-if="comments.comments.length>0" v-for="item in comments.comments">
                {{item.details}}
            </p>
        </div>
    </el-footer>
</el-container>

</template>
<script>
    export default {
        name: "PlayNewsMsg",
        provide(){
            return{
               // //send:this.send
            }
        },
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
                comment:'',
                comments:'',
                isshow:true
            }
        },
        methods:{
            getdata(){

                this.AllMsg.OnlyMsg=this.$route.params.items;////接收唯一标识id

                console.log(  this.AllMsg.OnlyMsg.id);
                let url='http://localhost:8848/Content/'+this.AllMsg.OnlyMsg.id.toString();
                let that=this;

                this.$axios.get(url, {
                }).then(function (response)
                {

                    that.comments=response.data;

                    //console.log(that.comments.comments[0].details);

                }).catch(function (error) {
                    console.log(error);
                });
                console.log("getdata");
            },
            send(){
                if(this.comment!=='')
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
                            contentId:that.AllMsg.OnlyMsg.id
                        },
                        data:{
                            details:that.comment ,
                        }
                    }
                );
                this.comment='';
                        this.isshow = false
                        this.getdata();
                this.$nextTick(()=>
                        {
                            this.getdata();
                            this.isshow=true;
        console.log("nexttike");
                    });
                    //

                 /*
                    this.$forceUpdate();
*/
              // this.$router.push({path:'/PlayNewsMsg'});
                }


            },
        },
        mounted(){


            this.AllMsg.OnlyMsg=this.$route.params.items;////接收唯一标识id
            console.log( this.AllMsg.OnlyMsg.id+"id");
            //console.log(  this.AllMsg.OnlyMsg.id);
            let url='http://localhost:8848/Content/'+this.AllMsg.OnlyMsg.id.toString();
            let that=this;

            this.$axios.get(url, {
            }).then(function (response)
            {

                that.comments=response.data;
                console.log(response.data)

                //console.log(that.comments.comments[0].details);

            }).catch(function (error) {
                console.log(error);
            });


            console.log(this.comments.length+"长度");
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