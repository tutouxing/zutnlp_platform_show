<template>
    <div  style="text-align:center; width: 520px; margin-left: 30%" >
        <h2>{{AllMsg.OnlyMsg.HeadLine}}</h2>
        <p>{{AllMsg.TextMsg[0].FrontText}} </p>
        <img src="AllMsg.OnlyMsg.Iconograph" style="width: 510px;height: 316px"/>
        <p>{{AllMsg.TextMsg[0].TailText}} </p>
    </div>
</template>
<script>
    export default {
        name: "PlayNewsMsg",
        data(){
            return {
                AllMsg:{
                    TextMsg:[
                        {
                            HeadLine:'标题',////大字标题
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
                }
            }
        },
        methods:{

        },
        mounted(){
            this.AllMsg.OnlyMsg=this.$route.params.items;//接收唯一标识id
            for(let i=0;i<this.AllMsg.TextMsg[1].Iconograph.length;i++)
            {

            }
                let that=this;
                this.AllMsg.TextMsg[0].FrontText= this.AllMsg.OnlyMsg.TextContent.toString().substr(0,that.AllMsg.OnlyMsg.TextContent.length/2);
                this.AllMsg.TextMsg[0].TailText= this.AllMsg.OnlyMsg.TextContent.toString().substr(that.AllMsg.OnlyMsg.TextContent.length/2,that.AllMsg.OnlyMsg.TextContent.length);




        }

    }
</script>

<style scoped>

</style>