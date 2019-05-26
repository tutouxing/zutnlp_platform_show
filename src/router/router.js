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



import PlayManyPicturesContentMsg from '../components/ClientWeb/TextTemplate/PlayManyPicturesContentMsg.vue'
import PlayVideosMsg from '../components/ClientWeb/TextTemplate/PlayVideosMsg.vue'
import FrameWork from '../components/ClientWeb/TextTemplate/FrameWork.vue'
import PlayContentMsg from '../components/ClientWeb/TextTemplate/PlayContentMsg.vue'
import PlayNewsMsg from '../components/ClientWeb/TextTemplate/PlayNewsMsg.vue'
import PlayPictrueMsg from '../components/ClientWeb/TextTemplate/PlayPictrueMsg'
/*
*
*
*
*
* */



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
         /*  component: () => import('../components/editable/setMode.vue'),*/
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
        {
          path:'service',
          component:()=> import('../components/Admin/service/index.vue')
        },
        {
            path:'Admin/user',//用户观念管理
            component:()=>import('../components/Admin/user/index')
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
        {
            path: 'PlayContentMsg',
            name: 'PlayContentMsg',
            component:PlayContentMsg,

        },
        {
            path: 'PlayManyPicturesContentMsg',
            name: 'PlayManyPicturesContentMsg',
            component:PlayManyPicturesContentMsg,

        },
        {
            path: 'PlayNewsMsg',
            name: 'PlayNewsMsg',
            component:PlayNewsMsg,

        },
        {
            path: 'PlayPictrueMsg',
            name: 'PlayPictrueMsg',
            component:PlayPictrueMsg,

        },
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



        {
            path: 'analysis_word',
            name: 'analysis_word',
            component:()=>import('../views/analysisWord/nlp.vue'),
            // children: {
            //     path:"",
            //     name:"",
            // }
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

    ]
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
        path: '/modeCont',
        name:'modeFirstCont',
        component:()=>import('../components/modeFirst/modeCont.vue'),
    },
    {
        path: '/modethirdCont/:title',
        name:'modethirdCont',
        component:()=>import('../components/modeFirst/modethirdCont.vue'),
    },
    // {
    //   path:'/'
    // },
    {
        path:'/prostage',
        name:'prostage',
        component:()=>import('../views/prostage/index/index.vue'),
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
        path: '/ClientWeb/TextTemplate/FrameWork',
        name: 'FrameWork',
        component:FrameWork,

    },
    {
        path: '/:title',
        name: 'modeSecCont',
        component: modeSecCont
    }
]

