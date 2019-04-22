<template>
    <div class="app-container calender-list-container">
        <el-row>
            <el-col :span="24" style="margin-top: 20px">
                <el-button-group style="float: left;font-size: 18px">
                    <el-button type="primary" icon="plus" @click="handlerAdd"><i class="iconfont icon-tianjia"></i>添加</el-button>
                    <el-button  type="primary" icon="edit" @click="handlerEidt"><i class="iconfont icon-bianji"></i>编辑</el-button>
                    <el-button  type="primary" icon="delete" @click="handlerDelete"><i class="iconfont icon-shanchu"></i>删除</el-button>
                </el-button-group>
            </el-col>
            <el-col :span="8" style="">
                <el-input  class="input-filter" placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
                <el-tree
                        class="filter-tree"
                        :data="treeData"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        @node-click="getNodeData"
                        ref="menuTree">
                </el-tree>
            </el-col>
            <el-col :span="16" style="margin-top: 35px">
                <el-card>

                </el-card>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import {page,getObj,delObj,addObj,putObj} from '../../api/admin/user/index'
    export default {
        name: "index",
        created(){
            // this.getList();
        },
        watch: {
            filterText(val) {
                this.$refs.menuTree.filter(val);
            }
        },
        data() {
            return {
                filterText: '',
                list:null,//树列表
                listQuery:{//列表参数
                    username:undefined
                },
                labelPosition:'right',//标签位置
                formEdit:true,//表单编辑状态
                typeOptions: ['menu', 'dirt'],//是菜单还是编辑
                formStatus:'',//表单状态
                currentId:-1,//当前的树id
                treeData: [],
                defaultProps: {//树的标签属性
                    children: 'children',
                    label: 'label'
                },
            };
        },
        methods: {
            getList(){
                page(this.listQuery).then((data)=>{
                    this.treeData=data;
                })
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            getNodeData(data){
                if(!this.formEdit){
                    this.formStatus='update';
                }
                getObj(data.id).then((res)=>{
                    this.from=res.data;
                })
                this.currentId=data.id;
                /*
                * 还没有资源的代码
                * */
            },
            handlerAdd(){//点击按钮添加
                this.resetForm();
                this.formEdit=false;
                this.formStatus='create';

            },
            handlerEidt(){//点击按钮编辑
                if(this.form.id){
                    this.formEdit=false;
                    this.formStatus='update';
                }
            },
            handlerDelete(){//点击按钮删除
                this.$confirm('此操作将永久删除','提示',{
                    confirmButtonText:'取消',
                    confirmButtonText:'确定',
                    type:"warning"
                }).then(()=>{
                    delObj(this.currentId).then(()=>{
                       this.getList();//重新得到树列表
                       this.resetForm();//重置表单
                        this.onCancel();
                        this.$notify({
                            title:'成功',
                            message:'删除成功',
                            type:'success',
                            duration:2000
                        })
                    })
                })
            },
            update(){//按钮点击更新
                putObj(this.form.id,this.form).then(()=>{
                    this.getList();
                    this.$notify({
                        title:'成功',
                        message:'更新成功',
                        type:'success',
                        duration:2000
                    })
                })
            },
            create(){//按钮点击创建
                addObj(this.form).then(()=>{
                    this.getList();
                    this.$notify({
                        title:'成功',
                        message:'创建成功',
                        type:'success',
                        duration:2000
                    })
                })
            },
            onCancel(){//取消

            },
            resetForm() {//重置表单
                this.form = {
                    code: undefined,
                    title: undefined,
                    parentId: this.currentId,
                    href: undefined,
                    icon: undefined,
                    orderNum: undefined,
                    description: undefined,
                    path: undefined,
                    enabled: undefined
                };
            },
        },
    }
</script>

<style >
 @import url(//at.alicdn.com/t/font_928693_2lvxa6sotf.css);
    .input-filter{
        display: flex;
        margin-top: 35px;
    }
    .filter-tree{
        margin-top: 50px;
    }
</style>