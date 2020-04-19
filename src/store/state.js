import Card from '@/views/editable/Card.vue'
const state = {
    dialogFormVisible:false,//对话框状态
    chartType: ["NoType", "NoType", "NoType"],
    chartDataUrl:'',
    showType:"",
    selection:"",
    flag:[Card,Card,Card,Card],
    // 请求数据时加载状态loading
    fetchLoading: false,
    username:"",
    usermenus:[],
    themeColor:'#545c64',
    pageone:'页面1-1',
    userid:'',
    comp:'',
    channel:[],
    components:[],
    userInformation:'',
    pageSet:["待添加","待添加","0"],
    AllContent:[],
    Alltxt:[],
    today:'3',
    todayData:0,
    hoursData:0,
    todayChannel:[],
    Data:{
      todayContentNum:0,
      todayData:[100,220,215,182,196,202,236,307,320,150,112,120,150,182,260,250,226,320,350,210,250,260,185,169,220],
      onceData:[1000,2200,2150,1520,1960,2020,2360,3070,3700,1800,1220,1000,1500,1820,2600,2900,2260,3200,3500,2800]
    },
    //标注详情页面annotateDetail
    annotationType:"",
    task:{},
    //合并页面annotateMerge
    annotateData:[],
    mergeTask:{},
};
export default state;
