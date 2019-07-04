<template>
    <div class="app-container calendar-list-container">
        <el-card>
        <div class="filter-container">
            <el-input placeholder="姓名或编号" v-model="input.username" style="width: 200px;" class="filter-item" @keyup.enter.prevent="handleFilter"></el-input>
            <el-button type="primary" class="filter-item" @click="handleFilter" icon="el-icon-search">搜索</el-button>
            <el-button type="primary" class="filter-item" style="margin-left: 10px" @click="handleCreate">添加</el-button>
        </div>
        <div >
            <el-table :data="list" style="width: 100%"
                      row-key="id"
                      :expand-row-keys="expands">
                <el-table-column type="expand">
                    <template slot-scope="scope">
                        <el-card>
                                    <el-row>
                                        <el-col :span="10">
                                    <el-form :model="pageForm" ref="pageForm" label-width="100px" style="width: 500px;margin-left: 20px;margin-top: 100px">
                                        <el-form-item label="主题样式选择:" :label-width="formLabelWidth" >
                                            <el-select class="filter-item" v-model="pageForm.themeStyle" placeholder="请选择" @change="changeShow">
                                                <el-option v-for="item in  setThemeOption" :key="item" :label="item" :value="item"> </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="页面一样式选择:" :label-width="formLabelWidth" >
                                            <el-select class="filter-item" v-model="pageForm.pageOneStyle" placeholder="请选择" @change="changeShow">
                                                <el-option v-for="item in  setOneOption" :key="item.value" :label="item.table" :value="item.value"> </el-option>
                                            </el-select>
                                        </el-form-item>
                                       <!-- <el-form-item label="页面二样式选择:" :label-width="formLabelWidth" >
                                            <el-select class="filter-item" v-model="pageForm.pageTwoStyle" placeholder="请选择" @change="changeShow">
                                                <el-option v-for="item in  setTwoOption" :key="item.value" :label="item.table" :value="item.value"> </el-option>
                                            </el-select>
                                        </el-form-item>-->
                                    </el-form>
                                            <el-button size="small" type="warning" @click="updatePage('pageForm')" class="el-icon-setting"style="margin-left: 180px">保存</el-button>
                                        </el-col>
                                        <el-col :span="10">
                                    <el-card :style="photoShow">
                                    </el-card>
                                        </el-col>
                                </el-row>
                        </el-card>
                    </template>
                </el-table-column>
                <el-table-column label="序号" type="index" ></el-table-column>
                <el-table-column label="序号" width="180" v-if="show"><template slot-scope="scope" ><span>{{scope.row.id}}</span></template>
                </el-table-column>
                <el-table-column  label="账号" width="130"><template slot-scope="scope"><span>{{scope.row.userAccount}}</span></template>
                </el-table-column>
                <el-table-column label="密码" width="140"><template slot-scope="scope"><span>{{scope.row.password}}</span></template>
                </el-table-column>
                <el-table-column width="130" label="用户名"><template slot-scope="scope"><span>{{scope.row.username}}</span></template>
                </el-table-column>
                <el-table-column width="140" label="性别"><template slot-scope="scope"><span>{{scope.row.gender}}</span></template></el-table-column>
                <el-table-column width="190" label="邮箱"><template slot-scope="scope"><span>{{scope.row.email}}</span></template></el-table-column>
                <el-table-column label="角色组" width="150"><template slot-scope="scope"></template>
                </el-table-column>
                <el-table-column label="最近更新时间" width="260"><template slot-scope="scope"><span>{{scope.row.dateCreated}}</span></template>
                </el-table-column>
                <el-table-column label="操作" width="190">
                    <template slot-scope="scope">
                        <el-button size="small" type="success" @click="handleUpdate(scope.row)" class="el-icon-edit">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.row)" class="el-icon-delete">删除</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="页面配置" width="100">
                    <template slot-scope="scope">
                        <el-button size="small" type="warning" @click="rowClick(scope.row)" class="el-icon-setting">配置</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total"> </el-pagination>
        </div>
        <div>
            <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" >
                <el-form :model="form" ref="form" :rules="rules" label-width="100px" >
                    <el-form-item label="姓名" :label-width="formLabelWidth" prop="username" >
                        <el-input v-model="form.username" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="账号" :label-width="formLabelWidth" prop="userAccount" >
                        <el-input v-if="dialogStatus=='create'" v-model="form.userAccount" placeholder="请输入账号"></el-input>
                        <el-input v-else v-model="form.userAccount"  placeholder="请输入账号" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                        <el-input v-if="dialogStatus=='create'" v-model="form.password"  type="password" placeholder="请输入密码"></el-input>
                        <el-input v-else v-model="form.password"  type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth" >
                        <el-select class="filter-item" v-model="form.gender" placeholder="请选择">
                            <el-option v-for="item in  sexOption" :key="item" :label="item" :value="item"> </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email" >
                        <el-input  v-model="form.email" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="cancel(form)">取消</el-button>
                  <el-button v-if="dialogStatus=='create'" type="primary"  @click="create('form')">确认</el-button>
                    <el-button v-else type="primary" @click="update('form')">确认</el-button>
                 </span>
            </el-dialog>
        </div>
        </el-card>
    </div>
</template>
<script>
    import {page,addObj,getObj,delObj,putObj,getName,setObj}from '../../api/admin/user/index.js'
    export default {
        name: "personalize",
        data() {
            const validatePass1 = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error('密码不能小于5位'));
                } else {
                    callback();
                }
            };
            const validatePass=(rule,value,callback)=>{
                const regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if(value ===''){
                    return callback(new Error('邮箱不能为空'));
                }
                else if (!regEmail.test(value)) {
                    return callback(new Error('邮箱格式输入不正确'));
                }
                else {
                    return callback();
                }
            };
            return {
                photoShow:{
                    backgroundImage:'url(' + require('../../assets/img/welcome.png') + ')',
                    width: '700px',
                    height: '500px',
                },
                expands:[],
                pageSet:[],
                input:{
                    username:undefined
                },
                show:false,
                dialogTableVisible: false,//表格是否显示
                dialogFormVisible: false,//新增界面是否显示
                form: {//用户名表单
                    username: undefined,
                    userAccount: undefined,
                    gender:'男',
                    password: undefined,
                    email: undefined,
                },
                pageForm:{
                    themeStyle:'',
                     pageOneStyle:'',
                    pageTwoStyle:'',
                },
                rules:{
                    username:[
                        {
                            required: true,
                            message: '请输入用户',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 20,
                            message: '长度在 3 到 20 个字符',
                            trigger: 'blur'
                        }
                    ],
                    userAccount:[
                        {
                            required: true,
                            message: '请输入账户',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 20,
                            message: '长度在 3 到 20 个字符',
                            trigger: 'blur'
                        }
                    ],
                    password:[
                        {
                            validator:validatePass1,
                            required: true,
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 20,
                            message: '长度在 3 到 20 个字符',
                            trigger: 'blur'
                        }
                    ],
                    email:[
                        { validator: validatePass,
                            trigger: 'blur'
                        },
                    ],
                },
                sexOption:['male','female'],
                setThemeOption:['主题一','主题二'],
                setOneOption:[{table:'样式一',value:'页面1-1'}, {table:'样式二',value:'页面1-2'}],
                setTwoOption:[{table:'样式一',value:'页面2-1'}, {table:'样式二',value:'页面2-2'}],
                formLabelWidth: '120px',
                listQuery: {//列表的限制
                    page: 1,
                    limit: 20,
                },
                list:null,//数据列表
                total:null,//一共多少页
                listLoading:'true',//列表是否加载
                dialogStatus:'',//对话框状态是否为创建状态，也可能是编辑状态
                textMap:{
                    create:'创建',
                    update:'编辑',
                },//定义一个数据对象,，有创建编辑属性，用于对话框的判断
            }
        },
        created(){
            this.getList();//创建时就得到列表
        },
        methods:{
            changeShow(val){
                console.log(val);
                 if(val=="主题一")
                     this.photoShow.backgroundImage='url(' + require('../../assets/img/themeone.png') + ')';
                if(val=="主题二")
                    this.photoShow.backgroundImage='url(' + require('../../assets/img/themetwo.png') + ')';
                if(val=="页面1-1")
                    this.photoShow.backgroundImage='url(' + require('../../assets/img/styleone.png') + ')';
                if(val=="页面1-2")
                    this.photoShow.backgroundImage='url(' + require('../../assets/img/styletwo.png') + ')';
              /*  if(val=="页面2一1")
                    this.photoUrl="/static/img/bar.fdc119c1.png";
                if(val=="页面2-2")
                    this.photoUrl="/static/img/bar.fdc119c1.png";
                this.$refs.photo.src=this.photoUrl;*/
            },
            rowClick(row,event,column){
                getObj(row.id).then(response=>{
                    this.pageForm.id=response.data.id;
                    console.log(this.pageForm.id);
                })
                Array.prototype.remove= function (val) {
                    let index =this.indexOf(val);
                    if(index > -1){
                        this.splice(index,1);
                    }

                }  ;
                if(this.expands.indexOf(row.id)<0){
                    this.pageForm.pageTwoStyle='';
                    this.pageForm.pageOneStyle='';
                    this.pageForm.themeStyle='';
                    this.expands=[];
                    this.photoShow.backgroundImage='url(' + require('../../assets/img/welcome.png') + ')';
                    this.expands.push(row.id);
                }else {
                    this.expands.remove(row.id);
                }
            },
            updatePage(){
                this.expands=[];
                    console.log(this.pageForm);
                    this.pageSet.push(this.pageForm.themeStyle);
                    this.pageSet.push(this.pageForm.pageOneStyle);
                    this.pageSet.push(this.pageForm.pageTwoStyle);
                    console.log(this.pageSet);
                    setObj(this.pageForm.id,this.pageSet).then(()=>{
                        this.$notify({
                            title:'成功',
                            message:'配置成功',
                            type:'success',
                            duration:2000
                        });
                    this.pageSet=[];
                // ;
                // this.pageOneStyle='';
                // this.themeStyle='';

            })
        },
            getList(){//得到这个列表的内容
                this.listLoading= true;
                page(this.listQuery)
                    .then(response=>{
                        // response=response.body;
                        this.list=response.data['content'];//后台响应的数据，返回给前台的列表
                        this.total=response.data['totalElements'];
                        console.log(this.total);
                        this.listLoading=false
                    })
                /*  this.$axios.get("http://127.0.0.1:8848/admin/user/?page="+this.listQuery.page+"&limit="+this.listQuery.limit).then(response=>{
                      this.list=response.data['content'];
                      console.log(this.list);
                  })*/
            },
            handleFilter(){
                this.listLoading=true;
                getName(this.input).then((response)=>{//后台查找账号的名字
                    console.log(this.input);
                    console.log('kkkkkk');
                    console.log(response.data);
                    this.list=response.data;
                    // this.total=response.data['totalElements'];data
                    this.listLoading=false;
                })
            },
            //添加用户
            create(formName){
                console.log("能够创建");
                // this.dialogFormVisible=false;
                const set=this.$refs;
                console.log(this.$refs[formName]);
                set[formName].validate(valid=>{
                    if(valid){
                        console.log('为请求前');
                        addObj(this.form).then(()=>{
                            console.log('请求后');
                            this.dialogFormVisible=false;
                            this.getList();
                            this.$notify({
                                title:'成功',
                                message:'创建成功',
                                type:'success',
                                duration:2000
                            })
                        })
                    }
                })
            },
            handleSizeChange(val){//当前限制页数据条数的改变，改变限制条数，再从后台进行获取，重新渲染
                this.listQuery.limit=val;
                this.getList();
            },
            handleCurrentChange(val){//当前第几个页面的改变，传参数，重新获取列表并且重新在表单渲染
                this.listQuery.page=val;
                this.getList();
            },
            handleCreate(){//添加用户时，点击的事件
                this.restTamp();
                this.dialogStatus='create';
                this.dialogFormVisible=true;
            },
            //点击编辑
            handleUpdate(row){
                getObj(row.id).then(response=>{
                    this.form=response.data;
                    this.dialogFormVisible = true;
                    this.dialogStatus = 'update';
                })
            },
            //删除
            handleDelete(row){this.$confirm('此操作将永久删除, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    delObj(row.id)
                        .then(() => {
                            this.$notify({
                                title: '成功',
                                message: '删除成功',
                                type: 'success',
                                duration: 2000
                            });
                            const index = this.list.indexOf(row);
                            this.list.splice(index, 1);
                        });
                });
            },
            update(formName){
                console.log("能够更新");
                const set=this.$refs;
                set[formName].validate((valid)=>{
                    if (valid){
                        this.dialogFormVisible=false;
                        putObj(this.form.id,this.form).then(()=>{
                            this.dialogFormVisible=false;
                            this.getList();
                            this.$notify({
                                title:'成功',
                                message:'更新成功',
                                type:'success',
                                duration:2000
                            });
                        })
                    }else {
                        return false;
                    }
                });
            },
            restTamp(){
                this.form={
                    username: undefined,
                    userAccount: undefined,
                    gender:'男',
                    password: undefined,
                    email: undefined,
                }
            },
            cancel(formName){
                this.dialogFormVisible=false;
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style >
    .el-table__header th, .el-table__header tr{
        line-height: 40px;
    }

    .filter-container{
        float: left;
        margin-bottom:20px;
    }
</style>
