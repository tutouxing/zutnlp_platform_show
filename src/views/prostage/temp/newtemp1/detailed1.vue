<template>
    <div>
        <Header></Header>
        <div class="main">
            <el-row>
                <el-col :span="16">
                    <div v-html="this.datas" class="main_detailed">
                </div>>
                </el-col>
                <el-col :span="8">
                    <div class="main_comments">
                        <div class="main_comments_head">
                             <h3>用户评论</h3>
                        </div>
                        <div class="main_comments_body">
                            <el-table :data="tableData" style="width: 100%">
                            </el-table>
                        </div>
                        <div class="main_comments_comm">
                            <h3>我要评论</h3>
                        </div>
                        <div class="main_comments_bo">
                            <el-input
                                    type="textarea"
                                    :rows="4"
                                    placeholder="请输入内容"
                                    v-model="text.details"
                                    class="main_comments_bo_text">
                            </el-input>
                            <el-button @click="save" style="float: left;color:orangered">提交评论</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>

</template>

<script>
    import {addComment} from "../../../../api/operate";
    import Header from '../../index/phead'
    export default {
        name: "detailed",
        data(){
            return{
                datas:"",
                tableData:[],//评论显示
                text:{
                    details: ' ',
                    publisher:this.$store.state.username,
                },//评论文本域
                content_id:'',//内容id
            }
        },
        components:{
            Header
        },
        created(){
            this.getdetailed();
        },
        methods:{
            getdetailed(){
                this.datas=this.$route.params.item.textHref;
                this.content_id=this.$route.params.item.id;
            },
            save(){//保存评论方法
                addComment(this.text,this.content_id).then(()=>{
                    this.$notify({
                        title:'成功',
                        message:'提交成功',
                        type:"success",
                        duration:2000
                    })
                })
            }
        },

    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .main{
        padding-top: 20px;
        padding-right: 20px;
    }
    .main_detailed{
        padding-left: 20px;
        padding-right: 20px;
    }
    .main_comments_head{
        text-align: left;
        margin-bottom: 20px;
        border-bottom: 1px solid silver;
    }
    .main_comments_head h3{
        padding-bottom: 10px;
        color: orange;
    }
    .main_comments_comm{
        margin-top: 20px;
        text-align: left;
        margin-bottom: 20px;
        border-bottom: 1px solid silver;
    }
    .main_comments_comm h3{
        padding-bottom: 10px;
        color: orange;
    }
    .main_comments_bo_text{
        margin-bottom: 20px;
    }

</style>