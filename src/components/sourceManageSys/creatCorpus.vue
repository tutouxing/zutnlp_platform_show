<template>
    <div>
    <div STYLE="float: left">
        <el-row>
                <el-input v-model="formInline.searchInput" style="width: 200px;float: left" placeholder="请输入你要查询的表名"></el-input>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary" @click="onCreat" style="float: right"><i class="el-icon-plus"></i>新增实体</el-button>
                <el-button type="primary" @click="addConn" style="float: right"><i class="el-icon-plus"></i>新增关系</el-button>
                <el-dialog :visible.sync="dialogFormVisibleconn" :append-to-body="true">
                    <el-form ref="connectForm" :model="connectForm" label-width="80px" :rules="rules"
                             class="demo-ruleForm">
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="实体名称"  >
                                    <el-input v-model="connectForm.connectionName"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="实体说明">
                                    <el-input v-model="connectForm.tableConnectionInstruction"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="10">
                                <el-form-item label="关系主体" prop="tablemaster">
                                    <el-select v-model="tablemaster"
                                               placeholder="请选择为谁添加实体">
                                        <el-option
                                                v-for="item in TableNameList"
                                                :value="item"
                                                :label="item">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="实体类型" prop="tableInstruction">
                                    <el-select @change="checkTabletypevalue(Tabletypevalue)" v-model="Tabletypevalue"
                                               placeholder="请选择表类型">
                                        <el-option
                                                v-for="item in TabletypevalueData"
                                                :value="item"
                                                :label="item">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row v-if="Tabletypevalue=='关系型表'">
                            <el-col :span="10">
                                <el-form-item label="实体角色" prop="tableInstruction">
                                    <el-select @change="checkTableConnectionPropsOneOrTwo(tranPropsOneOrTwo)"
                                               v-model="tranPropsOneOrTwo" placeholder="请选择表角色">
                                        <el-option
                                                v-for="item in TCharactervalueData"
                                                :value="item"
                                                :label="item">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10" v-if="tranPropsOneOrTwo=='子表'">
                                <el-form-item label="父表名称" prop="tableInstruction">
                                    <el-select  @change="isSon" v-model="connectForm.tableConnectionParentTableName" placeholder="请选择父表">
                                        <el-option
                                                v-for="item in tableData"
                                                :value="item.tablename"
                                                :label="item.tablename">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10" v-if="tranPropsOneOrTwo=='父表'">
                                <el-form-item label="子表名称" prop="tableInstruction">
                                    <el-select @change="isFather" v-model="connectForm.tableConnectionSonTableName" placeholder="请选择子表">
                                        <el-option
                                                v-for="item in tableData"
                                                :value="item.tablename"
                                                :label="item.tablename">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row v-if="Tabletypevalue=='关系型表'">
                            <el-col :span="10">
                                <el-form-item label="级联选择" prop="tableInstruction">
                                    <el-select
                                            @change="checkPropsCaseCadeType(connectForm.tableConnectionPropsCaseCadeType)"
                                            v-model="connectForm.tableConnectionPropsCaseCadeType" placeholder="请选择级联关系">
                                        <el-option
                                                v-for="item in CaseCadeTypeData"
                                                :value="item"
                                                :label="item">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10">
                                <el-form-item label="关系选择" prop="tableInstruction">
                                    <el-select v-model="connectForm.tableConnectionType" placeholder="请选择级联关系">
                                        <el-option
                                                v-for="item in ConnectionType"
                                                :value="item"
                                                :label="item">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <el-button style="margin-left: 40%" type="primary" @click="compl">完成</el-button>
                    <el-button @click="canceldig">取消</el-button>
                </el-dialog>
                <el-select size="medium"  v-model="formInline.searchProjectName">
                    <el-option
                            v-for="item in PList"
                            :key="item"
                            :label="item"
                            :value="item">
                    </el-option>
                </el-select>
                <el-button  type="danger" @click="gennnCode" >代码生成</el-button>
            </el-row>

    </div>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="实体 ID"
                    prop="id">
            </el-table-column>
            <el-table-column
                    label="创建时间"
                    prop="dateCreated">
            </el-table-column>
            <el-table-column
                    label="实体表名"
                    prop="tablename">
            </el-table-column>
            <el-table-column
                    label="TM库名称"
                    prop="tmfileName">
            </el-table-column>
            <el-table-column
                    label="实体类型"
                    prop="tableType">
            </el-table-column>
            <el-table-column
                    label="子表数"
                    prop="sonNumber">
            </el-table-column>
            <el-table-column
                    label="表作者"
                    prop="authod">
            </el-table-column>
            <el-table-column
                    label="领域"
                    prop="domain">
            </el-table-column>
            <el-table-column
                label="表说明"
                prop="tableInstruction">
            </el-table-column>
                <el-table-column
                        label="查看详细信息">
                    <template   slot-scope="scope">
                    <el-button  size="mini" type="text"    @click="handleClickCon(scope.row)">关系</el-button>
                    <el-button  size="mini" type="text"    @click="handleClickprop(scope.row)">属性</el-button>
                    <el-dialog :visible.sync="dialogFormVisible"  :append-to-body="true" @close='closeDialog'>
                        <div v-if="showProp">
                        <el-table
                                :data="indexItem"
                                height="250"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="id"
                                    label="属性 ID"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="prtysName"
                                    label="属性名称"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="prtysInstruct"
                                    label="属性说明">
                            </el-table-column>
                            <el-table-column
                                    prop="prtysIsKey"
                                    label="是否是主键">
                            </el-table-column>
                            <el-table-column
                                    prop="prtysIsnull"
                                    label="可否为空">
                            </el-table-column>
                            <el-table-column
                                    prop="prtysLong"
                                    label="字段长度">
                            </el-table-column>
                            <el-table-column
                                    prop="prtys_IsUnique"
                                    label="是否唯一">
                            </el-table-column>
                            <el-table-column
                                    prop="prtys_Isindex"
                                    label="是否索引">
                            </el-table-column>
                            </el-table>
                        </div>
                        <div v-if="showCon">
                            <el-table
                                    :data="indexConnection"
                                    height="250"
                                    border
                                    style="width: 100%">
                                <el-table-column
                                        prop="id"
                                        label="关系 ID"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="connectionName"
                                        label="关系名称"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="tableConnectionInstruction"
                                        label="关系说明">
                                </el-table-column>
                                <el-table-column
                                        prop="tableConnectionPropsOneOrTwo"
                                        label="主表or子表">
                                </el-table-column>
                                <el-table-column
                                        prop="tableConnectionParentTableName"
                                        label="父表名字">
                                </el-table-column>
                                <el-table-column
                                        prop="tableConnectionSonTableName"
                                        label="子表名称">
                                </el-table-column>
                                <el-table-column
                                        prop="tableConnectionType"
                                        label="关系类型">
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-dialog>
                    </template>
                </el-table-column>
        </el-table>
    </div>
    </div>
</template>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
    import {
        FindALLFile,
        FindOneTypeFilePIC,
        FindOneTypeFileMusic,
        FindOneTypeFileDOCX,
        FindOneTypeFileOTHER,
        FindALLTableMessage,
        GenCodePer,
        FindByInput,
        FindEachConns,
        FindEachProps,
        AddEachAllConnection,
    } from "../../api/soureManagerApi/corpusManageApi";
    export default {
        data() {
            return {
                tablemaster:null,
                TableNameList:[],
                PList:[],
                showProp:false,
                showCon:false,
                tableData:[],
                formInline: {
                    searchInput: '',
                    searchProjectName:'',
                },
                indexItem:[],
                indexConnection:[],
                sonNumber:[],
                dialogFormVisible: false,
                dialogFormVisibleconn:false,
                ConnectionType: ['ONE_TO_MANY', 'MANY_TO_ONE', 'ONE_TO_ONE', 'MANY_TO_MANY'],
                tableMessage:[],
                connectForm: {
                    connectionName: '',//关系名称
                    tableConnectionInstruction: '',//关系说明
                    tableConnectionPropsOneOrTwo: null,//表角色，父表or子表
                    tableConnectionPropsCaseCadeType: '',//级联选择
                    tableConnectionParentTableName: '',//父表名称
                    tableConnectionSonTableName: '',//子表名称
                    tableConnectionType: ''
                },
                tranPropsOneOrTwo: '子表',
                rules: {
                    ConnectionNamerule: [{required: true, message: '请输入实体名称', trigger: 'blur'},],
                    tablemaster:[{required: true, message: '请输入关系主体', trigger: 'blur'},]
                },
                CaseCadeTypeData: ['CascadeType.REMOVE', 'CascadeType.MERGE', 'CascadeType.DETACH', 'CascadeType.REFRESH', 'CascadeType.ALL'],
                tranPropsOneOrTwo: '子表',
                TCharactervalueData: ['子表', '父表'],
                Tabletypevalue: '',//表类型，单表或者有关系的表
                TabletypevalueData: ['单表', '关系型表'],

            }
        },
        methods: {
            addConn(){
                this.dialogFormVisibleconn = true
            },
            canceldig() {
                this.connectForm.connectionName = '',
                    this.connectForm.tableConnectionInstruction = '',
                    this.connectForm.tableConnectionPropsOneOrTwo = null,
                    this.connectForm.tableConnectionPropsCaseCadeType = '',
                    this.connectForm.tableConnectionParentTableName = '',
                    this.connectForm.tableConnectionSonTableName = '',
                    this.connectForm.tableConnectionType = ''
                    this.dialogFormVisibleconn = false
            },
            isSon(){
                this.connectForm.tableConnectionPropsOneOrTwo = false
            },
            isFather(){
                this.connectForm.tableConnectionPropsOneOrTwo = true
            },
            checkTabletypevalue(val) {
                if (val == '单表') {
                    this.$alert('单表类型无需添加关系，请关闭', '添加关系提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                }
                },
            compl() {
                this.have_Connect=true,
                console.log(" console.log(this.connectForm)")
                console.log(this.connectForm)
                AddEachAllConnection(this.tablemaster,this.connectForm)
                this.dialogFormVisibleconn = false

            },
            checkTableConnectionPropsOneOrTwo(val){
                if (val == '子表') {
                    console.log("==================")
                    console.log("hahahah")
                    this.connectForm.tableConnectionPropsOneOrTwo = true
                }
                if (val == '父表') {
                    this.connectForm.tableConnectionPropsOneOrTwo = false
                }
            },
            checkPropsCaseCadeType(val) {
                const h = this.$createElement;
                if (val == 'CascadeType.REMOVE') {
                    this.$notify({
                        title: '级联场景应用提示',
                        message: h('i', {style: 'color: teal'}, '慎用，删除当前实体时，与它有映射关系的实体也会跟着被删除。')
                    });
                }
                ;
                if (val == 'CascadeType.MERGE') {
                    this.$notify({
                        title: '级联场景应用提示',
                        message: h('i', {style: 'color: teal'}, '级联更新（合并）操作,当引用类中的数据改变，会相应地更新被引用中的数据。')
                    });
                }
                ;
                if (val == 'CascadeType.DETACH') {
                    this.$notify({
                        title: '级联场景应用提示',
                        message: h('i', {style: 'color: teal'}, '撤销外键关联之后，只删除自己，不删除被引用对象')
                    });
                }
                ;
                if (val == 'CascadeType.REFRESH') {
                    this.$notify({
                        title: '级联场景应用提示',
                        message: h('i', {style: 'color: teal'}, '被使用端，比如一个文章，不同用户点赞，可以使文章点赞数自动更新')
                    });
                }
                ;
                if (val == 'CascadeType.ALL') {
                    this.$notify({
                        title: '级联场景应用提示',
                        message: h('i', {style: 'color: teal'}, '慎用，会级联删除，比如删除一个实体，会导致这个实体的关联类也全部被删除')
                    });
                }
                ;
            },
            gennnCode(){
                const h = this.$createElement;
                if (this.formInline.searchProjectName==''){
                    this.$notify({
                        title: '代码生成',
                        message: h('i', { style: 'color: teal'}, '请选择要生成的项目名称')
                    });
                }
                else{
                    // GenCodePer(this.formInline.searchProjectName)
                    window.open('http://127.0.0.1:8848/GenCode/GetEntiredProjectZip?ProjectName='+this.formInline.searchProjectName);
                }
            },
            onCreat(){
                this.$router.push("creatTable/");
            },
            closeDialog(){
                this.showCon=false;
                this.showProp=false;
            },
            onSubmit() {
                console.log('submit!');
            },
            handleClickprop(val){
                this.dialogFormVisible=true
                FindEachProps(val.tablename).then(response=>{
                    var tran=JSON.stringify(response.data)
                    this.indexItem=JSON.parse(tran)
                    console.log(this.indexItem)
                })
                this.showProp=true
            },
            handleClickCon(val){
                this.dialogFormVisible=true
                FindEachConns(val.tablename).then(response=>{
                    var tran=JSON.stringify(response.data)
                    this.indexConnection=JSON.parse(tran)
                    console.log(this.indexConnection)
                })
                this.showCon=true
            },
        },
        created:function (){
            FindALLTableMessage().then(response=>{
                var tran=JSON.stringify(response.data)
                this.tableData=JSON.parse(tran)
                // self.FindByNameListSon=response.data;
                console.log(this.tableData)
                for (var i=0;i<this.tableData.length;i++){
                    this.PList.push(this.tableData[i].projectName)
                    this.TableNameList.push(this.tableData[i].tablename)
                }
                for (var i = 0; i <  this.PList.length; i++) {
                    if ( this.PList.indexOf( this.PList[i]) != i) {
                        this.PList.splice(i,1);//删除数组元素后数组长度减1后面的元素前移
                        i--;//数组下标回退
                    }
                }
                console.log(this.PList)
            })

        },
    }
</script>