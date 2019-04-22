<template>
    <!--组分配权限模块-->
    <el-row>
        <el-col :span="24">
            <el-button @click="cancle" type="primary" round>取消</el-button>
            <el-button @click="queding" type="success"  icon="el-icon-check" round>保存</el-button>
        </el-col>
        <el-col :span="8">
            <el-tree class="filter-tree" show-checkbox :data="treeData" ref="tree" node-key="id" highlight-current :props="defaultProps"   @check="getNodeData" default-expand-all>
            </el-tree>
        </el-col>
        <el-col :span="16"></el-col>
    </el-row>

</template>

<script>
    import {menulist}from '../../../api/menu/index'
    import {addMenus} from "../../../api/admin/group";
    export default {
        name: "groupAuth",
        props:{
            groupId:{
                default:'1',
            },
        },
        data(){
            return{
                nodeid:[],//菜单id列表
                treeData:[],
                defaultProps:{
                    label:'title',
                    children:'children',
                },
            }
        },
        methods:{
            getList(){//得到树列表清单
                menulist().then(res=>{
                    this.treeData=res.data;
                })
            },
            getNodeData(){
                /*console.log('得到节点');
                console.log(this.$refs.tree.getCheckedKeys()[0]);*/
                this.nodeid=this.$refs.tree.getCheckedKeys()[0];
            },
            queding(){//保存的方法
               /* console.log('打印用户组的的id');
                /!*console.log(this.groupId);*!/
                console.log(this.nodeid);*/
                addMenus(this.groupId,this.nodeid).then(()=>{
                    this.$emit('closeAuthDialog');
                    this.$notify({
                        title:'成功',
                        message:'分配成功',
                        type:'success',
                        duration:2000
                    });
                })
            },
            cancle(){//取消的方法
                console.log('打印用户组的的id');
                console.log(this.groupId);
                this.$emit('closeAuthDialog');
            }
        },
        created(){
            this.getList();
        },
    }
</script>

<style scoped>

</style>