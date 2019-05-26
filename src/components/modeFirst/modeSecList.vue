<template>
    <!--<div class="exBox">
        <el-table
                :data="this.$store.state.channel"
                style="width: 100%"
                :header-cell-style="tableHeaderColor"
                :row-style="tableRowStyle">
            <el-table-column
                    prop="date"
                    label="内容列表"
                    width="700px">
                <mode-image-box></mode-image-box>
                <h1>{{mytopic}}</h1>
            </el-table-column>
        </el-table>
    </div>-->
    <div>
            <div v-for="items in this.$store.state.channel" v-if="items.chName==mytopic" >
                <el-card  class="secList" v-for="(content,index) in items.contents" v-if="index <7&&content.title!=null">
                    <mode-image-box></mode-image-box>
                    <div class="fontTitle">
                        <router-link :to="{path:'/modethirdCont/'+content.title,query:{title:content.title}}">{{content.title}}</router-link>
                        <span class="time">{{content.dateCreated}}</span>
                    </div>
                </el-card >
            </div>
    </div>
</template>

<script>
    import modeImageBox from './modeImageBox'
    export default {
        name: "modeSecList",
        props:{
                mytopic:String
        },
        data:{
        },
        methods: {
            // 修改table tr行的背景色
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0) {
                    return 'font-size: 25px; height: 60px'
                }
            },
            tableRowStyle({ row, rowIndex }) {
                return 'height: 150px;'
            }
        },
        components:{
            modeImageBox
        },
    }
</script>

<style scoped>
    .exBox{
        margin-top: 1%;

    }.secList{
             height: 150px;
             width:100%;
             float:left;
         }
    .fontTitle{
        width: 90%;
        line-height:100px;     /*注意这行代码，惹是不写，得不到想要的结果哦*/
        vertical-align:middle;
        width: 100%;
        text-align: left;
    }.time{
            float: bottom;
             float: right;
         }
    a:hover{color: #aaccee}
    a{text-decoration: none;}
    a:visited{color:#2361b9}
    a:active{color: #ffffff}
</style>