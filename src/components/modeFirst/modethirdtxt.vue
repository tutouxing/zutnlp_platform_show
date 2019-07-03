<template>
    <div class="lowtxt">
        <hr pixels="10px">
        <el-card class="lowtxt">
            <h1 class="lowtxt">{{$route.params.title}}</h1>
            <hr pixels="10px" class="lowtxt">
            <span  v-html="replaceBreakWithPTag(this.txt)"></span>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "modethirdtxt",
        data: function(){
            return {}
        },
        computed:{
            txt:function () {
                var i=0;
                var findtxt=''
                for (;i<this.$store.state.AllContent.length;i++){
                    console.log("文章开头"+this.$route.params.title)
                    if (this.$store.state.AllContent[i].cont.title.search(this.$route.params.title) != -1) {
                        findtxt=this.$store.state.Alltxt[i]
                    }
                }
                console.log("查找到的文章++++++"+findtxt);
                return findtxt
            }
        },methods:{
            replaceBreakWithPTag(str, style) {
                if (!str) {
                    return ''
                } else {
                    style = style || 'style="text-indent: 2em; margin: 10px 0;"'
                    str = `<p ${style}>` + str
                    return str.replace(/\n|\r/g, `</p><p ${style}>`)
                }
            }
        }
    }
</script>

<style scoped>
.lowtxt{
    margin-left:6%;
    margin-right: 6%;
    margin-top: 5%;
}
a {color:#252525; text-decoration:none;}
a:visited {text-decoration:none;}
a:hover {color:#ba2636;text-decoration:underline;}
a:active {color:#ba2636;}
</style>