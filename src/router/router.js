import Layout from '../views/layout/Layout.vue'
import configmsg from '../components/FormConfig/configmsg.vue'
import formoperate from '../components/FormConfig/formoperate.vue'
import configtable from '../components/FormConfig/configtable.vue'
import tableupdate from '../components/FormConfig/tableupdate.vue'
import connectionupdata from '../components/FormConfig/connectionupdata.vue'
import goback from '../components/FormConfig/goback.vue'
import propertyupdata from '../components/FormConfig/propertyupdata.vue'
import createproject from '../components/FormConfig/createproject.vue'
import tempaltenow from '../components/FormConfig/tempaltenow.vue'
import createcode from '../components/FormConfig/createcode.vue'
import second from '../views/prostage/temp/newtemp1/second'
import detailed from '../views/prostage/temp/newtemp1/detailed1'
import modeSecCont from '../components/modeFirst/modeSecCont.vue'
import picDetailed from '../views/prostage/content/picDetailed'
import comments from '../views/prostage/content/comments'



import PlayManyPicturesContentMsg from '../components/ClientWeb/TextTemplate/PlayManyPicturesContentMsg.vue'
import PlayVideosMsg from '../components/ClientWeb/TextTemplate/PlayVideosMsg.vue'
import FrameWork from '../components/ClientWeb/TextTemplate/FrameWork.vue'
import PlayContentMsg from '../components/ClientWeb/TextTemplate/PlayContentMsg.vue'
import PlayNewsMsg from '../components/ClientWeb/TextTemplate/PlayNewsMsg.vue'
import PlayPhoto from '../components/ClientWeb/TextTemplate/PlayPictrueMsg.vue'
/*
*
*
*
*
* */
import SysDownLoad from '../components/sourceManageSys/SysDownLoad.vue'
import corpusManage from '../components/sourceManageSys/corpusManage.vue'
import creatCorpus from '../components/sourceManageSys/creatCorpus.vue'
import creatTable from '../components/sourceManageSys/creatTable.vue'
import creatPropsAndCon from '../components/sourceManageSys/creatPropsAndCon.vue'
import corpusUserDownSearch from '../components/sourceManageSys/corpusUserDownSearch.vue'
import perCorpusManage from '../components/sourceManageSys/perCorpusManage.vue'



export default[
  {
    path: '/',
    name: '首页',
    component: Layout,
    children:[
        {
            path:'appmain',//首页
            component:()=>import('../views/layout/AppMain.vue')
        },
        {
            path:'welcome',//首页右侧欢迎
            component:()=>import('../views/defaultLayout/Welcome.vue')
        },
        {
            path: 'pool',
            component: () => import('../components/Jqx/Pool.vue'),
            name: 'echartbar',
        },
        {
            path: 'components',
            component: () => import('../components/editable/setMode.vue'),
            name: 'components',
        },
        {
            path: 'backcms',//工作台
            component:() => import('../views/cms/demo.vue'),
            name: 'backcms',
        },
        {
            path:"addContent",
            component:()=>import("../views/cms/addText.vue"),
            name:"addContent",
        },
        // {
        //     path: 'templatelist',//模板配置
        //     component:() => import('../views/settings/templates.vue'),
        //     name: 'templatelist',
        // },
        {
            //path: 'backcms1',//表单
            path: 'reviseTheme',//一级页面
            component:() => import('../views/cms/reviseTheme.vue'),
            //name: 'backcms',
            name: 'reviseTheme',
        },
        {
        path: 'reviseSubpage',//二级页面
        component:() => import('../views/cms/reviseSubpage.vue'),
        name: 'reviseSubpage',
        },
        {
            path: 'twodimensional/pie',
            component: () => import('../components/Echarts/twodimensional/Pie.vue'),
            name: 'echartpie',
        },
        {
            path: 'twodimensional/line',
            component: () => import('../components/Jqx/Table.vue'),
        },
        {
            path: 'twodimensional/demo',
            component: () => import('../components/Echarts/twodimensional/demo.vue'),
            name: 'echartdemo',
        },
        //服务管理
        {
          path:'service',
          component:()=> import('../components/Admin/service/index.vue')
        },
        {
            path:"backgroundmonitor",
            component:()=>import('../views/service/backgroundMonitor.vue'),
            name:"后台监控"
        },
        {
            path:"apimonitor",
            component:()=>import("../views/service/apiMonitor.vue"),
            name:"接口监控"
        },
        {
            path:"logincenter",
            component:()=>import('../views/service/loginCenter.vue'),
            name:"注册中心"
        },
        {
            path:"serviceAdmin",
            component:()=>import('../views/service/index.vue'),
            name:"服务监控"
        },
        // {
        //     path:"",
        //     component:()=>import()
        // },
        {
            path:'Admin/user',//用户观念管理
            component:()=>import('../components/Admin/user/index'),
            meta:{role:['admin']}
        },
        {
            path:'Admin/group',
            component:()=>import('../components/Admin/group/index')
        },
        {
            path:'Admin/role',
            component:()=>import('../components/Admin/role/index')
        },
        {
            path:'Personalize',//用户管理
            component:()=>import('../views/personalize/Personalize')
        },
        {
            path: 'configmsg/',//动态路由
            name: 'configmsg',
            component: configmsg,
        },
        {
            path: 'configtable',
            name: 'configtable',
            component: configtable,
        },//connectionupdata
        {
            path: 'connectionupdata',
            name: 'connectionupdata',
            component: connectionupdata,
        },//propertyupdata
        {
            path: 'propertyupdata',
            name: 'propertyupdata',
            component: propertyupdata,
        },

        {
            path: 'FormConfig/formoperate',
            name: 'formoperate',
            component: formoperate,
        },
        {
            path: 'FormConfig/tempaltenow',
            name: 'tempaltenow',
            component: tempaltenow,

        },
        {
            path: 'tableupdate',
            name: 'tableupdate',
            component: tableupdate,
        },
        {
            path: 'goback',
            name: 'goback',
            component: goback,
        },
        {
            path: 'createcode',
            name: 'createcode',
            component:createcode,
        },
       /* {
            path: 'PlayContentMsg',
            name: 'PlayContentMsg',
            component:PlayContentMsg,

        },*/
       /* {
            path: 'PlayManyPicturesContentMsg',
            name: 'PlayManyPicturesContentMsg',
            component:PlayManyPicturesContentMsg,

        },*/
        /*{
            path: 'PlayNewsMsg',
            name: 'PlayNewsMsg',
            component:PlayNewsMsg,

        },*/
       /* {
            path: 'PlayPictrueMsg',
            name: 'PlayPictrueMsg',
            component:PlayPictrueMsg,

        },*/
        {
            path: 'PlayVideosMsg',
            name: 'PlayVideosMsg',
            component:PlayVideosMsg,

        },



        {
            path: 'FormConfig/createproject',
            name: 'createproject',
            component: createproject,
        },
        //子系统管理模块
        //下载管理
        {
            path:"/SysDownLoad",
            name:"SysDownLoad",
            component:()=>import("../components/sourceManageSys/SysDownLoad.vue")
        },
        //代码生成工具
        {
            path:"/creatCorpus",
            name:"creatCorpus",
            component:()=>import("../components/sourceManageSys/creatCorpus.vue")
        },
        {
            path:"/creatTable/creatPropsAndCon",
            name:"creatPropsAndCon",
            component:()=>import("../components/sourceManageSys/creatPropsAndCon.vue")
        },
        {
            path:"/creatTable",
            name:"creatTable",
            component:()=>import("../components/sourceManageSys/creatTable.vue")
        },
        //语料库管理
        {
            path:"/corpusManage",
            name:"corpusManage",
            component:()=>import("../components/sourceManageSys//corpusManage.vue")
        },
        //语料库内容管理
        {
            path:"/perCorpusManage",
            name:"perCorpusManage",
            component:()=>import("../components/sourceManageSys//perCorpusManage.vue")
        },


        //评论模块
        {
            path:"/comment",
            name:"评论管理",
            component:()=>import("../views/operate/comment.vue"),
            // children: {
            //     path:"detail/:id",
            //     name:"detail",
            //     component:()=>import("../views/operate/detail_mode.vue")
            // }
        },
        {
            path:"/comment/detail/:content",
            name:"detail",
            component:()=>import("../views/operate/detail_mode.vue")
        },
        //文本标注
        {
            path:"/docsManage",
            name:"文档管理",
            meta:{roles:['admin']},
            component:()=>import("../components/textAnnotation/docsManage/index.vue"),
        },
        {
            path:"/annotationTask",
            name:"标注任务",
            meta:{roles:['admin','annotator']},
            component:()=>import("../components/textAnnotation/annotationTask/index.vue"),
        },
        {
            path:"/annotate_detail",
            name:"文本标注",
            component:()=>import("../components/textAnnotation/annotationTask/annotateDetail.vue"),
        },
        {
            path:"/annotate_merge",
            name:"标注合并",
            component:()=>import("../components/textAnnotation/annotationTask/annotateMerge.vue"),
        },
        {
            path:"/myAnnotation",
            name:"我的标注",
            meta:{roles:['admin','annotator']},
            component:()=>import("../components/textAnnotation/myAnnotation/index.vue"),
        },
        {
            path:"/annotationInitialReview",
            name:"标注初审",
            meta:{roles:['admin','professional']},
            component:()=>import("../components/textAnnotation/annotationInitialReview/index.vue"),
        },
        {
            path:"/annotationFinalReview",
            name:"标注终审",
            meta:{roles:['admin','professional']},
            component:()=>import("../components/textAnnotation/annotationFinalReview/index.vue"),
        },
        {
            path:"/help",
            name:"帮助",
            component:()=>import("../components/textAnnotation/help/index.vue"),
        },
        //文本分类
        {
            path:"/docClassify",
            name:"文本分类",
            component:()=>import("../components/docClassify/index.vue"),
        },
        //机器翻译
        {
            path:"/docMachineTranslate",
            name:"机器翻译",
            component:()=>import("../components/docClassify/textTranslate.vue"),
        },

        //文本分析
        {
            path: 'analysis_word',
            name: 'analysis_word',
            component:()=>import('../views/analysisWord/nlp.vue'),
        },
        {
            path:'news_analyse',
            name:'news_analyse',
            component:()=>import('../views/analysis/news_analyse.vue'),
        },
        {
            path:"cv",
            name:"cv",//图像处理
            component:()=>import("../views/cv/index.vue")
        },
        {
            path: 'k',
            name: 'k',//知识智能感知
            component:()=>import('../views/k/index.vue')
        },
        {
            path:'menu',
            name:'menu',
            component:()=>import('../components/Menu/index.vue')
        },
        {
            path:'admin/groupType',
            name:'groupType',
            component:()=>import('../components/Admin/group/index.vue')
        },
      {
        path:'data',
        name:'dataCenter',
        component:()=>import('../views/dataCenter/dataDemo.vue')
      },
      {
        path:'channelData',
        name:'dataCenter',
        component:()=>import('../views/dataCenter/channelDemo.vue')
      },
      {
        path:'fromData',
        name:'dataCenter',
        component:()=>import('../views/dataCenter/fromDemo.vue')
      },

    ]
  },
    {
        path:"/corpusUserDown",
        name:"/corpusUserDown",
        component:()=>import("../components/sourceManageSys//corpusUserDown.vue")
    },
  {
        path:'/login',
        component:()=>import('../views/login/bgImg.vue')
    },

    {
        path:'/404',
        component:()=>import('../views/errorPage/404.vue')
    },{
        path: '/modeCont',//modeDir
        name:'modeFirstCont',
        component:()=>import('../components/modeFirst/modeCont.vue'),
    },{
        path: '/modeCont/:title',
        name: 'modeSecCont',
        component: modeSecCont
    },
    {
        path: '/modethirdCont/:title',
        name:'modethirdCont',
        component:()=>import('../components/modeFirst/modethirdCont.vue'),
    },
    {
        path:'/prostage',
        name:'prostage',
        /*component:()=>import('../views/prostage/index/index.vue'),*/
        component:()=>import('../views/prostage/content/aindex'),
    },
    {
        path:'/prostage/many',
        name:'second',
        component:second,
    },
    {
        path:'/prostage/detailed',
        name:'detailed1',
        component:detailed,
    },
    {
        path:'/prostage/picDetailed',
        name:'picDetailed',
        component:picDetailed,
    },
    {
        path:'/prostage/comments',
        name:'comments',
        component:comments
    },
    {
        path: '/ClientWeb/TextTemplate/FrameWork',
        name: 'FrameWork',
        component:FrameWork,

    },
    {
        path: '/PlayNewsMsg',
        name: 'PlayNewsMsg',
        component:PlayNewsMsg,
    },
    {
        path: '/PlayContentMsg',
        name: 'PlayContentMsg',
        component:PlayContentMsg,

    },
    {
        path: '/PlayPhoto',
        name: 'PlayPhoto',
        component:PlayPhoto,
    },
    {
        path: '/PlayManyPicturesContentMsg',
        name: 'PlayManyPicturesContentMsg',
        component:PlayManyPicturesContentMsg,

    },
    {
        path:'/prostage/chanel/:chName',
        name:'chName',
        component:()=>import('../views/prostage/content/amain.vue'),
    },
    {
        path:"/corpusUserDownSearch/:content",
        name:"corpusUserDownSearch",
        component:()=>import("../components/sourceManageSys/corpusUserDownSearch.vue")
    },

]

