<template>
    <div>
        <el-button @click="registerService">注册</el-button>
        <el-button @click="getService">查询</el-button>
        <el-button @click="getService">刷新</el-button>
        <el-table :data="serviceData" style="width: 100%">
            <el-table-column  label="服务名"><template scope="scope"><span>{{scope.row.appName}}</span></template></el-table-column>
            <el-table-column  label="IP地址"><template scope="scope"><span>{{scope.row.ip}}</span></template></el-table-column>
            <el-table-column  label="主机名"><template scope="scope"><span>{{scope.row.hostName}}</span></template></el-table-column>
            <el-table-column  label="端口"><template scope="scope"><span>{{scope.row.port}}</span></template></el-table-column>
            <el-table-column  label="状态"><template scope="scope"><span>{{scope.row.status}}</span></template></el-table-column>
            <el-table-column  label="查看服务信息"><template scope="scope"><span>{{scope.row.homePageUrl}}</span></template></el-table-column>
            <el-table-column  label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="backIntoService">开始</el-button>
                    <el-button size="mini" type="danger" @click="outOfService">暂停</el-button>
                    <el-button size="mini" type="danger" @click="deleteService">剔除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {addObj,deleteObj,getObj,getAllObj,outOfObj,backIntoObj} from '@/api/admin/service/index.js'
    export default {
        name: "service",
        data() {
            return {
                serviceData: undefined,
            }
        },
        methods:{
            getAllServices(){
                getAllObj().then(response=>{
                    this.serviceData=response.data;
                })
            },
            getService(){

            },
            registerService(){},
            deleteService(){},
            outOfService(){},
            backIntoService(){}
        },
        created(){
            this.getAllServices();
        }
    }
</script>

<style scoped>

</style>