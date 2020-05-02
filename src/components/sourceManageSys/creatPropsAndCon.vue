<template>
    <div>
        <el-row>
            <el-button type="primary" @click="addprops()" style="float: left;margin-bottom: 1%">新增属性</el-button>
            <el-button type="primary" style="float: left;margin-bottom: 1%" @click="handleClickCon">添加关系</el-button>
            <el-button v-if="completeCode"type="danger" style="float: right" @click="gennnCode">代码生成</el-button>
            <el-dialog :visible.sync="dialogFormVisible" :append-to-body="true">
                <el-form ref="connectForm" :model="connectForm" label-width="80px" :rules="rules"
                         class="demo-ruleForm">
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="关系名称" prop="ConnectionName">
                                <el-input v-model="connectForm.ConnectionName"></el-input>
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
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="实体说明" prop="tableInstruction">
                                <el-input v-model="connectForm.tableConnectionInstruction"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <el-button style="margin-left: 40%" type="primary" @click="print">完成</el-button>
                <el-button @click="canceldig">取消</el-button>
            </el-dialog>
            <el-col :span="24">
                <el-table size="mini" :data="master_user.data" border style="width: 100%" highlight-current-row>
                    <el-table-column type="index"></el-table-column>
                    <el-table-column v-for="(item,index) in master_user.columns" :label="item.label"
                                     :prop="item.prop.columnname"
                                     :width="item.width">
                        <template slot-scope="scope">
                    <span v-if="scope.row.isSet&&item.prop.tp=='txt'">
                    <el-input @on-blur="validateJyh(master_user.sel[item.prop.columnname])" maxlength="10" clearable
                              size="mini" placeholder="请输入内容"
                              v-model="master_user.sel[item.prop.columnname]"></el-input></span>
                            <span v-if="scope.row.isSet&&item.prop.tp=='bol'">
                        <el-select size="mini" v-model="master_user.sel[item.prop.columnname]">
                            <el-option
                                    v-for="item in TF"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select></span>
                            <span v-if="scope.row.isSet&&item.prop.tp=='sec'">
                        <el-select size="mini" v-model="master_user.sel[item.prop.columnname]">
                            <el-option
                                    v-for="item in typedata"
                                    :key="item"
                                    :label="item"
                                    :value="item">
                            </el-option>
                        </el-select></span>
                            <span v-else>{{scope.row[item.prop.columnname]}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="">
                        <template slot-scope="scope">
             <span class="el-tag el-tag--success el-tag--mini" style="cursor: pointer;"
                   @click.stop="saveRow(scope.row,scope.$index)">确定
             </span>
                            <span class="el-tag el-tag--primary el-tag--mini" style="cursor: pointer;"
                                  @click="editRow(scope.row,scope.$index)">编辑
              </span>
                            <span class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;"
                                  @click="deleteRow(scope.$index,master_user.data)">删除
             </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="24">
                <div class="el-table-add-row" style="width: 99.2%;" @click="addprops()"><span>+ 添加</span></div>
            </el-col>
            <el-col :span="24">
                <el-button style="margin-left: 0%;margin-top: 2%" type="primary" @click="finish">实体表创建完成</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {hub} from "../../api/soureManagerApi/hub.js";
    import {
        FindALLFile,
        FindOneTypeFilePIC,
        FindOneTypeFileMusic,
        FindOneTypeFileDOCX,
        FindOneTypeFileOTHER,
        AddEachAllProps,
        FindALLTableMessage,
        AddEachAllConnection,
        GenCodePer,
        FindByInput,
        FindEachConns,
        FindEachProps,
        FindAllTMList,
        AddEachTable
    } from "../../api/soureManagerApi/corpusManageApi";

    export default {
        name: "creatPropsAndCon",
        data() {
            return {
                completeCode:false,
                have_Props:false,
                have_Connect:false,
                TableData: [],
                ConnectionType: ['ONE_TO_MANY', 'MANY_TO_ONE', 'ONE_TO_ONE', 'MANY_TO_MANY'],
                rules: {
                    ConnectionName: [{required: true, message: '请输入关系名称，只能是字母', trigger: 'blur'},]
                },
                CaseCadeTypeData: ['CascadeType.REMOVE', 'CascadeType.MERGE', 'CascadeType.DETACH', 'CascadeType.REFRESH', 'CascadeType.ALL'],
                tranPropsOneOrTwo: '子表',
                TCharactervalueData: ['子表', '父表'],
                Tabletypevalue: '',//表类型，单表或者有关系的表
                TabletypevalueData: ['单表', '关系型表'],
                connectForm: {
                    connectionName: '',//关系名称
                    tableConnectionInstruction: '',//关系说明
                    tableConnectionPropsOneOrTwo: null,//表角色，父表or子表
                    tableConnectionPropsCaseCadeType: '',//级联选择
                    tableConnectionParentTableName: '',//父表名称
                    tableConnectionSonTableName: '',//子表名称
                    tableConnectionType: ''
                },
                dialogFormVisible: false,
                typedata: ["int", "String", "Long", "Boolean", "byte", "short", "float", "double", "char"],
                TF: [true, false],
                acceptLi: [],
                propsData:
                    {
                        prtysName: '',//属性名称
                        prtysInstruct: '',//属性说明
                        prtysIsKey: null,//是否是主键
                        prtysIsnull: null,//可否为空
                        prtysLong: '',//字段长度
                        prtys_IsUnique: null,//是否唯一
                        prtys_Isindex: null,//是否索引
                    },
                forBackProps: [],//最终传给后端的值
                checked: false,
                master_user: {
                    sel: null, //选中行
                    columns: [{
                        prop: {
                            columnname: "prtysName",
                            tp: "txt"
                        },
                        label: "属性名称",
                        width: 120
                    },
                        {
                            prop: {
                                columnname: "prtysInstruct",
                                tp: "txt"
                            },
                            label: "属性说明",
                            width: 150
                        },
                        {
                            prop: {
                                columnname: "propertyType",
                                tp: "sec"
                            },
                            label: "属性类型"
                        },
                        {
                            prop: {
                                columnname: "prtysIsKey",
                                tp: "bol"
                            },
                            label: "是否是主键",
                            width: 120
                        },
                        {
                            prop: {
                                columnname: "prtysIsnull",
                                tp: "bol"
                            },
                            label: "可否为空",
                            width: 120
                        },
                        {
                            prop: {
                                columnname: "prtysLong",
                                tp: "txt"
                            },
                            label: "字段长度"
                        },
                        {
                            prop: {
                                columnname: "prtys_IsUnique",
                                tp: "bol"
                            },
                            label: "是否唯一"
                        },
                        {
                            prop: {
                                columnname: "prtys_Isindex",
                                tp: "bol"
                            },
                            label: "是否索引"
                        },
                    ],
                    data: [],
                },
            }
        },
        beforeMount() {
            console.log("beforeMount.log(this.acceptLi)")
            this.acceptLi = JSON.parse(JSON.stringify(this.$route.query.uid))
            console.log(this.acceptLi)
        },
        created: function () {
            console.log("外部的created中的console.log(this.acceptLi)")
            FindALLTableMessage().then(response => {
                //console.log("created中的FindALLTableMessage")
                var tran = JSON.stringify(response.data)
                this.tableData = JSON.parse(tran)
            })
        },
        methods: {
            gennnCode(){
                // GenCodePer(this.acceptLi.projectName)
                window.open('http://127.0.0.1:8848/GenCode/GetEntiredProjectZip?ProjectName='+this.acceptLi.projectName);
            },
            isSon(){
                this.connectForm.tableConnectionPropsOneOrTwo = false
            },
            isFather(){
                this.connectForm.tableConnectionPropsOneOrTwo = true
            },
            finish() {
                console.log("=======================这是准备提交给后台的数据=================")
                console.log(this.acceptLi)
                AddEachTable(this.acceptLi.tablename, JSON.stringify(this.acceptLi));
                if ( this.master_user.data[0].prtysName!=''&&this.master_user.data[0].prtysName!=null){
                    for (let i = 0; i < this.master_user.data.length; i++) {
                        delete this.master_user.data[i]["isSet"];
                        this.forBackProps.push(this.master_user.data[i])
                    }
                    console.log(this.forBackProps)
                    AddEachAllProps(this.acceptLi.tablename, this.forBackProps)
                }
                // console.log(this.master_user.data)
                // console.log("this.connectForm")
                // console.log(this.connectForm)
                this.forBackProps = [];
                if(this.have_Connect){
                    console.log("this.connectForm")
                    console.log(this.connectForm)
                    AddEachAllConnection(this.acceptLi.tablename,this.connectForm)
                }
                this.completeCode=true
            },
            canceldig() {
                    this.connectForm.connectionName = '',
                    this.connectForm.tableConnectionInstruction = '',
                    this.connectForm.tableConnectionPropsOneOrTwo = null,
                    this.connectForm.tableConnectionPropsCaseCadeType = '',
                    this.connectForm.tableConnectionParentTableName = '',
                    this.connectForm.tableConnectionSonTableName = '',
                    this.connectForm.tableConnectionType = ''
            },
            print() {
                this.have_Connect=true,
                console.log(" console.log(this.connectForm)")
                console.log(this.connectForm)
                this.dialogFormVisible = false
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
            checkTableConnectionPropsOneOrTwo(val) {
                if (val == '子表') {
                    console.log("==================")
                    console.log("hahahah")
                    this.connectForm.tableConnectionPropsOneOrTwo = true
                }
                if (val == '父表') {
                    this.connectForm.tableConnectionPropsOneOrTwo = false
                }
            },
            handleClickCon() {
                this.dialogFormVisible = true
            },
            validateJyh(value) {
                let reg = /^[a-zA-Z]*/;
                var _this = this;
                if (!reg.test(value)) {
                    console.log("=====================")
                    this.$Message.error("请输入字母组成的属性名");
                }
            },
            addprops() {
                console.log("wwwwwwwwwwwwwww")
                for (let i of this.master_user.data) {
                    if (i.isSet) return this.$message.warning("请先保存当前编辑项");
                }
                let j = {
                    "prtysName": '',//属性名称
                    "prtysInstruct": '',//属性说明
                    "prtysIsKey": null,//是否是主键
                    "prtysIsnull": null,//可否为空
                    "prtysLong": '',//字段长度
                    "prtys_IsUnique": null,//是否唯一
                    "prtys_Isindex": null,//是否索引
                    "isSet": true
                };
                var checkprtysName = true;
                for (var i = 0; i < this.master_user.data.length; i++) {
                    if (j.prtysName == this.master_user.data.length[i]) {
                        checkprtysName = false;
                        break;
                    }
                }
                if (j.prtysName != null && checkprtysName) {
                    this.master_user.data.push(j);
                }
                this.master_user.sel = JSON.parse(JSON.stringify(j));
            },
            saveRow(row, index) { //保存
                console.log("this.master_user.sel)");
                console.log(this.master_user.sel);
                let data = JSON.parse(JSON.stringify(this.master_user.sel));
                for (let k in data) {
                    console.log("row[k] = data[k]");
                    console.log(data[k]);
                    row[k] = data[k] //将sel里面的value赋值给这一行。ps(for....in..)的妙用，细心的同学发现这里我并没有循环对象row
                }
                row.isSet = false;
            },
            editRow(row) { //编辑
                for (let i of this.master_user.data) {
                    if (i.isSet) return this.$message.warning("请先保存当前编辑11项");
                }
                this.master_user.sel = row
                row.isSet = true
            },
            deleteRow(index, rows) { //删除
                rows.splice(index, 1)
            }
        },
    }
</script>

<style scoped>
    .el-table-add-row {
        margin-top: 10px;
        width: 100%;
        height: 34px;
        border: 1px dashed #c1c1cd;
        border-radius: 3px;
        cursor: pointer;
        justify-content: center;
        display: flex;
        line-height: 34px;
    }
</style>