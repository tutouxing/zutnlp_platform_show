<template>
    <el-form style="margin-top: 20px">
        <div class="frames">

            <el-form-item style="margin-top: 100px;">
                填写或选择工程名
            </el-form-item>
        <el-form-item style="margin-top: 30px">

            <label >填写工程名</label><el-input type="text" v-model="projectname"/>
            <el-select v-model="projectname" clearable placeholder="请选择工程名">
                <el-option
                        v-for="item in ProjectNames.proname"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>

            <el-form-item style="margin-top: 99px">
                <el-button-group>
                    <el-button  type="primary" v-on:click="next">下一步</el-button>
                </el-button-group>
            </el-form-item>
        </div>
    </el-form>
   <!-- <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item v-for=" column in TableMsgs.TableNames" :title="column.name" :name="column.name">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-table
                        :data=column.Message
                        border
                        style="width:100%">
                    <el-table-column v-for="columns in column.Propertynames"
                                     fixed
                                     :prop="columns.prtysName"
                                     :label="columns.prtysName"
                                     width="60">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="160">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small"></el-button>
                             <el-button
                                    @click.native.prevent="DeleteRow(scope.$index,column.Message,column.name)"
                                    type="text"
                                    size="small">
                                移除
                            </el-button>&lt;!&ndash;删除&ndash;&gt;
                           <el-popover
                                    placement="right"
                                    width="400"
                                    trigger="click">
                               <p>请填写添加信息</p>
                               <form v-for="prop in column.Propertynames">
                                   <label>输入{{prop.prtysName}}：</label><el-input  :placeholder="prop.prtysName.toString()" v-model="prop.prtysInstruct"></el-input>
                               </form>
                               <el-input v-model="add"/>
                               <el-button
                                        type="primary"
                                        size="small"
                                        @click.native.prevent="AddMsg(column.Propertynames,column.name)">
                                    提交
                                 </el-button>
                               <el-button type="text" size="small" slot="reference" @click="test(column.Propertynames,column.name)">添加</el-button>

                           </el-popover>&lt;!&ndash;添加&ndash;&gt;
                            <el-popover
                                    placement="right"
                                    width="400"
                                    trigger="click">
                                <p>请填写修改信息</p>
                                <form v-for="prop in column.Propertynames">
                                    <label>输入{{prop.prtysName}}：</label><el-input  :placeholder="prop.prtysName.toString()" v-model="prop.prtysInstruct"></el-input>
                                </form>
                                <el-input v-model="add"/>
                               <el-button type="text" size="small" slot="reference" @click="test(column.Propertynames,column.name)">修改</el-button>
                                <el-button
                                        type="primary"
                                        size="small"
                                        @click.native.prevent="UpDataMsg(column.Propertynames,column.name)">
                                    提交
                                </el-button>
                            </el-popover>&lt;!&ndash;修改&ndash;&gt;

                          &lt;!&ndash;      <el-select
                                        v-model="value9"
                                        multiple
                                        filterable
                                        remote
                                        reserve-keyword
                                        placeholder="请输入关键词"
                                        :remote-method="remoteMethod"
                                        :loading="loading">
                                    <el-option
                                            v-for="item in options4"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>&ndash;&gt;

                        </template>

                    </el-table-column>
                </el-table>
            </el-tabs>

        </el-collapse-item>
    </el-collapse>-->
</template>

<script>
    export default {
        name: "createproject",
           data(){
               return{
                   projectname:'',
                   ProjectNames:{
                       proname:[
                           {
                               value:'',
                               label:''
                           }
                       ],
                       values:''
                   }

               }
           },
           methods:{
               next(){
                   if(this.projectname.length==0)
                   {
                       this.$alert("请填写工程名");
                   }else
                   {// this.$router.push({ name: 'configmsg', params: { userId: this.Tablename ,create:'create'}});
                       this.$router.push({name:'configtable',params:{toconfigtable:this.projectname}});
                       this.$router.push({path:'/configtable'});
                   }
               },
               Findprojectname(){
                   console.log("掉获取工程名接口Project");
                   let that=this;
                   let url='http://127.0.0.1:8848/TableMessage/GenALLProjectName';
                   this.$axios(
                       {
                           method:'get',
                           url,
                           headers:{
                               'Content-Type':'application/json'
                           },
                         //  withCredentials:true,

                       }
                   ).then(function (res) {
                       for(let i=0; i<res.data.length;i++)
                       {
                           that.ProjectNames.proname.push(
                               {
                                   value:res.data[i].toString(),
                                   label: `${res.data[i].toString()}`,
                               }
                           );

                       }
                   });
                   console.log("掉获取工程名接口Project完毕");
               }

           },
        mounted(){
           this.Findprojectname();
        }
       /* data() {
            return {
                add:"默认的add值",
                activeNames: "first",
                activeName: 'first',
                TableMsgs: {
                    TableNames: [
                        {
                            Propertynames: [
                                {
                                    addmsg:'',
                                    updatamsg:'',
                                    prtysName:'name',
                                    prtysInstruct:'说明',
                                },
                                {  add:'',
                                    updatamsg:'',
                                    prtysName:'id',
                                    prtysInstruct:'说明',
                                },
                            ],
                            Message: [
                                {
                                    name:'wangbin',
                                    id:'1',
                                },
                                {
                                    name:'wangbin2',
                                    id:'2',
                                },
                                {
                                    name:'wangbin3',
                                    id:'3',
                                },
                                {
                                    name:'wangbin4',
                                    id:'4',
                                },
                            ],
                            name: '这是默认的表名',//存放表明
                            id: 0,
                            projectName:''
                        },
                    ],
                    Allfotablename: [
                        {
                            name: '',
                            id: 0,
                            projectName:''
                        }
                    ],
                    Allofprops: [
                        {
                            id: '',
                            name: ''
                        }
                    ],
                    //这里可以存放表的属性和信息
                },
                Addinfo:[],
                upinfo:[],
                posts:{},
                postupdata:{},
               /!* options4: [],
                value9: [],
                list: [],
                loading: false,*!/
                searchinfo:[],
            };
        },
        methods: {
            test(getlength,gettablename) {
                this.add=gettablename;
                for (let info=0;info<getlength.length;info++)
                {
                    getlength[info].prtysInstruct='请输入数据';
                }
            },
            handleChange(val) {
                console.log(val);
            },
            handleClick(row) {
                console.log(row);
            },
            tablelist() {
                let that = this;
                let url = "http://127.0.0.1:8848/TableMessage/list";
                that.$axios.get(url, {}).then(function (response) {

                    for (let j in response.data) {
                        that.TableMsgs.TableNames.push(
                            {
                                name: response.data[j].tablename,
                                id: response.data[j].id,
                            },
                        );
                        that.TableMsgs.Allfotablename.push({
                            name: response.data[j].tablename,
                            id: response.data[j].id,
                        })
                        console.log(response.data[j].tablename + '表名是');
                    }
                    that.$nextTick(()=>{
                        for (let i = 1; i < that.TableMsgs.TableNames.length; i++) {
                            that.$axios({
                                method: 'post',
                                url: 'http://127.0.0.1:8848/TableMessage/findMyProps',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                withCredentials: true,
                                params: {
                                    TableMessageName:that.TableMsgs.TableNames[i].name
                                },
                            }).then(function (res) {
                                console.log("属性接收");
                                that.TableMsgs.TableNames[i].Propertynames=res.data;
                                console.log("表"+that.TableMsgs.TableNames.name+"的属性数组长度是" +that.TableMsgs.TableNames[i].Propertynames.length);
                                for (let j = 0; j<res.data.length; j++) {
                                   console.log("表"+that.TableMsgs.TableNames[i].name+"的属性名是"+that.TableMsgs.TableNames[i].Propertynames[j].prtysInstruct);
                                }
                            });
                        }
                        console.log("add接口调用完毕");
                    })
                }).catch(function (error) {
                    console.log(error);
                });

            },
            PropertyFindall() {
                let that = this;
                let url = 'http://127.0.0.1:8848/Pros/list';
                this.$axios(
                    {
                        method: 'get',
                        url,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true,
                    }
                ).then(function (res) {
                    for (let i = 0; i < res.data.length; i++) {
                        for (let j = 0; j < that.TableMsgs.TableNames.length; j++) {
                            if (that.TableMsgs.TableNames[j].id == res.data[i].id) {
                                that.TableMsgs.TableNames[j].Propertynames.push
                                (
                                    {
                                        Proname: res.data[i].prtysName,
                                        add:'属性添加',
                                        updatamsg:'属性更新',
                                    }
                                );
                                //在这里查询值给数组message，里面
                            }

                        }
                        that.TableMsgs.Allofprops.push(
                            {
                                name: res.data[i].prtysName,
                                //  id:res.data[i].tableMessage_ID,
                            }
                        )
                        console.log(res.data[i].id + '属性名idididiid');
                    }
                    //"得到数据
                });
            },
            FindProps() {
                console.log("调用 FindProps()"+this.TableMsgs.TableNames.length);
                let that = this;
                for (let i = 1; i < that.TableMsgs.TableNames.length; i++) {
                    that.$axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8848/TableMessage/findMyProps',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true,
                        params: {
                            TableMessageName:that.TableMsgs.TableNames[i].name
                        },
                    }).then(function (res) {
                        console.log("属性接收");
                        for (let j = 0; j<res.data.length; j++) {

                           // console.log(res.data[j].prtysName+"是属性名");
                            /!*that.TableMsgs.TableNames[i].Propertynames = Object.assign({},
                                that.TableMsgs.TableNames[i].Propertynames,
                                {
                                    Propname: res.data[j].prtysName,
                                });*!/
                          /!*  that.TableMsgs.TableNames[i].Propertynames.push(
                                {
                                    Propname: res.data[j].prtysName
                                }
                            );*!/
                            console.log("table:")
                            console.log("表"+that.TableMsgs.TableNames[i].name+"的属性名是"+res.data[j].prtysName/!*that.TableMsgs.TableNames[i].Propertynames[j].Proname*!/);
                        }
                    });
                }
                console.log("add接口调用完毕");
            },
            dataclassify() {
                for (let i = 0; i < this.TableMsgs.Allofprops.length; i++) {
                    for (let j = 0; j < this.TableMsgs.TableNames.length; j++) {

                        if (this.TableMsgs.TableNames[j].id == this.TableMsgs.Allofprops[i].id) {
                            this.TableMsgs.TableNames.Propertynames.push(
                                {
                                    PropsName: this.TableMsgs.Allofprops[i].name,
                                }
                            )
                        }

                    }

                }

            },
            GetMsg() {
                console.log("调用 FindProps()");
                let that = this;
                for (let i = 1; i < that.TableMsgs.TableNames.length; i++) {
                    let url="http://127.0.0.1:8848/"+that.TableMsgs.TableNames[i].name+"/list";
                    that.$axios({
                        method: 'get',
                        url,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true,

                    }).then(function (res) {
                        console.log("获取数据");
                        that.TableMsgs.TableNames[i].Message=res.data;
                    /!*    for (let j = 0; j < res.data.length; j++) {

                            for (let a in  that.TableMsgs.TableNames[i].Message)
                            {
                                    that.TableMsgs.TableNames[i].Message.push(
                                        {
                                            a:res.data[j].a
                                        }
                                    );
                            }

                               }*!/
                    });
                }
            },
            DeleteRow(index, rows,gettablename) {
                let that = this;
               let info;
                for (let i=0;i<this.TableMsgs.TableNames.length;i++)
                {
                    if(this.TableMsgs.TableNames[i]==gettablename)
                    {
                        info=this.TableMsgs.TableNames[i].Message[index].id;
                    }
                }
                rows.splice(index, 1);
                let url='http://127.0.0.1:8848/Pros/delete';
                this.$axios(
                    {
                        method:'post',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        withCredentials:true,
                        params:{
                            id:info
                        },
                        data:{
                            //未知
                        }

                    }
                );
                this.$alert("删除成功");
            },
            UpDataMsg(getlength,gettablename) {
                let that=this;
                this.add=gettablename;
                this.upinfo=getlength;
                that.packinfo(gettablename);
                let flag=true;
                for (let ad=0;ad<this.upinfo.length;ad++)
                {
                    console.log("这是添加的信息"+this.upinfo[ad].prtysInstruct);
                    if(this.upinfo[ad].prtysInstruct=='请输入数据')
                    {
                         flag=false;
                    }else {
                        console.log("这是添加的信息"+this.upinfo[ad].prtysInstruct);
                    }
                }
                if(flag==false)
                {
                    this.$alert("请填写全部信息");
                }else
                {
                    let url="http://127.0.0.1:8848/"+gettablename+"/updata";
                    that.$axios({
                        method: 'post',
                        url,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true,
                        params:{
                            tablename:gettablename
                        },
                        data:that.posts,
                    }).then(function (res) {

                    });





                    this.$alert("修改成功");
                }
            },
            AddMsg(getlength,gettablename) {
                let that = this; let flag=true;
                this.Addinfo=getlength;   this.add=gettablename;
                that.packinfo(gettablename);
                for (let ad=0;ad<this.Addinfo.length;ad++)
                {
                    if(this.Addinfo[ad].prtysInstruct=='请输入数据')
                    {
                        flag=false;
                    }else {
                        console.log("这是添加的信息"+this.Addinfo[ad].prtysInstruct);
                    }
                }
                if(flag==false)
                {
                    this.$alert("请填写全部信息");
                }else
                {
                        let url="http://127.0.0.1:8848/"+gettablename+"/add";
                        that.$axios({
                            method: 'post',
                            url,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            withCredentials: true,
                            params:{
                                   tablename:gettablename
                            },
                            data:that.posts,
                        }).then(function (res) {
                        });

                    this.$alert("添加成功");                }
            },
            packinfo(gettablename){
                         let that=this;
                for (let info in  that.posts)
                {
                    info="";
                }
                for (let i=0;i<that.TableMsgs.TableNames.length;i++)
                {
                    if(gettablename===that.TableMsgs.TableNames[i].name)
                    {
                        that.posts=that.TableMsgs.TableNames[i].Message[0];
                    }
                }
                {       let ad=0;
                    if(ad<this.Addinfo.length)
                    {
                        for (let info in  that.posts)
                        {
                            that.posts[info]=this.Addinfo[ad].prtysInstruct;
                                ad++;
                        }
                    }
                }
                for (let info in  that.posts)
                {
                    console.log("这是对象的信息"+that.posts[info]);
                }
            },
         /!*   remoteMethod(){
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options4 = this.list.filter(
                            item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        }
                        );
                    }, 200);




                } else {
                    this.options4 = [];
                }
            },*!/
            packmsg(){
                this.searchinfo = this.TableMsgs.TableNames[0].Message.map(item => {
                    return { value: item.id, label: item };
                });
                for (let info in  this.searchinfo)
                {
                    console.log(  this.searchinfo[info].label.name );
                }

            }
        },
        created() {
           this.tablelist();
           this.packmsg();
        }*/
    }
</script>

<style scoped>
    .el-input {
        width: 300px;
    }
    .el-button{
        top: 50%;
    }
    .frames{
        /*     background: white;*/
        margin-top: 20px;/*solid gainsboro*/

        border-top:2px solid gainsboro;
        border-bottom:2px solid gainsboro;
        border-left:2px solid gainsboro;
        border-right:2px solid gainsboro;
        /* border-bottom:2px solid black;
        border-left:2px solid black;
        border-right:2px solid black;*/
        padding-bottom:35px;
    }

</style>
