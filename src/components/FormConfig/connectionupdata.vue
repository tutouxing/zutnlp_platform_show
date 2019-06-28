<template>
    <div>
        <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="condata">
            <el-form-item label="关系名">
                <el-input v-model="condata.conupdataname"></el-input>
            </el-form-item>
            <el-form-item label="关系说明">
                <el-input v-model="condata.conupdatainfo"></el-input>
            </el-form-item>
            <el-form-item label="连接类型">
                <el-select v-model="ConnectionType.value" clearable placeholder="选择连接类型">
                    <el-option
                            v-for="item in ConnectionType.type"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

           <!-- <el-form-item label="外键">
                <el-input v-model="formLabelAlign.foreignKey"></el-input>
            </el-form-item>
            <el-form-item label="包名">
                <el-input v-model="formLabelAlign.packageName"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="formLabelAlign.authod"></el-input>
            </el-form-item>-->
        </el-form>
        <el-button   type="danger"  v-on:click="Up()">更新</el-button>
        <el-button  type="primary" v-on:click="retu()">返回</el-button>

    </div>
</template>

<script>
    export default {
        name: "connectionupdata",
        data() {
            return{
                ConnectionType:{
                    type:[
                        {
                            value:'OneToOne',
                            label:'OneToOne'
                        },
                        {
                            value:'OneToMany',
                            label:'OneToMany'
                        },
                        {
                            value:'ManyToMany',
                            label:'ManyToMany'
                        },
                    ],
                  value:''
                },//关系类型
                receivename:null,
                idone:null,
                labelPosition: 'right',
                condata:{
                    conupdataname:"",
                    conupdatainfo:""
                }
            }
        },
        methods:{
            retu() {
                this.$router.push({path:"formconfig/formoperate"});
            },
            Up(){
                let flag=true;
                for (let info in this.condata)
                {
                    if(this.condata.conupdatainfo==" "&&this.condata.conupdataname==" "){
                        flag=false;
                    }
                }
                if(flag==false)
                {
                    this.$alert("请填写数据后更新");
                }else {
                    this.ConnectionUpdata();
                }
            },
            ConnectionUpdata(){
                this.receivename=this.$route.params.conname;
                let name=this.$route.params.conname;
                console.log("获取的名字"+this.receivename);
                let that_=this;
                let url="http://202.196.37.147:8848/Connection/check/Department";
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    //withCredentials:true,
                    params:{
                        ConnectionName:this.receivename
                    },
                    data:{

                    }
                }).then(function (res) {

                    that_.idone=res.data.id;
                    console.log("获取的id"+res.data.id);
                    console.log("获取的name"+that_.receivename);
                    let url='http://202.196.37.147:8848/Connection/updata';
                    that_.$axios({
                        method:'post',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        //withCredentials:true,
                        params:{
                            ConnectionName:that_.receivename
                        },
                        data:{
                            id:res.data.id,
                            connectionName:that_.condata.conupdataname,
                            tableConnectionInstruction:that_.condata.conupdatainfo,
                            tableConnectionSonTableName:res.data.tableConnectionSonTableName,
                            tableConnectionPropsOneOrTwo:res.data.tableConnectionPropsOneOrTwo,
                            tableConnectionPropsCaseCadeType:res.data.tableConnectionPropsCaseCadeType,
                            tableConnectionParentTableName:res.data.tableConnectionParentTableName,
                            tableConnectionType:that_.ConnectionType.value,


                        }
                    })
                });
               /* let url2='http://202.196.37.147:8848/Connection/updata';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    param:{
                        ConnetcionName:that_.receivename
                    },
                    data:{
                        id:that_.idone,
                        connectionName:that_.condata.conupdataname,
                        tableConnectionInstruction:that_.condata.conupdatainfo,
                       /!* tableConnectionOneOrTwo:'',
                        tableConnectionPropsCaseCadeType:'',
                        tableConnectionParentTableName:'',
                        tableConnectionSonTablename:''*!/
                    }

                })*/
                this.$router.push({path:"formconfig/formoperate"});
            },
        },
        mounted() {
            this.receivename=this.$route.params.conname;
            let name=this.$route.params.conname;
            console.log("获取的名字"+this.receivename);
            let that_=this;
            let url="http://202.196.37.147:8848/Connection/check/Department";
            this.$axios({
                method:'post',
                url,
                headers:{
                    'Content-Type':'application/json'
                },
                //withCredentials:true,
                params:{
                    ConnectionName:this.receivename
                },
                data:{

                }
            }).then(function (res) {
                    that_.condata.conupdataname=res.data.connectionName;
                    that_.condata.conupdatainfo=res.data.tableConnectionInstruction;
            }
            );
            }

    }
</script>

<style scoped>
    .el-input{
        width: 220px;
    }
</style>
