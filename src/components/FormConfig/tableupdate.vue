<template>
 <div>
    <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item style="margin-left: 300px" label="表名">
            <el-input v-model="formLabelAlign.Tablename"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 300px" label="说明">
            <el-input v-model="formLabelAlign.Instruction"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 300px" label="包名">
            <el-input v-model="formLabelAlign.packageName"></el-input>
        </el-form-item>

        <el-form-item style="margin-left: 300px" label="包路径">

            <el-input v-model="formLabelAlign.packageNameLoad"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 300px" label="表单类型">
            <el-input v-model="formLabelAlign.tableType"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 300px" label="模块名">
            <el-input v-model="formLabelAlign.modelName"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 300px" label="作者">
            <el-input v-model="formLabelAlign.authod"></el-input>
        </el-form-item>
    </el-form>
<el-button  type="primary" v-on:click=" updatemessage">更新</el-button>
     <el-button  type="primary" v-on:click="retu">返回</el-button>

 </div>
</template>

<script>
    export default {
        name: "tableupdate",
        data() {
            return {
                labelPosition: 'right',
                tabname:'',
                tabid:null,
                formLabelAlign: {
                    Tablename: '',
                    Instruction: '',
                    authod: '',
                    packageName:'',
                    modelName:'',
                    packageNameLoad:'',
                    tableType:'',
                }
            };
        },
        methods: {
            updatemessage() {
                //console.log(this.$route.params.userId+'这是updata用路由传的属性名');
                                this.tabname=this.$route.params.userId;
                                console.log("这是message方法");
               let that_=this;
                    let url="http://202.196.37.147:8848/TableMessage/check/task";
                    this.$axios({
                        method: 'post',
                        url: url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                       // withCredentials:true,
                        params:{
                            Tablename:this.$route.params.userId
                        },
                    }).then(function (response)
                    {
                        that_.formLabelAlign.Instruction,
                        that_.formLabelAlign.Tablename,
                        that_.formLabelAlign.modelName,
                        that_.formLabelAlign.tableType,
                        that_.formLabelAlign.authod,
                        that_.formLabelAlign.packageName,
                        that_.formLabelAlign.packageNameLoad,
                        console.log('第一个函数axios check的 res');
                        console.log(response.data.id +'这是id在第一个axios');
                        console.log(that_.tabname+'这是tablename第一个axios');
                        that_.$axios({
                            method: 'post',
                            url: 'http://202.196.37.147:8848/TableMessage/updata',
                            headers:{
                                'Content-Type':'application/json'
                            },
                            //withCredentials:true,
                            params:{
                                TableMessageName:that_.tabname
                            },
                            data:{
                                dateCreated: response.data.dateCreated,
                                dateModified: response.data.dateModified,
                                deleted:response.data.deleted,
                                entityName:response.data.entityName,
                                id: response.data.id,
                                children:response.data.children,
                                leaf: response.data.leaf,
                                text:response.data.text,
                                tablename:that_.formLabelAlign.Tablename,
                                tableInstruction:that_.formLabelAlign.Instruction,
                                moduleName: that_.formLabelAlign.modelName,
                                tableType:that_.formLabelAlign.tableType,
                                authod: that_.formLabelAlign.authod,
                                packageName: that_.formLabelAlign.packageName,
                                packageNameLoad:that_.formLabelAlign.packageNameLoad,
                                have_Connect:response.data.have_Connect,
                                projectName:response.data.projectName,
                                sonNumber: response.data.sonNumber

                            },
                        });
                    });
                console.log(  that_.tabname+'这是tablename更新的');
                this.$alert("更改成功");
              //  this.$router.push({path:"formconfig/formoperate"});
              this.$router.push({path: '/goback'});//更新完成返回第一个页面
            },
            initdata(){
                    this.tabname=this.$route.params.userId;
                    console.log("这是message方法");
                    let that_=this;
                    let url="http://202.196.37.147:8848/TableMessage/check/task";
                    this.$axios({
                        method: 'post',
                        url: url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                      ///  withCredentials:true,
                        params:{
                            Tablename:this.$route.params.userId
                        },
                    }).then(function (response)
                    {
                            that_.formLabelAlign.Instruction=response.data.tableInstruction;
                            that_.formLabelAlign.Tablename=response.data.tablename;
                            that_.formLabelAlign.modelName=response.data.moduleName;
                            that_.formLabelAlign.tableType=response.data.tableType;
                            that_.formLabelAlign.authod=response.data.authod;
                            that_.formLabelAlign.packageName=response.data.packageName;
                            that_.formLabelAlign.packageNameLoad=response.data.packageNameLoad;

                    });
            },
            retu() {
                this.$router.push({path:"formconfig/formoperate"});
            },
        },
        mounted(){
            this.initdata();
        }
    }
</script>

<style scoped>

    .el-input{
        width: 300px;
    }

</style>

