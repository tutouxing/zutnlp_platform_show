<template>
    <div class="exImg">
        <img class="imgClass" :src="formData.avatar" alt="">
        <!--<div class="tx"><h1>人民网-----网上的人民日报</h1></div></div>-->
        <div class="tx">
<!--            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">-->
<!--            <el-button slot="append" icon="el-icon-search" v-on:click="search"></el-button>-->
<!--        </el-input>-->
            <el-autocomplete placeholder="请输入搜索内容"
                             class="inline-input"
                             el-autocomplete            v-model="input5"
                             :fetch-suggestions="queryS"
                             @select="handClick"
                             >
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-autocomplete>
        </div>
</div>
</template>

<script>
    export default {
        name: "modeNetName",
        data() {
            return {
                formData: {
                    avatar: require('@/assets/img/mo.png'),

                },
                input5:null,
                searchList:[],
                restaurant:[]
            }
        },
        methods:{
            queryS(queryString,cb){
                var input5 = this.input5;
                var AllContList = this.$store.state.AllContent
                var arrayList = [];
                var i
                var restaurants=[]
                // console.log("这是netName"+AllContList)
                for (i = 0; i < AllContList.length; i++) {
                    console.log("这是netName"+this.$store.state.AllContent[i].cont.title)
                    if (this.$store.state.AllContent[i].cont.title.search(queryString) != -1) {
                        restaurants.push(this.$store.state.AllContList[i].cont.title)
                    }
                }
                let newArr = restaurants.map(val => {
                    let json = {};
                    json.value = val;
                    return json;
                });
                console.log("yaokaishidayinle ")
                console.log(newArr)
                let results = queryString ? newArr.filter(this.createFilter_front(queryString)) : newArr
                cb(results)
            },
            createFilter_front (queryString) {
                return (newArr) => {
                    return (newArr.value.indexOf(queryString) > -1)
                }
            },
            handClick(){
                console.log("点击跳转"+this.input5)
                this.$router.push("/modethirdCont/"+this.input5)
            }
        },
        beforeRouteEnter(to,from,next){
            window.document.body.style.backgroundColor="#CD2626";
            next();
        },
        beforeRouteLeave(to,from,next){
            window.document.body.style.backgroundColor="";
            next();
        }
    }
</script>

<style scoped>
    .imgClass{
        display: inline;
        float: left;
        height: 60px;
        width: 150px;

    }
    .exImg{
        width:100%;
        height:50px;
        line-height:50px;
        border: 1px ;
        margin-left: 15%;
        margin-top: 30px;
        font-size:20px;

    }
    .tx{
        font-family: "Helvetica Neue";
        float:left;
        margin-left: 10%;
        margin-top: 1%;
        width: 500px;
        in-left: 5%;
    }
    a {color:#252525; text-decoration:none;}
    a:visited {text-decoration:none;}
    a:hover {color:#ba2636;text-decoration:underline;}
    a:active {color:#ba2636;}
    .el-autocomplete{
        width: 500px;
    }
</style>