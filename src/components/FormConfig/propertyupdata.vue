<template>
    <div>
        <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="properdata">
           <!-- <el-form-item label="属性名">
                <el-input v-model="properdata.properName"></el-input>
            </el-form-item>-->
            <el-form-item label="属性说明">
                <el-input v-model="properdata.properinfo"></el-input>
            </el-form-item>
            <el-form-item label="属性长度">
                <el-input v-model="properdata.properLong"></el-input>
            </el-form-item>
            <el-form-item label="属性类型">
                <el-select v-model="classdata.value" clearable placeholder="请选择属性类型">
                    <el-option
                            v-for="item in classdata.javatype"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

            <!--<el-form-item label="作者">
                <el-input v-model="formLabelAlign.authod"></el-input>
            </el-form-item>-->
        </el-form>
        <el-button  type="primary" v-on:click="PropertyUpdata">更新</el-button>
        <el-button  type="primary" v-on:click="retu">返回</el-button>

    </div>
</template>

<script>
    export default {
        name: "propertyupdata",

        data() {
             return{
                 labelPosition: 'right',
                 idone:null,
                 receivename:'',
                 properdata:{
                     properName:null,
                     properinfo:null,
                     properLong:"",
                     //properType:null,
                     prtysIsKey: false,
                     prtys_Isindex: false,
                     prtys_IsUnique: false,
                     prtysIsnull: true,
                     prtysInstruct:''
             },
                 classdata:{
                     javatype:[
                         {
                             value:'String',
                             label:'String'
                         },
                         {
                             value:'Int',
                             label:'Int'
                         },
                         {
                             value:'Byte',
                             label:'Byte'
                         },
                         {
                             value:'Long',
                             label:'Long'
                         },
                         {
                             value:'Float',
                             label:'Float'
                         },
                         {
                             value:'Double',
                             label:'Double'
                         },
                         {
                             value:'Java.math.Decimal',
                             label:'Java.math.Decimal'
                         },
                         {
                             value:'Byte[]',
                             label:'Byte[]'
                         },
                         {
                             value:'Java.sql.Date',
                             label:'Java.sql.Date'
                         },
                         {
                             value:'Java.sql.Time',
                             label:'Java.sql.Time'
                         },
                         {
                             value:'Java.sql.Timestamp',
                             label:'Java.sql.Timestamp'
                         },
                         {
                             value:'Short',
                             label:'Short'
                         },
                         {
                             value:'Boolean',
                             label:'Boolean'
                         },
                     ],
                    value:''
                 },//java类型
             }
        },
        methods:{
            retu(){
                this.$router.push({path:'/formconfig/formoperate'});
            },
            PropertyCheck() {
                let url='http://127.0.0.1:8848/Pros/check';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                   // withCredentials:true,
                    parma:{
                        PropsName:'属性名'
                    },
                    data:{
                        dateCreated:'',
                        dateModified:'',
                        deleted:'',
                        entityName:'',
                        id:'',
                        prtysName:that_.dataone.propname,
                        propertyType:that_.dataone.type,
                        prtysIsKey:that_.dataone.keyone,
                        prtysLong:that_.dataone.charlengs,
                        prtys_Isindex:that_.dataone.prtys_Isindex,
                        prtys_IsUnique:that_.dataone.prtys_IsUnique,
                        prtysInstruct:that_.dataone.info,
                        prtysIsnull:that_.dataone.cannull
                    }

                })
            },
            PropertyUpdata() {
                let that_=this;
                that_.receivename=that_.$route.params.nameone;
                console.log("这是路由传递的表名"+this.$route.params.nameone);
                let url='http://127.0.0.1:8848/Pros/check/'+that_.$route.params.nameone.toString();
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    //withCredentials:true,
                    params:{
                        PropsName:that_.$route.params.nameone
                    },
                }).then(function (res) {

                    that_.idone=res.data.id;
                    console.log( res.data.id+'这是查询获取的id');
                    let url2='http://127.0.0.1:8848/Pros/updata';
                            console.log(  that_.receivename+'获取的参数');
                    that_.$axios({
                        method:'post',
                        url:'http://127.0.0.1:8848/Pros/updata',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        //withCredentials:true,
                        params:{
                            PropsName:that_.receivename
                        },
                        data:{

                            "dateCreated": res.data.dateCreated,
                            "dateModified": res.data.dateModified,
                            "deleted": res.data.deleted,
                            "entityName":  res.data.entityName,
                            "id":res.data.id,
                            "prtysName": res.data.prtysName,
                            "propertyType": that_.classdata.value,
                            "prtysIsKey": res.data.prtysIsKey,
                            "prtysLong": that_.properdata.properLong,
                            "prtys_Isindex":  res.data.prtys_Isindex,
                            "prtys_IsUnique": res.data.prtys_IsUnique,
                            "prtysIsnull":  res.data.prtysIsnull,
                            "prtysInstruct":that_.properdata.properinfo
                        }
                    });

                });
                this.$alert("更改成功");
                this.$router.push({path: '/goback'});//更新完成返回第一个页面
            },
                        },
        mounted(){
            this.receivename=this.$route.params.proname;
            console.log("这是mounted这是路由传递的属性名："+this.$route.params.proname);
        }
    }
</script>

<style scoped>
.el-input{
    width: 220px;
}
</style>
