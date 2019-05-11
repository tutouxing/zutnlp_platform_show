<template>
    <div  style="text-align:center; width: 520px; margin-left: 30%" >
        <h2>{{AllMsg.OnlyMsg.HeadLine}}</h2>
        <div v-for="(item ,index) in AllMsg.TextMsg[0].Text" >
            <p>{{item}}</p>
            <img src="AllMsg.TextMsg.Iconographs[index].picture" style="width: 510px;height: 316px"/>
        </div>

        <p>{{AllMsg.TextMsg[0].TailText}} </p>
    </div>
</template>

<script>
    export default {
        name: "PlayManyPicturesContentMsg",
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
                        }
                    ],
                    OnlyMsg:{

                    }
                },
            }
        },
        methods:{
        },
        mounted(){
            this.AllMsg.OnlyMsg=this.$route.params.items;//接收唯一标识id
            this.AllMsg.TextMsg[0].Iconographs =this.AllMsg.OnlyMsg.Iconographs;
            let that=this;
            for(let i=0;i<this.AllMsg.TextMsg[0].Iconograph.length;i++)
            {
                this.AllMsg.TextMsg.Text[i].msg=this.AllMsg.OnlyMsg.TextContent.toString().substr(i*that.AllMsg.OnlyMsg.TextContent.length/that.AllMsg.TextMsg[0].Iconograph.length,(i+1)*that.AllMsg.OnlyMsg.TextContent.length/that.AllMsg.TextMsg[0].Iconograph.length);
            }

        }
    }
</script>

<style scoped>

</style>