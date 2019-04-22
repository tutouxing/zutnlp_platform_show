<template>
    <el-row>
        <el-col :span="24">
            <div>
                <el-button-group style="float: left">
                    <el-button type="primary" @click="handlerAdd">增加</el-button>
                    <el-button type="primary" @click="handlerDelete">删除</el-button>
                    <el-button type="primary" @click="handlerEdit">编辑</el-button>
                    <el-button type="primary" @click="handlerAuthority">权限分配</el-button>
                    <el-button type="primary" @click="handlerUser">关联用户</el-button>
                </el-button-group>
            </div>
        </el-col>
        <el-col :span="8" style="margin-top: 25px">
            <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
            <el-tree class="filter-tree"  :data="treeData"  node-key="id" highlight-current :props="defaultProps"  :filter-node-method="filterNode" ref="groupTree" @node-click="getNodeData" default-expand-all>
            </el-tree>
        </el-col>
        <el-col :span="16" style="margin-top: 25px">
            <div style="margin-top: 10px">
                <el-form :model="form" ref="form" label-width="100px">
                    <el-form-item label="名称" :span="5"><el-input v-model="form.name" :disabled="formEdit"/></el-form-item>
                    <el-form-item v-if="this.formStatus=='update'">
                        <el-button type="primary" @click="update">更新</el-button>
                        <el-button type="primary" @click="cancel">取消</el-button>
                    </el-form-item>
                    <el-form-item v-if="formStatus=='create'">
                        <el-button type="primary" @click="create">保存</el-button>
                        <el-button type="primary" @click="cancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div>
                <el-table :data="userlist" style="width: 100%;margin-top: 40px;margin-left: 55px">
                    <el-table-column label="用户" width="180"><template scope="scope"><span>{{scope.row.username}}</span></template></el-table-column>
                    <el-table-column label="用户id" width="180"><template scope="scope"><span>{{scope.row.id}}</span></template></el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <el-button size="small" type="danger" @click="handlerUserDelete(scope.row)" class="el-icon-delete">移除用户</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-dialog :title="dialogUsername" :visible.sync="dialogUserVisible">
            <group-user ref="user" :groupId="currentId" @closeUserDialog="closeUserDialog" @userAdd="updateuser"></group-user>
        </el-dialog>
        <el-dialog :title="dialogAnth" :visible.sync="dialogAuthVisible" >
            <group-auth :groupId="currentId" @closeAuthDialog="closeAuthDialog" ref="groupAuthority"></group-auth>
        </el-dialog>
    </el-row>
</template>
<script>
    import {fetchTree,addObj,getObj,putObj,delObj,getUsers,removesUsers,addMenus} from '../../../api/admin/group/index'
    import {menulist}from '../../../api/menu/index'
    export default {
        name: "groupDetail",
        props:{
           type:'1',
        },
        components:{
            'group-user':()=>import('./groupUser.vue'),
            'group-auth':()=>import('./groupAuth.vue'),
        },
        data(){
            return{
                adddialog:false,//添加状态
                treeData: [],//树形结构数据
            /*    listQuery:{
                    groupType: '1',
                    name:undefined,
                },*/
                filterText:'',//初始化过滤值
                dialogUserVisible:false,//用户对话框属性
                dialogAuthVisible:false,//权限对话框属性
                dialogUsername:'关联用户',
                dialogAnth:'关联资源',
                defaultProps:{
                    label:'name',
                    children: 'children',
                },
                userlist:[], //组的用户返回列表
                userform:{
                    groupId:undefined,//用户的组id
                },
                form:{//展示节点的表单
                    name:undefined,
                    // code:undefined,//状态码
                    // description:undefined,
                    // groupType:this.type,
                },
                formEdit:true,//表单编辑是否为禁用状态
                formStatus:'',//表单状态（编辑还是创建）
                currentId:-1,//当前节点的id
            }
        },
       created(){
            this.getList();
       },
        watch:{
            filterText(val){//在树对象的过滤器中监听过滤值
                this.$refs.groupTree.filter(val);
            }
        },
        methods:{
            cancle(){
                this.dialogAuthVisible=false;
            },
            queding(){
                addMenus(this.currentId,this.nodeid).then(()=>{
                    this.$notify({
                        title:'成功',
                        message:'分配成功',
                        type:'success',
                        duration:2000
                    });
                    this.dialogAuthVisible=false;
                })
            },
            updateuser(val){//刷新用户
                this.userlist=val;
            },
            getList(){//得到用户组树列表清单
              fetchTree().then(res=>{
                  this.treeData=res.data;
              })
            },
            filterNode(value, data) {//过滤节点函数
                console.log("开始过滤函数");
                console.log(data);
                if (!value) return true;
                return data.name.indexOf(value) !== -1;
            },
            resetForm(){
              this.form ={
                  parentId:this.currentId,
                  // code:undefined,
                  name:undefined,
                  // description:undefined,
              }
            },
            cancel(){//取消编辑或者创建的状态
                this.formEdit=true;
                this.formStatus='';
            },
            getNodeData(data){//得到节点信息的内容
                if(!this.formEdit) {
                    this.formStatus='update';
                }
                getObj(data.id).then((res)=>{
                    this.form=res.data;//将数据返回表单
                });
                this.currentId=data.id;
                this.userform.groupId=this.currentId;
                getUsers(this.userform).then((response)=>{
                    this.userlist=response.data;
                })
            },
            handlerAdd(){//添加节点以及内容
                this.resetForm();
                this.formEdit=false;
                this.formStatus='create';

            },
            create(){//按钮创建节点内容
                addObj(this.form.parentId,this.form).then(()=>{
                    this.getList();
                    this.$notify({
                        title:'成功',
                        message:'创建成功',
                        type:'success',
                        duration:2000,
                    });

                })
            },
            update(){//按钮更新节点内容
                putObj(this.currentId,this.form).then(()=>{
                    this.getList();
                  this.$notify({
                      title:'成功',
                      message:'更新成功',
                      type:'success',
                      duration:2000
                  })
                })
            },

            handlerDelete(){//删除节点以及内容（用户组）
                this.$confirm('此操作将永久删除，是否继续','提示',{
                    confirmButtonText:'取消',
                    confirmButtonText:'确定',
                    type:'warning',
                }).then(()=>{
                    delObj(this.currentId).then(()=>{
                        this.getList();//删除以后，后台重新得到树列表清单
                        this.resetForm();//重置表格
                        this.cancel();//表格禁用，状态重新设置为空
                        this.userlist=undefined
                        this.$notify({
                            title:'成功',
                            message:'删除成功',
                            type:'success',
                            duration:2000
                        })
                    })
                })
            },
            handlerEdit(){//编辑节点以及内容
                console.log(this.currentId);
                if(this.form.id){
                    this.formEdit=false;
                    this.formStatus='update';
                }
            },
            handlerAuthority(){//权限分配
                this.dialogAuthVisible=true;
                if(this.$refs.groupAuthority.groupId !== undefined ){
                    this.$refs.groupAuthority.groupId = this.currentId;
                }

            },
            handlerUser(){//关联用户
                this.dialogUserVisible=true;
                if(this.$refs.user.groupId !== undefined){
                    this.$refs.user.groupId=this.currentId;
                }
            },
            closeUserDialog(){//关闭对话框
                this.dialogUserVisible=false;
            },
            closeAuthDialog(){
                this.dialogAuthVisible=false;
            },
            handlerUserDelete(row){//移除用户
                this.$confirm('此操作将永久删除，是否继续？','提示',{
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    type:'waring',
                }).then(()=>{
                    let list={usersId:[]};
                    list.usersId=row.id;
                    removesUsers(list).then(()=>{
                        this.$notify({
                            title:'成功',
                            message:'移除用户成功',
                            type:'success',
                            duration:2000
                        });
                        const  index=this.userlist.indexOf(row);
                        this.userlist.splice(index, 1);
                    })

                })
            },
        },
    }
</script>

<style >
    .filter-tree{
        margin-top: 40px;
    }
</style>