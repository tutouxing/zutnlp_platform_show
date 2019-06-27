<template>
    <el-container >

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="关系设计" name="first">

                <el-form class="cretab">
                   <!-- <el-form-item>
                        <div  v-if="CreOrAdd.create=='create'" class="dv">
                            基本信息
                        </div>
                    </el-form-item>
                    <el-form-item v-if="CreOrAdd.create=='create'">
                            <div style="margin-bottom:40px;">
                            &lt;!&ndash; style=" margin-left:2cm;左边距2cm&ndash;&gt;
                            <label>说明</label><el-input type="text" v-model=" message.msg" />
                            <label style=" margin-left:120px;">类名</label><el-input   type="text" v-model=" message.classname" />
                            </div>
                            <div>
                                    <label style="margin-left: 40px">表单类型</label>
                                    &lt;!&ndash;每次触发可调用:remote-method="changefatherchosevalue"&ndash;&gt;
                                    <el-select  v-model="FormType.value" clearable placeholder="请选择表单类型">
                                        <el-option
                                                v-for="item in FormType.type"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                            </div>
                    </el-form-item>-->
                    <el-form-item  style=" margin-top:1cm;">
                        <!--<label style="margin-left: 40px">表单类型</label>
                        &lt;!&ndash;每次触发可调用:remote-method="changefatherchosevalue"&ndash;&gt;
                        <el-select  v-model="FormType.value" clearable placeholder="请选择表单类型">
                            <el-option
                                    v-for="item in FormType.type"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                      -->
                        <label style=" margin-left:30px;">请选择单项或双向</label>
                        <el-select v-model="connectionchose.value" clearable placeholder="请选择是单项还是双向">
                            <el-option
                                    v-for="item in connectionchose.OneOrTwo"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <label v-if="connectionchose.value !=''">选择父类名</label>
                        <el-select v-if="connectionchose.value !=''" v-model="fathernamechose.value" clearable placeholder="请选择父类名">
                            <el-option
                                    v-for="item in fathernamechose.name"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select><!--请选择父类名-->
                    </el-form-item><!--选择表单类和单双向-->
                  <!--  <el-form-item class="chosefathername" v-if="connectionchose.value !=''">
                        <label>选择父类名</label>
                    <el-select v-model="fathernamechose.value" clearable placeholder="请选择父类名">
                        <el-option
                                v-for="item in fathernamechose.name"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>

                    </el-form-item>&lt;!&ndash;请选择父类名&ndash;&gt;-->

                        <div v-if="fathernamechose.value!=''" >
                        <el-form-item  class="line"><!--v-if="connectionchose.value!=''"-->
                            <div>
                                <p class="dv2">父类信息</p>
                            </div>
                        </el-form-item>
                        <el-form-item >
                        <div class="sontofathers"><!--style=" margin-top:1cm;" class="dv2"-->
                            子对父
                        </div>
                        <label>关系名</label><el-input  type="text" v-model=" connetciondata.SonToFatherconnectionName" />
                        <label>关系说明</label><el-input  type="text" v-model=" connetciondata.SonToFathertableConnectionInstruction" />
                        <el-select v-model="CascadeRelation.SonToFather" clearable placeholder="选择级联关系">
                            <el-option
                                    v-for="item in CascadeRelation.Relation"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="ConnectionType.SonToFather" clearable placeholder="选择连接类型">
                            <el-option
                                    v-for="item in ConnectionType.type"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        </el-form-item><!--子对父-->

                            <div v-if="connectionchose.value ==='two'">
                            <el-form-item>
                            <div class="sontofathers">父对子</div><!--style=" margin-top:1cm;" class="dv2"-->
                            </el-form-item>
                            <label>关系名</label><el-input  type="text" v-model=" connetciondata.FatherToSonconnectionName" />
                            <label>关系说明</label><el-input  type="text" v-model=" connetciondata.FatherToSontableConnectionInstruction" />
                            <el-select v-model="CascadeRelation.FatherToSon" clearable placeholder="选择级联关系">
                                <el-option
                                        v-for="item in CascadeRelation.Relation"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>`
                            <el-select v-model="ConnectionType.FatherToSon" clearable placeholder="选择连接类型">
                                <el-option
                                        v-for="item in ConnectionType.type"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                            </div>
                        <!--父对子-->
                        </div>
                </el-form>
                </el-tab-pane>
            <el-tab-pane label="字段设计" name="second" >
                <el-form>
               <!-- <el-button type="text" class="button3" @click="add">添加</el-button>-->
                <el-table :data="dataone">
                   <!-- <el-table-column prop="name" label="列名">
                        <template  slot-scope="scope">
                            <el-input v-model="dataone[scope.$index].name"></el-input>
                        </template>
                    </el-table-column>-->
                    <el-table-column prop="propname" label="属性名称">
                        <template  slot-scope="scope" >
                            <el-input v-model="dataone[scope.$index].propname"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="charlengs" label="字符长度">
                        <template  slot-scope="scope">
                            <el-input v-model="dataone[scope.$index].charlengs"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="info" label="说明">
                        <template  slot-scope="scope">
                            <el-input v-model="dataone[scope.$index].info"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="type" label="类型">
                        <template  slot-scope="scope">
                            <el-input v-model="dataone[scope.$index].type"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="javatype"label="java类型">
                        <template  slot-scope="scope">
                            <el-select style="width: 100px" v-model="dataone[scope.$index].javatype " placeholder="请选择">
                                <el-option
                                        v-for="item in classdata.javatype"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                   <!-- <el-table-column prop="propname" label="属性名称">
                        <template  slot-scope="scope" >
                            <el-input v-model="dataone[scope.$index].propname"></el-input>
                        </template>
                    </el-table-column>-->
                    <el-table-column prop="keyone" label="主键">
                        <template  slot-scope="scope">
                            <el-checkbox v-model="dataone[scope.$index].keyone"></el-checkbox>
                            <p>{{dataone[scope.$index].keyone}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="cannull" label="可空">
                        <template  slot-scope="scope">
                            <el-checkbox v-model="dataone[scope.$index].cannull" ></el-checkbox>
                            <p>{{dataone[scope.$index].cannull}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="insert" label="插入">
                        <template  slot-scope="scope">
                            <el-checkbox v-model="dataone[scope.$index].insert"></el-checkbox>
                            <p>{{dataone[scope.$index].insert}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="edit" label="编辑">
                        <template  slot-scope="scope">
                            <el-checkbox v-model="dataone[scope.$index].edit"></el-checkbox>
                            <p>{{dataone[scope.$index].edit}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="list" label="列表">
                        <template  slot-scope="scope">
                            <el-checkbox  v-model="dataone[scope.$index].list"></el-checkbox>
                            <p>{{dataone[scope.$index].list}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="requir" label="查询">
                        <template  slot-scope="scope">
                            <el-checkbox v-model="dataone[scope.$index].requir"></el-checkbox>
                            <p>{{dataone[scope.$index].requir}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="requir" label="Index">
                        <template  slot-scope="scope">
                            <el-checkbox v-model="dataone[scope.$index].prtys_Isindex"></el-checkbox>
                            <p>{{dataone[scope.$index].prtys_Isindex}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="requir" label="Unique">
                        <template  slot-scope="scope">
                            <el-checkbox v-model="dataone[scope.$index].prtys_IsUnique"></el-checkbox>
                            <p>{{dataone[scope.$index].prtys_IsUnique}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template  slot-scope="scope">
                            <el-button type="text"   @click="deleteRow(scope.$index)">删除</el-button>
                            <el-button type="text"  @click="add">添加</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="表单设计" name="third">
                <el-form class="frames">
                   <!-- <label class="label31">生成模板</label><el-input  placeholder="输入生成模板" class="input31" type="text" v-model=" message.createdtemplate" />

            <div>
                     <el-select  v-model="message.modelname" filterable placeholder="可选择模块名">
                         <el-option
                                 v-for="item in alltablemsg.modelname"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                         </el-option>
                     </el-select>
                     <el-select  v-model="message.packagename" filterable placeholder="可选择包名">
                         <el-option
                                 v-for="item in alltablemsg.packagename"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                         </el-option>
                     </el-select>
                     <el-select  v-model="message.packagepath" filterable placeholder="可选择包路径">
                         <el-option
                                 v-for="item in alltablemsg.packagepath"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                         </el-option>
                     </el-select>
                     <el-select  v-model="message.functionauthor" filterable placeholder="可选择作者">
                         <el-option
                                 v-for="item in alltablemsg.functionauthor"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                         </el-option>
                     </el-select>
                 </div>模块名等选择框
             <div>
                        <label >模块名</label><el-input  placeholder="输入模块名" class="input33" type="text" v-model="message.modelname" />
                       <label >包名</label><el-input  placeholder="输入包名"  type="text" v-model="message.packagename" />
                       <label >包路径</label><el-input  placeholder="输入包路径"  type="text" v-model="message.packagepath" />
                       <label>功能作者</label><el-input  placeholder="输入功能作者"   type="text" v-model="message.functionauthor" />
                </div>-->
                    <el-form-item>
                        <div  v-if="CreOrAdd.create=='create'" class="dv">
                            基本信息
                        </div>
                    </el-form-item>
                    <el-form-item v-if="CreOrAdd.create=='create'">
                        <div style="margin-bottom:40px;">
                            <!-- style=" margin-left:2cm;左边距2cm-->
                            <label>说明</label><el-input type="text" v-model=" message.msg" />
                            <label>类名</label><el-input   type="text" v-model=" message.classname" />
                            <label>表单类型</label>
                            <!--每次触发可调用:remote-method="changefatherchosevalue"-->
                            <el-select  v-model="FormType.value" clearable placeholder="请选择表单类型">
                                <el-option
                                        v-for="item in FormType.type"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item style="margin-top:40px;"><!--距离下边的距离是100-->
                        <label>输入包名</label>
                        <el-autocomplete
                                popper-class="my-autocomplete"
                                v-model="message.packagename"
                                :fetch-suggestions="querySearchpackagename"
                                placeholder="输入包名"
                                @select="handleSelect">
                            <i
                                    class="el-icon-edit el-input__icon"
                                    slot="suffix"
                                    @click="handleIconClick">
                            </i>
                            <template slot-scope="{ item }">
                                <div class="name">{{ item.value }}</div>
                                <span class="addr">{{ item.address }}</span>
                            </template>
                        </el-autocomplete>

                        <label>输入包路径</label><!--"-->
                        <el-autocomplete
                                popper-class="my-autocomplete"
                                v-model="message.packagepath"
                                :fetch-suggestions="querySearchpackagepath"
                                placeholder="输入包路径"
                                @select="handleSelect">
                            <i
                                    class="el-icon-edit el-input__icon"
                                    slot="suffix"
                                    @click="handleIconClick">
                            </i>
                            <template slot-scope="{ item }">
                                <div class="name">{{ item.value }}</div>
                                <span class="addr">{{ item.address }}</span>
                            </template>
                        </el-autocomplete>
                    </el-form-item>

                    <el-form-item style="margin-top: 50px">
                    <label>输入模块名</label>
                    <el-autocomplete
                            popper-class="my-autocomplete"
                            v-model="message.modelname"
                            :fetch-suggestions="querySearchmodelname"
                            placeholder="输入模块名"
                            @select="handleSelect">
                        <i
                                class="el-icon-edit el-input__icon"
                                slot="suffix"
                                @click="handleIconClick">
                        </i>
                        <template slot-scope="{ item }">
                            <div class="name">{{ item.value }}</div>
                            <span class="addr">{{ item.address }}</span>
                        </template>
                    </el-autocomplete>
                        <label>输入作者名</label>
                    <el-autocomplete
                            popper-class="my-autocomplete"
                            v-model="message.functionauthor"
                            :fetch-suggestions="querySearchfunctionauthor"
                            placeholder="输入作者"
                            @select="handleSelect">
                        <i
                                class="el-icon-edit el-input__icon"
                                slot="suffix"
                                @click="handleIconClick">
                        </i>
                        <template slot-scope="{ item }">
                            <div class="name">{{ item.value }}</div>
                            <span class="addr">{{ item.address }}</span>
                        </template>
                    </el-autocomplete>
                    </el-form-item>
                </el-form>
                <!--
                    <div>
                        <label class="label35">功能描述</label><el-input  placeholder="输入功能描述" class="input35" type="text" v-model="message.functioninfo" />
                        <label class="label36" >功能名称</label><el-input   placeholder="输入功能名称" class="input36" type="text" v-model="message.functionname" />
                    </div>
                   <div>
                       <label  class="label38">表单模型</label><el-input   placeholder="输入表单模型"  class="input38" type="text" v-model="message.formmodel" />
                   </div>-->
            </el-tab-pane>
        </el-tabs>
        <el-footer style=" margin-top:3cm;">
            <el-button-group>
                <el-button type="primary" v-on:click="back">返回</el-button>

                <el-button style="margin-left: 10px" type="primary" v-on:click="alladd()">完整添加</el-button>

               <el-button style="margin-left: 30px" type="danger"  @click.native.prevent="tableaddjudge(1)">添加表</el-button>
                <el-button style="margin-left: 30px" type="danger"  @click.native.prevent="propsaddjudge(1)">添加属性</el-button>
                <el-button style="margin-left: 30px" type="danger"  @click.native.prevent="connectionaddjudge(1)">添加关系</el-button>

            </el-button-group>
            <!--<el-button  type="primary" v-on:click="LastcreCode">创建代码</el-button>-->
          <!--  <el-button-group>
                <el-popover
                        placement="right"
                        width="400"
                        trigger="click">
                    <el-form class="crecode">
                        <p class="hint">此路径为保存生成的代码的位置</p>
                        <el-form-item>
                    <label >路径</label><el-input style="margin-top: 20px"  placeholder="输入路径"  type="text" v-model="message.createpath" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" size="small" @click.native.prevent="LastcreCode">确认</el-button>
                        </el-form-item>
                    </el-form>
                    <el-button style="margin-left: 30px" type="danger"  slot="reference" @click="test">生成</el-button>
                </el-popover>
            </el-button-group>-->
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: 'configmsg',
        components: {},
        data () {
            return {
                alltablemsg:{
                    modelname:[
                        {
                            label:'',
                            value:''
                        }
                    ],
                    packagename:[
                        {
                            label:'',
                            value:''
                        }
                    ],
                    packagepath:[
                        {
                            label:'',
                            value:''
                        }
                    ],
                    functionauthor:[
                        {
                            label:'',
                            value:''
                        }
                    ],
                    value:''
                },//可选择
                message:{
                        Tablename:'',
                        msg:'',//说明//
                        classname:'',//类名
                       //fathername:'',//父类名
                        //foreignkey:'',//关联当前表外键
                        modelname:'',//模块名,
                        packagepath:'',//包路径
                       /*
                        createdtemplate:'zut',//生成模板
                        sonnameofmodel:'zut',//子模块名
                        functioninfo:'zut',//功能描述
                        functionname:'zut',//功能名称
                        formmodel:'zut',//表单模型
                        */
                        functionauthor:'',//功能作者
                       // createpath:'C:/Users/i/Desktop/template',
                        packagename:'',//包名
                      //  have_Connect:null,
                        ProjectName:''//工程名
        },//表的数组
                dataone:[
                    {
                        charlengs:'50',
                        javatype:'String',
                        propname:'zutnlp',
                        keyone:false,
                        cannull:true,
                        insert:true,
                        edit:true,
                        list:true,
                        requir:"zut",
                        type:"zut",
                        info:"zut",
                       // name:"zutttt",//这是列明
                        prtys_IsUnique:false,//不可以为空
                        prtys_Isindex:false//不可以为空
                    }
                ],//属性的数组
                propertymsg:[
                    {
                        propertyName:'属性名',
                    }
                ],
               // createpath:'',
                //getname:null,
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
                    javatypenew:[
                        {
                            javatypeone:[
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
                            ]
                        },
                    ],//没用
                    res:[
                        {
                            type:'String',
                        }
                    ],//没用
                },//java类型
                fathernamechose:{
                    name:[
                        {
                            value:'初始化值',
                            label:'初始化标签'
                        }
                    ],
                    value:'',
                    valuetwo:''
                },//父类名选择
                connectionchose:{
                   OneOrTwo:[
                       {
                           value  :'one',
                           label   :'单向'
                       },
                       {
                           value:'two',
                           label:'双向'
                       }
                       ],
                       value:'',
                    SonToFather:false,
                    FatherToSon:true
                      },//单双向选择
                connetciondata:{
                    SonToFatherconnectionName:'',
                    SonToFathertableConnectionInstruction:'',
                    FatherToSonconnectionName:'',
                    FatherToSontableConnectionInstruction:'',
                },
                 CreOrAdd:{
                    create:'',
                     add:''
                 },
                CascadeRelation:{
                    Relation:[
                        {
                            value:'CascadeType.ALL',
                            label:'ALL'
                        },
                        {
                                value:'CascadeType.MERGE',
                                label:'MERGE'
                        },
                        {
                            value:'CascadeType.DETACH',
                            label:'DETACH'
                        },
                        {
                            value:'NULL',
                            label:'NULL'
                        },
                        {
                            value:'CascadeType.REMOVE',
                            label:'REMOVE'
                        },
                        {
                            value:'CascadeType.PERSIST',
                            label:'PERSIST'
                        },
                        {
                            value:'CascadeType.REPRES',
                            label:'REPRES'
                        },
                    ],
                    SonToFather:'',
                    FatherToSon:'',
                },//级联关系
                ConnectionType:{
                    type:[
                        {
                            value:'OneToOne',
                            label:'OneToOne'
                        },
                        {
                            value:'OneToMany',
                            label:'OneToMany'
                        },
                        {
                            value:'ManyToMany',
                            label:'ManyToMany'
                        },
                    ],
                    SonToFather:'',
                    FatherToSon:'',
                },//关系类型
                FormType:{
                  type:[
                      {
                          value:'TREE',
                          label:'tree'
                      },
                      {
                          value:'ALONE',
                          label:'alone'
                      },
                  ],
                    value:''
                },//表单类型
                suitway:'',//匹配方式
                activeName:'first',//有用的
                value: '',
            };
        },
        methods: {
            handleSelect(item) {
                console.log(item);
            },
            handleIconClick(ev) {
                console.log(ev);
            },
            getfather(){
                let that = this;
                let url = "http://202.196.37.147:8848/TableMessage/list";
                that.$axios.get(url, {}).then(function (response) {
                    for (let j in response.data) {
                        that.fathernamechose.name.push(
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
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            add(){
                this.dataone.push({
                    javatype:'String',
                    keyone:false,
                    cannull:true,
                    insert:true,
                    edit:true,
                    list:true,
                    requir:"",
                    type:"",
                    info:"",
                  //  name:"",
                    propname:"",
                    prtys_IsUnique:false,//不可以为空
                    prtys_Isindex:false,//不可以为空
                    key: Date.now()
                });
              /*  for(let index in this.dataone)
                {
                    console.log(this.dataone[index].javatype+"这是选择java类型结果数据第"+index+"个数据");
                }*/
              },//这是添加属性点击添加就会数数组添加一个对象
            deleteRow(index){
                this.dataone.splice(index,1);
            },
            back(){
                this.$router.push({path:'Formconfig/createproject'});
            },
         /*   LastcreCode(){
                let that=this;
                if(this.message.ProjectName=='')
                {
                    this.$alert("工程名为空");
                }else {
                    console.log("调用生成");
                    console.log(that.message.ProjectName+"生成代码参数");
                    /!*console.log(that.message.createpath+"生成代码参数");
                   Code().then(res=>{

                    })
                    this.$axios.defaults.headers.post["Content-Type"]='application/json;charset=UTF-8';*!/

                    let url='http://202.196.37.147:8848/GenCode/GetEntiredProjectZip';
                     this.$axios({
                         method:'get',
                         url,
                         headers:{
                        'Content-Type':'application/x-msdownload',
                           // 'Content-disposition':'attachment;filename=zutnlp-admin.zip'
                    },
                    withCredentials:true,
                        params:{
                        ProjectName:that.message.ProjectName,
                    }
                });
                    console.log("调用生成完毕");
                    this.$alert("生成成功");
                }
                this.$router.push({path:"formconfig/createproject"});
            },//调用创建代码*/
            tableaddjudge(go){

                let flag;//用于是否调用添加表接口判断
                console.log('检测是否调用addmsgif之前'+this.CreOrAdd.create);
                if(this.CreOrAdd.create==="create")
                {
                    flag=true;
                    console.log("调用添加表判断");
                    for (let info in this.message)
                    {
                        if(this.message[info]==='')
                        {
                            flag=false;
                        }
                    }
                    if(flag==true)
                    {
                        console.log("调用表添加接口");
                        this.TableMsgAdd();//调用添加表明接口

                        this.propsaddjudge(2);

                        if(go==2)
                        {
                            this.propsaddjudge(3);

                        }

                    }else
                    {
                        this.$alert("请填写表相关数据");
                    }
                }else
                {
                    this.$alert("已经选择表不能创建");
                }


            },
            propsaddjudge(go){
                if(this.CreOrAdd.create!="create"||go==2||go==3)
                {

                let flagprops=true;let reminder;
                for (let j=0;j<this.propertymsg.length;j++)
                {
                    for(let i in this.dataone)
                    {
                        if(this.dataone[i].propname==this.propertymsg[j].propertyName)
                        {
                            flagprops=false;
                            reminder=this.dataone[i].propname;
                        }
                    }
                }
                let propnull=true;//判断属性名是否有重复
                for(let i=0;i<this.dataone.length;i++)
                {
                    if(this.dataone[i].propname.length==0)
                    {
                        propnull=false;
                    }
                }
                if(propnull==false)
                {
                    this.$alert("请填写完属性信息");
                }else {
                    if(flagprops==true)
                    {
                        console.log("调用属性添加接口");
                        if(go==1)
                        {
                            this.PropertyAdd("propadd");//调用添加属性接口
                        }else if(go==2)
                        {
                            this.PropertyAdd("tabadd");//调用添加属性接口
                            this.$router.push({path:"/formconfig/formoperate"});

                        }
                        else if(go==3)
                        {
                            this.PropertyAdd("alladd");
                            this.connectionaddjudge(2);
                        }

                    }
                    else
                    {
                        flagprops=false;
                        this.$alert("java属性名称输入重复请重新输入名称是："+reminder);
                    }
                }
                if(go===1&&flagprops===true&&propnull===true)
                {
                    this.$router.push({path:"/formconfig/formoperate"});
                }
                }else
                {
                    this.$alert("创建表请点击添加表同时可以添加属性");
                }
            },
            connectionaddjudge(go){
                if( this.CreOrAdd.create!="create"||go==2)
                {
                     let flagconnet;
                     if(this.connectionchose.value!='')
                       {
                    flagconnet=true;
                    console.log("调用了关系判断");
                    if(this.connectionchose.value=='one')
                    {
                        this.connetciondata.FatherToSontableConnectionInstruction='null';
                        this.connetciondata.FatherToSonconnectionName='null';
                    }//这里也许可以取消不用
                    for(let i in this.connetciondata)
                    {
                        if(this.connetciondata[i]=='')
                        {
                            flagconnet=false;
                      /*      console.log("输出关系对象空值"+i+this.connetciondata.SonToFathertableConnectionInstruction);
                            console.log("输出关系对象空值"+i+this.connetciondata.SonToFatherconnectionName);
                            console.log("输出关系对象空值"+i+this.connetciondata.FatherToSonconnectionName);
                            console.log("输出关系对象空值"+i+this.connetciondata.FatherToSontableConnectionInstruction);*/
                        }
                    }
                    if(flagconnet==false)
                    {
                        this.$alert("请选填完关系数据后进行");
                    }
                    else
                    {
                        console.log("调用关系接口函数");
                        if(go==2)
                        {

                            this.ConnectionAdd("alladds");//调用添加关系接口
                        }else{
                            this.ConnectionAdd("add");//调用添加关系接口
                        }
                    }
                }else
                        {
                    this.$alert("未选填关系");
                }
                }
                else
                {
                    this.$alert("可选用完整添加同时添加表、属性、关系");
                }
            },
            alladd(){
                   console.log("调用所有添加接口");
                    this.tableaddjudge(2);

            },//完整添加
            TableMsgAdd(){
                {
                    this.$axios({
                        method: 'post',
                        url: 'http://202.196.37.147:8848/TableMessage/add/',
                        headers:{
                            'Content-Type':'application/json'
                        },
                       // withCredentials:true,
                        data:{
                            dateModified: "2018-11-25T07:50:02.000+0000",//不用管
                            deleted: null,//不用管
                            entityName: null,//不用管
                            children: [],//不用管
                            leaf: true,//不用管
                            text: null,//不用管
                            tablename:this.message.Tablename,
                            tableInstruction: this.message.msg,
                            have_Connect: null,//不用管
                            tableType:this.FormType.value,
                            authod:this.message.functionauthor,
                            packageName:this.message.packagename,//包名
                            packageNameLoad: this.message.packagepath,//包路径
                            moduleName: this.message.modelname,//模块名
                            projectName:this.message.ProjectName,//工程名
                            sonNumber: 0//不用管

                        },
                    });
                    this.$alert("表添加成功");

                }

            },
          /*  PropertyFindall(){
                let that=this;
                let url='http://202.196.37.147:8848/Connection/list';
                this.$axios(
                    {
                        method:'get',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        withCredentials:true,
                    }
                ).then(function (res) {

                    for(i in  that.propertymsg)
                    {
                        that.propertymsg.push(
                            {
                                propertyName:res.data[i].prtysName,
                                propertyType:res.data[i].propertyType,
                                propertyInstruction:res.data[i].prtysInstruct,
                                propertyLong:res.data[i].prtysLong,
                            }

                        );
                    }
                    //"得到数据
                });
            },*/
            PropertyAdd(go){
                let that_=this;
                let url='http://202.196.37.147:8848/Pros/add';
                console.log("这里是添加属性的");
                       for(let i in that_.dataone)
                       {
                          /* console.log("属性名字"+that_.dataone[i].propname);
                           console.log("属性"+that_.dataone[i].charlengs);
                           console.log("属性"+that_.dataone[i].keyone);
                           console.log("属性"+that_.dataone[i].type);
                           console.log("属性"+that_.dataone[i].prtys_Isindex);
                           console.log("属性"+that_.dataone[i].prtys_IsUnique);
                           console.log("属性"+that_.dataone[i].info);
                           console.log("属性"+that_.dataone[i].cannull);
                            console.log("这里是添加属性的循环");*/
                           console.log("次数i是"+i);
                           this.$axios({
                               method:'post',
                               url,
                               headers:{
                                   'Content-Type':'application/json'
                               },
                               //withCredentials:true,
                               params:{
                                   TableMessageName: that_.message.Tablename
                               },
                               data:{
                                   prtysName:that_.dataone[i].propname,//'001',//
                                   propertyType:that_.dataone[i].javatype,
                                   prtysIsKey:that_.dataone[i].keyone,
                                   prtysLong:that_.dataone[i].charlengs,
                                   prtys_Isindex:that_.dataone[i].prtys_Isindex,
                                   prtys_IsUnique:that_.dataone[i].prtys_IsUnique,
                                   prtysInstruct:that_.dataone[i].info,
                                   prtysIsnull:that_.dataone[i].cannull
                               }
                           })
                       }
                       if(go=="propadd")
                       {
                           this.$alert("属性添加成功");
                       }else if(go=='tabadd')
                       {
                           this.$alert("表与属性添加成功");
                       } else if(go=='alladd')
                       {

                       }

            },
          /*  PropertyUpdata() {
              let url='';
              this.$axios(
                  {
                      method:'post',
                      url,
                      headers:{
                          'Content-Type':'application/json'
                      },
                      withCredentials:true,
                      params:{
                 PropsName:"属性名"
                      },
                      data:{
                          id:"id",
                          prtysName:that_.dataone.propname,
                          propertyType:that_.dataone.type,
                          prtysIsKey:that_.dataone.keyone,
                          prtysLong:that_.dataone.charlengs,
                          prtys_Isindex:that_.dataone.prtys_Isindex,
                          prtys_IsUnique:that_.dataone.prtys_IsUnique,
                          prtysInstruct:that_.dataone.info,
                          prtysIsnull:that_.dataone.cannull
                      }
                  }
              )

            },*/
          /*  PropertyCheck() {
                let url='http://202.196.37.147:8848/Pros/check';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true,
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

            },*/
            ConnectionAdd(go){
                let that_=this;
                if(that_.connectionchose.value=="one")
                {
                    console.log("是one的时候调用");
                    that_.fathernamechose.valuetwo=null;
                    this.ConnectionAddfun();

                }else if(that_.connectionchose.value=="two")
                {    console.log("不是one的时候调用");
                    that_.fathernamechose.valuetwo=null;
                    that_.ConnectionAddfun();
                    console.log("打印第二个接口的时候调用"+that_.message.Tablename);
                    that_.fathernamechose.valuetwo=that_.message.Tablename;
                    let url='http://202.196.37.147:8848/Connection/add';
                    console.log("打印参数名表明"+that_.message.Tablename);
                    this.$axios({
                        method:'post',
                        url,
                        headers:{
                            'Content-Type':'application/json'
                        },
                        params:{
                            TableMessageName:that_.message.Tablename
                        },
                        data:{
                            dateCreated: "2018-11-25T07:50:18.000+0000",
                            dateModified: "2018-11-25T07:50:18.000+0000",
                            deleted: null,
                            entityName: null,
                            connectionName:that_.connetciondata.FatherToSonconnectionName,
                            tableConnectionInstruction:that_.connetciondata.FatherToSontableConnectionInstruction,
                            tableConnectionPropsOneOrTwo: that_.connectionchose.FatherToSon,
                            tableConnectionPropsCaseCadeType: that_.CascadeRelation.FatherToSon,
                            tableConnectionParentTableName: that_.fathernamechose.value,
                            tableConnectionSonTableName:that_.fathernamechose.valuetwo,
                            tableConnectionType: that_.ConnectionType.FatherToSon,
                        }
                    });
                }
                if(go=="alladds")
                {
                    this.$alert("表、属性、关系、添加成功");
                    this.$router.push({path:"/formconfig/formoperate"});

                }else {
                    this.$router.push({path:"/formconfig/formoperate"});
                    this.$alert("关系添加成功");
                }

            },
            ConnectionAddfun(){
                let thats=this;
                /*console.log("connectionName::"+thats.connetciondata.SonToFatherconnectionName,);
                console.log("tableConnectionInstruction::"+thats.connetciondata.SonToFathertableConnectionInstruction);
                console.log("tableConnectionPropsOneOrTwo::"+thats.connectionchose.SonToFather);
                console.log("tableConnectionPropsCaseCadeType::"+thats.CascadeRelation.SonToFather);
                console.log("tableConnectionParentTableName::"+thats.fathernamechose.value);
                console.log("tableConnectionSonTableName::"+thats.fathernamechose.valuetwo);
                console.log("tableConnectionType::"+thats.ConnectionType.SonToFather);
                console.log("Tablename::"+thats.message.Tablename);*/

                let url='http://202.196.37.147:8848/Connection/add';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    params:{
                        TableMessageName:thats.message.Tablename
                    },
                    data:{
                       dateCreated: "2018-11-25T07:50:18.000+0000",
                        dateModified: "2018-11-25T07:50:18.000+0000",
                        deleted: null,
                        entityName: null,
                        connectionName:thats.connetciondata.SonToFatherconnectionName,
                        tableConnectionInstruction:thats.connetciondata.SonToFathertableConnectionInstruction,
                        tableConnectionPropsOneOrTwo: thats.connectionchose.SonToFather,
                        tableConnectionPropsCaseCadeType: thats.CascadeRelation.SonToFather,
                        tableConnectionParentTableName: thats.fathernamechose.value,
                        tableConnectionSonTableName: thats.fathernamechose.valuetwo,
                        tableConnectionType: thats.ConnectionType.SonToFather
                       /* "dateCreated": "2018-11-25T07:50:18.000+0000",
                        "dateModified": "2018-11-25T07:50:18.000+0000",
                        "deleted": null,
                        "entityName": null,
                        "connectionName": "002",
                        "tableConnectionInstruction": "这是department的子表",
                        "tableConnectionPropsOneOrTwo": false,
                        "tableConnectionPropsCaseCadeType": "CascadeType.MERGE",
                        "tableConnectionParentTableName": "Department",
                        "tableConnectionSonTableName": null,
                        "tableConnectionType": "ManyToOne"*/

                    }

                })
                console.log("第一个接口调用完毕"+thats.message.Tablename);
            },
         /*   ConnectionCheck(){
                let that_=this;
                let url='http://202.196.37.147:8848/Connection/check/Department';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    param:{
                        ConnetcionName:"关系名"
                    },
                    data:{
                        dateCreared:'',
                        dateModified:'',
                        daleted:'',
                        entityName:'',
                        id:'',
                        connectionName:'',
                        tableConnectionInstruction:'',
                        tableConnectionOneOrTwo:'',
                        tableConnectionPropsCaseCadeType:'',
                        tableConnectionParentTableName:'',
                        tableConnectionSonTablename:''
                    }

                })
            },*/
        /*    ConnectionUpdata(){
                let that_=this;
                let url='http://202.196.37.147:8848/Connection/updata';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    param:{
                        ConnetcionName:"关系名"
                    },
                    data:{
                        id:'',
                        connectionName:'',
                        tableConnectionInstruction:'',
                        tableConnectionOneOrTwo:'',
                        tableConnectionPropsCaseCadeType:'',
                        tableConnectionParentTableName:'',
                        tableConnectionSonTablename:''
                    }

                })
            },*/
        /*    ConnectionDelete(){

                let url='http://202.196.37.147:8848/Connection/delete';
                this.$axios({
                    method:'post',
                    url,
                    headers:{
                        'Content-Type':'application/json'
                    },
                    param:{
                        ConnetcionName:"关系名"
                    },
                    data:{
                       // id:'',
                        connectionName:'',
                        tableConnectionInstruction:'',
                        tableConnectionOneOrTwo:'',
                        tableConnectionPropsCaseCadeType:'',
                        tableConnectionParentTableName:'',
                        tableConnectionSonTablename:''
                    }

                })
            },*/
          /*  ConnectionList(){
                let url="http://202.196.37.147:8848/Connection/list"
                this.$axios.get(url,{}).then(function (res) {

                })

            },*/
            examineproname(){
                let that=this;
                let url='http://202.196.37.147:8848/Pros/list';
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
                    /*for(let i in  that.propertymsg) {
                        console.log( "这是在addprops中"+that.propertymsg[i].propertyName);
                    }*/
                    for(let i=0; i<res.data.length;i++)
                    {
                        that.propertymsg.push(
                            {
                                propertyName:res.data[i].prtysName,
                            }
                        );
                        console.log(i);
                    }
                    //"得到数据
                });
            },
            getalltablemsg(){
                let url = "http://202.196.37.147:8848/TableMessage/list";
                let that=this;
                that.$axios.get(url, {}).then(function (response) {
                    for (let j in response.data)
                    {
                        that.alltablemsg.functionauthor.push(
                            {
                                value:response.data[j].authod,
                                label: `${response.data[j].authod}`,
                                key: Date.now()
                            }
                        );
                        that.alltablemsg.packagepath.push(
                            {
                                value:response.data[j].packageNameLoad,
                                label: `${response.data[j].packageNameLoad}`,
                                key: Date.now()
                            }
                        );
                        that.alltablemsg.packagename.push(
                            {
                                value:response.data[j].packageName,
                                label: `${response.data[j].packageName}`,
                                key: Date.now()
                            }
                        );
                        that.alltablemsg.modelname.push(
                            {
                                value:response.data[j].moduleName,
                                label: `${response.data[j].moduleName}`,
                                key: Date.now()
                            }
                        );
                        //console.log(response.data[j].tablename+'这是名字');
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            },
            querySearchpackagename(queryString, cb) {

                var restaurants = this.alltablemsg.packagename;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            querySearchpackagepath(queryString, cb) {
                var restaurants = this.alltablemsg.packagepath;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            querySearchmodelname(queryString, cb) {
                var restaurants = this.alltablemsg.modelname;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            querySearchfunctionauthor(queryString, cb) {
                var restaurants = this.alltablemsg.functionauthor;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
    },
        mounted(){
            this.classdata.res[0]="String";//java属性名默认的String
            this.message.Tablename=this.$route.params.userId;
            console.log(this.$route.params.userId+"获取的表名");
             this.message.ProjectName=this.$route.params.projects;
            console.log( 'configmsg 获取的工程名'+this.$route.params.projects);
            console.log("这是新建的参数"+this.$route.params.create);
            console.log("这是新建的参数"+this.$route.params.add);
            this.CreOrAdd.add=this.$route.params.add;
            this.CreOrAdd.create=this.$route.params.create;
            console.log(this.message.Tablename+'Tablename');
            console.log(this.CreOrAdd.add+'CreOrAdd');
            this.getfather();
            this.examineproname();
            this.getalltablemsg();
    },
}
</script>

<style scoped>
    .dv{
        width: 20px;
        margin: 0 auto;
        line-height: 24px;
        font-size: 20px;
        position:absolute;
        margin-left: 20px;
        margin-top: 10px;
    }
    .dv2{
        margin: 0 auto;
        line-height: 25px;

        font-size: 20px;
        position:absolute;
        margin-bottom:0.5cm;
        margin-top:0.5cm;
        margin-left: 10px;
        /*   border-top:1px solid gainsboro;*/
        /*   width: 200px;*/
    }
    label{
        font-size: 15px;
        color: darkslategrey;
    }
    .line {
        border-top: 3px solid gainsboro;/*gainsboro*/
          width: 75%;
          margin: auto;
    }
    .sontofathers{
        font-size: 20px;
        margin-top: 20px;
      /*  color: black;*/
     /*   border-top:1px solid gainsboro;*/
     /*   width: 200px;*/

    }
    .cretab{
        /*     background: white;*/
        margin-top: 20px;
        border-top:1px solid gainsboro;
        border-bottom:2px solid gainsboro;
        border-left:2px solid gainsboro;
        border-right:2px solid gainsboro;
        padding-bottom:35px;

    }
    .chosefathername{
        margin-top: 50px;
        margin-left: 40px;
    }
    .crecode{
        width: 300px;
        height: 200px;
        marguin:0 auto;
        overflow:hidden;
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
   .el-container{
        background: bottom;
    }
    .el-autocomplete{
        width: 200px;
    }
    .el-input{
        width: 200px;
    }
    .hint{
        color: maroon;
        font-size: 20px;
        margin-top: 25px;
    }
</style>
