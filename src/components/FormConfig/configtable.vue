<template>
    <el-form>
        <div class="frames">
            <el-form-item style="margin-top:100px;">
            填写表数据
             </el-form-item>
        <el-form-item style="margin-top:30px;">
            <label >创建新表填写表名</label><el-input type="text" v-model="Tablename" />
            <el-select v-model="alltablename.value" clearable placeholder="添加属性选择表名">
                <el-option
                        v-for="item in alltablename.names"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
            <el-form-item style="margin-top:99px;">

                <el-button type="primary" v-on:click="retu">返回</el-button>
                <el-button  type="primary"  v-on:click="nextcreate">下一步创建表</el-button>
                <el-button  type="primary"  v-on:click="nextadd">下一步添加</el-button>

            </el-form-item><!--按钮-->
        </div>

    </el-form>
</template>

<script>
   /* import bus from '@/assets/eventBus.js';
    import * as fun from './api/AxiosApi.js'*/
    export default {
        name: 'configtable',
        data(){
            return{
                Tablename:"",
                addtableproperty:{
                    UpDataOrAdd:[
                        {
                            value:'create',
                            label:''
                        },{
                            value:'Add',
                            label:'添加'
                        },
                    ],
                    value:''
                },
                alltablename:{
                    names:[
                        {
                            label:'111111',
                            value:'111111'
                        }
                    ],
                    value:''
                },
                ProjectName:''
            }
        },
        methods:{
            retu(){
                this.$router.push({path:'/formconfig/createproject'});
            },
            nextcreate(){
                if(this.Tablename.length!=0)
                {
                    let flag=false;
                    for ( let i=0;i<this.alltablename.names.length;i++)
                    {
                        if(this.Tablename==this.alltablename.names[i].value) {
                            this.$alert("表明已经存在重新输入");
                            flag = true;
                        }
                    }
                    if(flag==false)
                        {
                            this.$router.push({ name: 'configmsg', params: { userId: this.Tablename ,create:'create',projects:this.ProjectName}});
                            console.log(this.ProjectName+'获取的工程名2');
                            this.$router.push({path:'/configmsg'});
                        }
                }else {
                    this.$alert("请输入表名后跳转");
                }
            },
            nextadd(){
                if(this.alltablename.value.length!=0)
                {

                    this.$router.push({ name: 'configmsg', params: { userId: this.alltablename.value ,add:'add',projects:this.ProjectName}});
                    //this.$router.push({path:'/configmsg?demor=1234'});
                  //  this.$router.push({path:'/configmsg'});
                }else {
                    this.$alert("请选择表名后跳转");
                }
            },

        },
        mounted(){

            this.ProjectName=this.$route.params.toconfigtable;
         console.log("toconfigtable工程名"+this.$route.params.toconfigtable);
            let url = "http://202.196.37.147:8848/TableMessage/list";
            let that=this;
            that.$axios.get(url, {}).then(function (response) {
               /* for (let j in response.data)
                {
                    console.log(response.data[j].tablename+'这是名字在configtable里');
                }*/
                for (let j in response.data) {
                    that.alltablename.names.push(
                        {
                            value:response.data[j].tablename,
                            label: `${response.data[j].tablename}`,
                            key: Date.now()
                        }
                    );
                    //console.log(response.data[j].tablename+'这是名字');
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<style scoped>
    input{
        width: 200px;
    }
    .el-input{
        width: 250px;
    }
    distencetop{
       margin-top:50px;
    }
    distencebottom{
        margin-bottom:50px;
    }
    distenceleft{
        margin-left:50px;
    }
    distenceright{
        margin-right:50px;
    }
    panel{

    }
    .frames{
   /*     background: white;*/
        margin-top: 20px;
        border-top:2px solid gainsboro;
        border-bottom:2px solid gainsboro;
        border-left:2px solid gainsboro;
        border-right:2px solid gainsboro;
        padding-bottom:35px;
    }
</style>