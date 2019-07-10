<template>
    <div>
        <Header></Header>
        <div class="main">
            <el-row>
                <el-col :span="16">
                    <div v-html="this.datas" class="main_detailed">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="main_comments">
                        <div class="main_comments_body">
                            <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" :header-cell-style="style" :row-style="row">
                                <el-table-column label="用户评论">
                                    <template slot-scope="props">
                                        <div>
                                            <span style="color: hotpink">@{{props.row.publisher}}</span>:{{props.row.details}}<br/>
                                            评论时间：
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column type="expand" ><template slot-scope="props">
                                        <div>
                                            <el-row>
                                                <el-col :span="16"><span style="color: orange">@管理员：</span>你好呀</el-col>
                                            </el-row>
                                        </div>
                                </template></el-table-column>
                            </el-table>
                        </div>
                        <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10,20,30,50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
                    </el-pagination>
                        <div class="main_comments_comm">
                            <h3>我要评论</h3>
                        </div>
                        <div class="main_comments_bo">
                            <el-input
                                    type="textarea"
                                    :rows="4"
                                    v-model="text.details"
                                    placeholder="请输入内容"
                                    class="main_comments_bo_text">
                            </el-input>
                            <div class="main_comments_bo_user">
                                <el-row>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple-dark">
                                        <el-input placeholder="请输入用户名" v-model="text.publisher">
                                        </el-input>
                                    </div></el-col>
                                    <el-col :span="12">
                                        <div class="grid-content bg-purple-dark">
                                        </div></el-col>
                                </el-row>
                            </div>
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
    import {getContentById}from "../../../../api/content/index"
    import Header from '../../index/phead'
    export default {
        name: "detailed",
        data(){
            return{
                currentPage: 1, // 当前页码
                total: 20, // 总条数
                pageSize: 5 ,// 每页的数据条数
                datas:"",
                tableData:[],//评论显示
                text:{
                    details: ' ',
                    publisher:'',
                },//评论文本域
                content_id:'',//内容id
                style:{//表头样式
                    background:'#2CC5FF',
                    color:'red',
                    fontWeight:500,
                },
                row:{//行高数据
                    height:'60px',
                }
            }
        },
        components:{
            Header
        },
        created(){
            this.getdetailed();
        },
        methods:{
            getList(){//得到table列表
                getContentById(this.content_id).then((response)=>{
                    this.tableData=response.data.comments;
                    console.log(this.tableData);
                })
            },
            save(){//保存评论方法
                addComment(this.text,this.content_id).then(()=>{
                    this.$notify({
                        title:'成功',
                        message:'提交成功，等待审核',
                        type:"success",
                        duration:2000
                    })
                });
            },
            getdetailed(){
                this.datas=this.$route.params.item.textHref;
                this.content_id=this.$route.params.item.id;
                this.getList();
            },
            handleSizeChange(val){//每页条数切换
                this.currentPage = 1;
                this.pageSize = val;
            },
            handleCurrentChange(val){
                this.currentPage = val;
            },

        },

    }
</script>

<style scoped>
    .el-table__header th, .el-table__header tr{
        font-size: 20px;
        color: red;
    }
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