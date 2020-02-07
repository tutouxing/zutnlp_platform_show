<template>
    <div  style="text-align:center; width: 520px; margin-left: 30%" >
        <h3>{{AllMsg.TextMsg[1].HeadLine}}</h3>
        <p>{{AllMsg.TextMsg[1].TextContent}}</p>
        <video width="500" height="255" controls="controls" autoplay="autoplay">
            <source src="../Picture/movie.ogg" type="video/ogg" />
            <source src="AllMsg.TextMsg[1].Video" type="video/mp4" />
            <object data="../Picture/videos.mp4" width="500" height="255">
            <embed width="500" height="255" src="../Picture/videos.mp4" />
            </object>
        </video>

    </div>
</template>

<script>
    export default {
        name: "PlayVideosMsg",
        data(){
            return {
                AllMsg:{
                    TextMsg:[
                        {
                            HeadLine:'标题'    ,//大字标题
                            TextContent:'sdsadasdasdasdasda',//文本内容
                            Iconograph:'',//插图
                            Video:'',
                        }
                    ],

                }
            }
        },
        methods:{

        },
        mounted(){
            this.AllMsg.TextMsg[1]=this.$route.params.items;///////接收唯一标识/
        }
    }
</script>

<style scoped>

</style>