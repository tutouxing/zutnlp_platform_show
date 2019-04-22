<template>
   <!-- 用户对话框表单-->
    <el-form label-width="80px">
        <el-form-item label="关联组员">
            <el-select v-model="members" multiple filterable remote placeholder="请输入用户姓名" :remote-method="remoteMemberMethod" :loading="loading">
                <el-option v-for="item in mItems"  :label="item.username" :value="item.id" ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {page,getName} from '../../../api/admin/user/index'
    import {addUsers,getUsers} from '../../../api/admin/group/index'
    export default {
        name: "groupUser",
        props:{
            groupId:{
               default:'1',
            },
        },
        created(){
            this.getAllUsers();
        },
        data(){
            return{
                mItems: [],//用户返回列表
                members: '',//成员的id列表
                list: [],
                loading: false,//是否启用远程搜索
                /*groupManager_btn_userManager: false*/
                listQuery: {//列表的限制
                    page: 1,
                    limit: 20,
                },
                groupIds: {
                    groupId: '1',
                },
                userlist:[],//用户返回列表
                userform:{
                    groupId:undefined,//用户组的id
                },
            }
        },
        methods:{
            getAllUsers(){//得到全部用户
                page(this.listQuery).then(response=>{
                    this.mItems=response.data['content'];
                    console.log(this.mItems);
                })
            },
            onSubmit(){//保存方法
                this.groupIds.groupId=this.groupId;
                addUsers(this.groupId,this.members).then(()=>{
                    this.$emit('closeUserDialog');
                    this.$notify({
                        title:'成功',
                        message:'保存成功',
                        type:'success',
                        duration:2000,
                    });
                    this.userform.groupId=this.groupId;
                    getUsers(this.userform).then((response)=>{
                        this.userlist=response.data;
                        this.$emit('userAdd',this.userlist);
                    });

                });

            },
            getUserList(){
              return this.userlist;
            },
            remoteMemberMethod(query){//启动远程搜索
                if(query !==''){
                    this.loading=true;
                    getName({
                        username:query
                    }).then((response)=>{
                        this.mItems=response.data;
                    })
                }else {
                    this.mItems=[];
                }
            },
        }
    }
</script>

<style scoped>

</style>