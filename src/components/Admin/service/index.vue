<template>
    <div class="app-container calendar-list-container">
        <div>
            <el-button @click="registerService">注册</el-button>
            <el-button @click="getService">查询</el-button>
            <el-button @click="getAllServices">刷新</el-button>
            <el-table :data="serviceData" style="width: 100%">
                <el-table-column label="服务名">
                    <template scope="scope"><span>{{scope.row.name}}</span></template>
                </el-table-column>
                <el-table-column label="服务编号" v-if="false">
                    <template scope="scope"><span>{{scope.row.instance[0].istanceId}}</span></template>
                </el-table-column>
                <el-table-column label="IP地址">
                    <template scope="scope"><span>{{scope.row.instance[0].ipAddr}}</span></template>
                </el-table-column>
                <el-table-column label="主机名">
                    <template scope="scope"><span>{{scope.row.instance[0].hostName}}</span></template>
                </el-table-column>
                <el-table-column label="端口">
                    <template scope="scope"><span>{{scope.row.instance[0].port.$}}</span></template>
                </el-table-column>
                <el-table-column label="状态">
                    <template scope="scope"><span>{{scope.row.instance[0].status}}</span></template>
                </el-table-column>
                <!-- <el-table-column  label="查看服务信息"><template scope="scope"><span>{{scope.row.homePageUrl}}</span></template></el-table-column>-->
                <el-table-column width= "300px" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" type="success" @click="backIntoService(scope.row)">开启</el-button>
                        <el-button size="mini" type="danger" @click="outOfService(scope.row)">暂停</el-button>
                        <el-button size="mini" type="danger" @click="deleteService(scope.row)">剔除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
                <el-form :model="postData" ref="form" label-width="100px">
                    <el-form-item label="应用名称" :label-width="formLabelWidth" prop="app">
                        <el-input v-model="postData.name" placeholder="请输入应用"></el-input>
                    </el-form-item>
                    <el-form-item label="主机" :label-width="formLabelWidth" prop="hostName">
                        <el-input v-if="dialogStatus=='create'" v-model="postData.instance.hostName"
                                  placeholder="请输入主机名"></el-input>
                        <el-input v-else v-model="postData.instance.hostName" placeholder="请输入实例ID" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="IP地址" :label-width="formLabelWidth" prop="ipAddr">
                        <el-input v-if="dialogStatus=='create'" v-model="postData.instance.ipAddr"
                                  placeholder="请输入IP"></el-input>
                    </el-form-item>
                    <el-form-item label="端口号" :label-width="formLabelWidth" prop="port">
                        <el-input v-if="dialogStatus=='create'" v-model="postData.instance.port.$"
                                  placeholder="请输入端口号"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="cancel(postData)">取消</el-button>
                  <el-button v-if="dialogStatus=='create'" type="primary" @click="create()">确认</el-button>
                    <el-button v-else type="primary" @click="update('postData')">确认</el-button>
            </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {addObj, deleteObj, getObj, getAllObj, outOfObj, backIntoObj} from '@/api/admin/Service/index.js'

    var postDataStr = '{"name":"","instance":{"hostName": "","app": "","ipAddr": "","port":{"$": ""," enabled": "true"},"dataCenterInfo":{" class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo","name": "MyOwn"},"actionType": "ADDED"}}'
    // "instance":
    //     {
    //         "hostName": "192.168.153.1",
    //         "app": "ZUT",
    //         "ipAddr": "192.168.153.1",
    //         "port":"{"
    //             "$": "8848",
    //             "@enabled": "true"
    //         "}",
    //         "dataCenterInfo":"{"
    //             "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
    //             "name": "MyOwn"
    //         "}",
    //         "actionType": "ADDED"
    //     "}"


    var portStr = '{"@enabled":"true","$":""}'
    var dataCenterInfoStr = '{"@class":"com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo","name":"MyOwn"}'
    export default {
        name: "service",
        data() {
            return {
                serviceData: [],
                // postData: {
                //     appName: '',
                //     instance: {
                //         instanceId: '',
                //         hostName: '',
                //         app: '',
                //         ipAddr: '',
                //         port: JSON.parse(portStr),
                //         dataCenterInfo: JSON.parse(dataCenterInfoStr),
                //         actionType: "ADDED"
                //     }
                // },
                postData: JSON.parse(postDataStr),
                isSearch: false,
                appName: undefined,
                dialogStatus: '',
                dialogFormVisible: false,
                textMap: {
                    create: '创建',
                    update: '编辑',
                },
                formLabelWidth: '120px',
            }
        },
        methods: {
            getAllServices() {
                // console.log('准备得到服务');
                getAllObj().then(response => {
                    this.serviceData = response.data.applications.application;
                })
            },
            getService() {

            },
            registerService() {
                this.restTamp();
                this.dialogStatus = 'create';
                this.dialogFormVisible = true;
                // addObj(this.postData.appName, this.postData.instance).then(response => {
                //     alert("ccccc");
                // })
            },
            deleteService(row) {
                // console.log( row.instance[0].instanceId);
                this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteObj(row.name, row.instance[0].instanceId)
                        .then(() => {
                            this.$notify({
                                title: '成功',
                                message: '删除成功',
                                type: 'success',
                                duration: 2000
                            });
                            const index = this.serviceData.indexOf(row);
                            this.serviceData.splice(index, 1);
                        });
                });
            },
            outOfService(row) {//暂停
                console.log(row.name);
                console.log(row.instance[0].ipAddr);
                outOfObj(row.name, row.instance[0].ipAddr).then(() => {
                    this.$notify({
                        title: '成功',
                        message: '暂停成功',
                        type: 'success',
                        duration: 2000
                    });
                })
            },
            backIntoService(row) {//开启
                this.$notify({
                    title: '成功',
                    message: '开启成功',
                    type: 'success',
                    duration: 2000
                });
                // backIntoObj(row.name, row.instance[0].ipAddr).then(() => {
                //
                // })
            },
            create() {
                // this.dialogFormVisible=false;
                console.log('为请求前');
                this.postData.instance.app = this.postData.name;
                this.postData.instance.instanceId = this.postData.name + this.postData.instance.port.$;
                // console.log(this.postData.name+this.postData.instance.app+this.postData.instance.port+this.postData.instance.dataCenterInfo.class);
                addObj(this.postData.name, this.postData.instance).then(() => {
                    console.log('请求后');
                    this.dialogFormVisible = false;
                    this.getAllServices();
                    this.$notify({
                        title: '成功',
                        message: '创建成功',
                        type: 'success',
                        duration: 2000
                    })
                })
            },
            update() {

            },
            restTamp() {
                this.form = {
                    appName: undefined,
                    hostName: undefined,
                    ipAddr: undefined,
                    port: undefined,
                }
            },
            cancel(formName) {
                this.dialogFormVisible = false;
                this.$refs[formName].resetFields();
            },
        },
        created() {
            this.getAllServices();
        }
    }
</script>

<style scoped>

</style>