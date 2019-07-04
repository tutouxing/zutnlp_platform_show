<template>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in picAngContArray" :key="item">
            <el-image
                    style="width: 600px; height: 300px"
                    :src="item.pic[0].url"
                    :fit="fill">
            </el-image>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "modeSecSlideImage",
        props:{
            mytopic:String
        },
        computed:{
            picAngContArray:function (mytopic) {
                var picAngContArray=[]
                var i=0;
                var AllChennel= this.$store.state.channel
                for (;i<AllChennel.length;i++){
                    if(this.mytopic===AllChennel[i].chName){
                        var m=0;
                        for (;m<AllChennel[i].contents.length;m++){
                            var picAngCont={
                                pic:[],//
                                cont:''
                            }
                            picAngCont.cont=AllChennel[i].contents[m].title
                            for (var j=0;j<AllChennel[i].contents[m].pictures.length;j++){
                                picAngCont.pic.push(AllChennel[i].contents[m].pictures[j])
                            }
                            picAngContArray.push(picAngCont)
                        }
                    }
                }
                console.log("===========================这是modeSecSlideImage========================")
                console.log(picAngContArray)
                return picAngContArray
            }
        }
    }
</script>
<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    a {color:#252525; text-decoration:none; font-family: "Helvetica Neue"}
    a:visited {text-decoration:none; font-family: "Helvetica Neue"}
    a:hover {color:#ba2636;text-decoration:underline;font-family: "Helvetica Neue"}
    a:active {color:#ba2636; font-family: "Helvetica Neue"}
</style>