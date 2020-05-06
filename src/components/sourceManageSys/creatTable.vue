<template>
    <div>
        <el-card>
            <h1 style="margin-bottom: 3%">基本信息</h1>
            <el-form style="margin-left: 16%;" ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules"
                     class="demo-ruleForm">
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="实体名称" prop="tablename">
                            <el-input v-model="ruleForm.tablename" style="width: 230px; float: left"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="实体说明" prop="tableInstruction">
                            <el-input v-model="ruleForm.tableInstruction" style="width: 230px; float: left"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="实体作者">
                            <el-input v-model="ruleForm.authod" style="width: 230px;float: left"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="TM库名" prop="tmfileName">
                            <!--                            <el-select style="width: 230px;float: left" v-model="ruleForm.tmfileName"-->
                            <!--                                       placeholder="请选择所属TM库名称">-->
                            <!--                                <el-option-->
                            <!--                                        v-for="item in TmList"-->
                            <!--                                        :value="item.item"-->
                            <!--                                        :label="item">-->
                            <!--                                </el-option>-->
                            <!--                                <el-button type="text">hahahah</el-button>-->
                            <!--                            </el-select>-->
                            <el-autocomplete
                                    class="my-autocomplete"
                                    v-model="ruleForm.tmfileName"
                                    :fetch-suggestions="querySearch"
                                    placeholder="请输入内容"
                                    @select="handleSelect">
                                <i
                                        class="el-icon-edit el-input__icon"
                                        slot="suffix"
                                        @click="handleIconClick">
                                </i>
                                <template slot-scope="{ item }">
                                    <div>{{item.value}}</div>
                                </template>
                            </el-autocomplete>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="所属项目" prop="projectName">
                            <el-input v-model="ruleForm.projectName" style="width: 230px;float: left"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="实体领域">
                            <el-input v-model="ruleForm.domain" style="width: 230px;float: left"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="实体类型" prop="tableType">
                            <el-select style="width: 230px;float: left" v-model="ruleForm.tableType"
                                       placeholder="请选择实体类型">
                                <el-option
                                        v-for="item in typedata"
                                        :value="item"
                                        :label="item">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="所属模块" prop="moduleName">
                            <el-input v-model="ruleForm.moduleName" style="width: 230px;float: left"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-form-item label="所属包名" prop="packageName">
                            <el-input v-model="ruleForm.packageName" style="width: 230px;float: left"></el-input>
                        </el-form-item>
                    </el-col>

                </el-row>
            </el-form>
            <el-button type="primary" @click="onNext">下一步</el-button>
            <el-button @click="onCancel">取消</el-button>
        </el-card>
    </div>
</template>

<script>
    import {
        FindALLFile,
        FindOneTypeFilePIC,
        FindOneTypeFileMusic,
        FindOneTypeFileDOCX,
        FindOneTypeFileOTHER,
        FindALLTableMessage,
        FindByInput,
        FindEachConns,
        FindEachProps,
        FindAllTMList
    } from "../../api/soureManagerApi/corpusManageApi";
    import {hub} from "../../api/soureManagerApi/hub";

    export default {
        name: "creatTable",
        data() {
            var validateSurnmae = (rule, value, callback) => {
                let reg = /^[A-Za-z]+$/
                if (!reg.test(value)) {
                    callback(new Error("请输入实体名称，只能是字母"))
                } else {
                    callback()
                }
            };
            return {
                tableData: [],
                TmList: [],
                TmListForvalue: [],
                // typedata:["int","String","Long","Boolean","byte","short","float","double","char"],
                typedata: ["TREE", "ALONE"],
                ruleForm: {
                    tablename: '',
                    tmfileName: '',
                    tableInstruction: '',
                    authod: '',
                    dateCreated: '',
                    tableType: [],
                    domain: '',
                    parentName: '',
                    packageName: '',
                    projectName: '',
                    moduleName: '',
                    packageNameLoad: 'xxx',
                },
                rules: {
                    tablename: [
                        {required: true, message: '请输入实体名称，只能是字母', trigger: 'blur'},
                        {min: 3, max: 8, message: '长度在 3 到 8个字符', trigger: 'blur'},
                        {validator: validateSurnmae, trigger: "blur"},
                    ],
                    tableInstruction: [
                        {required: true, message: '请输入实体说明', trigger: 'blur'},
                    ],
                    projectName: [
                        {required: true, message: '请选择实体所属项目名称', trigger: 'blur'},
                    ],
                    packageName: [
                        {required: true, message: '请输入所属包名', trigger: 'blur'},
                    ],
                    moduleName: [
                        {required: true, message: '请输入模块名称', trigger: 'blur'},
                    ],//这里的包路径等于包名
                    tmfileName: [
                        {required: true, message: '请输入所属TM库', trigger: 'blur'},
                    ],
                    tableType: [
                        {required: true, message: '请选择实体是树形或者单表型', trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {
            querySearch(queryString, cb) {
                var TmList = this.TmList;
                var results = queryString ? TmList.filter(this.createFilter(queryString)) : TmList;
                // 调用 callback 返回建议列表的数据
                console.log(results);
                cb(results);
            },
            createFilter(queryString) {
                return (TmListForvalue) => {
                    return (TmListForvalue.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                    console.log("==========================1111111111");
                };
            },
            handleSelect(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            },
            onCancel() {
                this.ruleForm = null
            },
            onNext() {
                if ((this.ruleForm.tablename == null) || (this.ruleForm.tablename == '')) {
                    this.$alert('请填写实体名称', '内容填写不完整', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else if ((this.ruleForm.tableInstruction == null) || (this.ruleForm.tableInstruction == '')) {
                    this.$alert('请填写实体说明', '内容填写不完整', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else if ((this.ruleForm.tmfileName == null) || (this.ruleForm.tmfileName == '')) {
                    this.$alert('请选择所属TM库名称', '内容填写不完整', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else if ((this.ruleForm.tableType == null) || (this.ruleForm.tableType == '')) {
                    this.$alert('请填写实体类型', '内容填写不完整', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else if ((this.ruleForm.projectName == null) || (this.ruleForm.projectName == '')) {
                    this.$alert('请填写项目名称', '内容填写不完整', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else if ((this.ruleForm.moduleName == null) || (this.ruleForm.moduleName == '')) {
                    this.$alert('请填写模块名称', '内容填写不完整', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else if ((this.ruleForm.packageName == null) || (this.ruleForm.packageName == '')) {
                    this.$alert('请填写所属包名', '内容填写不完整', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else {
                    // hub.$emit('myEvent',this.ruleForm)
                    this.$router.push({
                        path: "creatPropsAndCon/",
                        query: {
                            uid: this.ruleForm
                        }
                    });
                }

        },
        loadAll() {
            var load = [];
            for (var i = 0; i < this.TmList.length; i++) {
                console.log("this.ruleForm.tmfileName.length" + this.TmList.length)
                var a = {"value": this.TmList[i]}
                console.log("=============")
                console.log(this.TmList[i])
                console.log("wwwwwwwwwwwwwwwwwwwww")
                load.push(a)
            }
            return load;
        },
    }
    ,
    created: function () {
        FindAllTMList().then(response => {
            var tran = JSON.stringify(response.data);
            this.TmList = JSON.parse(tran);
        })
        FindALLTableMessage().then(response => {
            var tran = JSON.stringify(response.data)
            this.tableData = JSON.parse(tran)
            // self.FindByNameListSon=response.data;
            // console.log(this.tableData)
        })
    }
    ,
    mounted()
    {
        this.TmListForvalue = this.loadAll();
    }

    }
</script>

<style>
    .my-autocomplete {
        width: 230px;
        float: left;
    }

    li {
        line-height: normal;
        padding: 7px;
    }

    .name {
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .addr {
        font-size: 12px;
        color: #b4b4b4;
    }

    .highlighted .addr {
        color: #ddd;
    }
</style>