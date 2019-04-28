<template>
    <el-main>

         <el-button class="cre" type="text" v-on:click="gocreate">创建表</el-button>
        <el-button style="margin-top: 10px;margin-left: 750px" type="danger" v-on:click="gocreatecode">生成代码</el-button>
      <!--  <el-button class="addmsgs" v-on:click="addmsg">添加</el-button>-->
                <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="表单操作" name="first">
            <el-table
                    :data=tablemsg
                    border
                    style="width:100%">
                <el-table-column
                        fixed
                        prop="tablename"
                        label="表名"
                        width="100">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="modelname"
                        label="模块名"
                        width="100">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="ProjectName"
                        label="工程名"
                        width="100">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="packageNameLoad"
                        label="包路径"
                        width="100">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="sonNumber"
                        label="子表数"
                        width="100">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="tabletype"
                        label="表单类型"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="PrtysInstruct"
                        label="说明"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="packagename"
                        label="包名"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="tableauthor"
                        label="作者"
                        width="100">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small"></el-button>
                        <el-button type="text" size="small" @click.native.prevent="updatemsg(scope.$index)">编辑</el-button>
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index,tablemsg)"
                                type="text"
                                size="small">
                            移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>
                <el-tab-pane label="属性操作" name="second">
                    <el-table
                            :data=propertymsg
                            border
                            style="width:100%">
                        <el-table-column
                                fixed
                                prop="propertyName"
                                label="属性名"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="propertyInstruction"
                                label="说明"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="propertyLong"
                                label="长度"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="propertyType"
                                label="类型"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="160">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small"></el-button>
                                <el-button type="text" size="small" @click.native.prevent="Updataproperty(scope.$index)">编辑</el-button>
                                <el-button
                                        @click.native.prevent="DeleteProperty(scope.$index,propertymsg)"
                                        type="text"
                                        size="small">
                                    移除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    属性操作
                </el-tab-pane>
                <el-tab-pane label="关系操作" name="third">
                    <el-table
                            :data=connectionmsg
                            border
                            style="width:100%">
                        <el-table-column
                                fixed
                                prop="connetcionName"
                                label="关系名"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="id"
                                label="id"
                                width="100">
                        </el-table-column>


                        <el-table-column
                                prop="connetcionInstruction"
                                label="关系说明"
                                width="100">
                        </el-table-column>
                       <el-table-column
                                prop="tableConnectionPropsCaseCadeType"
                                label="级联关系"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="tableConnectionSonTableName"
                                label="子表名"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="tableConnectionType"
                                label="关系映射"
                                width="100">
                        </el-table-column>

                        <el-table-column
                                prop="tableConnectionParentTableName"
                                label="父表名"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="tableConnectionPropsOneOrTwo"
                                label="表关系位置"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                fixed="right"
                                label="操作"
                                width="160">
                            <template slot-scope="scope">
                                <el-button @click="handleClick(scope.row)" type="text" size="small"></el-button>
                                <el-button type="text" size="small" @click.native.prevent="UpdataConnection(scope.$index)">编辑</el-button>
                                <el-button
                                        @click.native.prevent="DeleteConnection(scope.$index,connectionmsg)"
                                        type="text"
                                        size="small">
                                    移除
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
    </el-tabs>

    </el-main>

</template>

<script>
    export default {
        name: 'formoperate',
        data() {
            return {
                flag:false,
                activeName:'first',
                tablemsg:[
                 /* {
                        tablename:'',
                        PrtysInstruct:'',
                        tableauthor:'',
                        packagename:'',
                        ProjectName:'',
                        modelname:'',
                        packageNameLoad:'',
                       sonNumber:'',
                       tabletype:'',

                    }*/
                ],
                propertymsg:[
                   /* {
                        propertyName:'属性名',
                        propertyType:'属性了类型',
                        propertyInstruction:'属性说明',
                        propertyLong:'属性长度'
                    }*/
                ],
                connectionmsg:[/*{
                    connetcionName:'关系名',
                    connetcionInstruction:'关系说明',
                }*/]
            }
        },
        methods: {
            addmsg(){

            },
            handleClick(row) {
                console.log(row);
            },//可以使用
            PropertyFindall(){
                let that=this;
                let url='http://127.0.0.1:8848/Pros/list';
                this.$axios(
                    {
                        method:'get',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        //withCredentials:true,
                    }
                ).then(function (res) {
                     for(let i=0; i<res.data.length;i++)
                     {
                         that.propertymsg.push(
                             {
                                 propertyName:res.data[i].prtysName,
                                 propertyType:res.data[i].propertyType,
                                 propertyInstruction:res.data[i].prtysInstruct,
                                 propertyLong:res.data[i].prtysLong,
                             }
                         );
                         console.log(i);
                     }
                    //"得到数据
                });
            },//可以使用
            PropertyDelete(propername) {
                let url='http://127.0.0.1:8848/Pros/delete';
                this.$axios(
                    {
                        method:'post',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        //withCredentials:true,
                        params:{
                            PropsName:propername
                        },
                        data:{
                            //未知
                        }

                    }
                );
            },
            updatemsg(index) {
                let that=this;
               // bus.$emit('tablenameupdate',that.tablemsg[index].tablename);//获取表名传给修改页面
                this.$router.push({ name: 'tableupdate', params: { userId: that.tablemsg[index].tablename }});
                this.$router.push({path:'/tableupdate'});
            },
            Updataproperty(index){
                let propername=this.propertymsg[index].propertyName;
                this.$router.push({name:'propertyupdata',params:{nameone:propername}});
                console.log("属性更新参数：："+this.propertymsg[index].propertyName);
                this.$router.push({path:'/propertyupdata'});
            },
            UpdataConnection(index) {
                   let connectionname=this.connectionmsg[index].connetcionName;
                   this.$router.push({name:'connectionupdata',params:{conname:connectionname}});
                   this.$router.push({path:'/connectionupdata'});
            },
            DeleteProperty(index, rows){
               let propername=this.propertymsg[index].propertyName;
               this.PropertyDelete(propername);
                rows.splice(index, 1);
            },//可以使用
            DeleteConnection(index, rows) {
                console.log("删除关系"+index);
                let conname=this.connectionmsg[index].connetcionName;
                console.log("关系名"+conname);
                let url='http://127.0.0.1:8848/Connection/delete';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                   // withCredentials:true,
                    params:{
                        ConnectionName:conname
                    },
                    data:{

                    }
                })
                rows.splice(index, 1);
            },
            gocreate(){
                this.$router.push({path:'/formconfig/createproject'});
            },
            deleteRow(index, rows) {
                console.log("行号"+this.tablemsg[index].tablename);
                let that=this;
                this.$axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8848/TableMessage/delete/',
                    headers:{
                        'Content-Type':'application/json'
                    },
                   // withCredentials:true,
                   params: {
                        Tablename:that.tablemsg[index].tablename
                    }
                });
                rows.splice(index, 1);
            },
            ConnectionList(){

                let that_=this;
                let url="http://127.0.0.1:8848/Connection/list"
                this.$axios.get(url,{}).then(function (res) {
                    for(let i=0;i<res.data.length;i++)
                    {
                        if( res.data[i].tableConnectionPropsOneOrTwo==true)
                        {
                            res.data[i].tableConnectionPropsOneOrTwo="父方"
                        }else{
                            res.data[i].tableConnectionPropsOneOrTwo="子方"
                    }

                   that_.connectionmsg.push({

                       connetcionName:res.data[i].connectionName,
                       connetcionInstruction:res.data[i].tableConnectionInstruction,

                       id:res.data[i].id,
                       tableConnectionSonTableName:res.data[i].tableConnectionSonTableName,
                       tableConnectionPropsOneOrTwo:res.data[i].tableConnectionPropsOneOrTwo,
                       tableConnectionPropsCaseCadeType:res.data[i].tableConnectionPropsCaseCadeType,
                       tableConnectionParentTableName:res.data[i].tableConnectionParentTableName,
                       tableConnectionType:res.data[i].tableConnectionType




                   });
                    }
                })

            },
            gocreatecode(){
                this.$router.push({path:"/createcode"});
            }
        },
     /*   updated()
          {
              var that =this;
                      let url="http://127.0.0.1:8848/TableMessage/list";
                      let oobject=this.$axios.get(url, {
                      }).then(function (response) {
                          for(let j in response.data) {
                            that.tablemsg.push(
                                  {
                                      tablename:response.data[j].tablename,
                                      PrtysInstruct:response.data[j].tableInstruction,
                                      packagename:response.data[j].packageName,
                                      tableauthor:response.data[j].authod,
                                  },
                              );
                             // console.log(response.data[j].tablename+'表名是');
                          }
                      }).catch(function (error) {
                              console.log(error);
                          });
          },//这是*/
      created() {
          if(this.flag==false)
          {
          {
              let that = this;
              let url = "http://127.0.0.1:8848/TableMessage/list";
              that.$axios.get(url, {}).then(function (response) {
                  for (let j in response.data) {
                      that.tablemsg.push(
                          {
                              tablename: response.data[j].tablename,
                              PrtysInstruct: response.data[j].tableInstruction,
                              packagename: response.data[j].packageName,
                              tableauthor: response.data[j].authod,
                              ProjectName:response.data[j].projectName,
                              modelname:response.data[j].moduleName,
                              packageNameLoad:response.data[j].packageNameLoad,
                              sonNumber:response.data[j].sonNumber,
                              tabletype:response.data[j].tableType,
                          },
                      );
                      // console.log(response.data[j].tablename+'表名是');
                  }
              }).catch(function (error) {
                  console.log(error);
              });
              this.PropertyFindall();
              this.ConnectionList();
              this.flag++;
          }
              this.flag=true;
          }
      },
        watch:{
              /* "tablemsg"(){
                   if(this.flag==true)
                   {
                   {
                let that =this;
                let url="http://127.0.0.1:8848/TableMessage/list";
                that.$axios.get(url, {
                }).then(function (response) {
                    for(let j in response.data) {
                        that.tablemsg.push(
                            {
                                tablename:response.data[j].tablename,
                                PrtysInstruct:response.data[j].tableInstruction,
                                packagename:response.data[j].packageName,
                                tableauthor:response.data[j].authod,
                            },
                        );
                        // console.log(response.data[j].tablename+'表名是');
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                this.PropertyFindall();
            }
            this.flag=false;
                   }
               }*/
            /*

                let that =this;
                let url="http://127.0.0.1:8848/TableMessage/list";
               let oobject=this.$axios.get(url, {
              }).then(function (response) {
                   for(let j in response.data) {
                     that.tablemsg.push(
                         {
                                tablename:response.data[j].tablename,
                               PrtysInstruct:response.data[j].tableInstruction,
                               packagename:response.data[j].packageName,
                                tableauthor:response.data[j].authod,
                           },
                        );
                        console.log(response.data[j].tablename+'表名是');
                    }
                }).catch(function (error) {
                   console.log(error);
               });
              this.PropertyFindall();
    */
        }

    }
</script>

<style scoped>
    .cre{
        position: absolute;
        top: 5%;
        left:80%;
    }
    .che{
        position: absolute;
        top: 5%;
        left:70%;
    }
    el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 10%;
    }
   /* .addmsgs{
        margin-top: 2px;
        margin-right: 20px;

    }*/
</style>
