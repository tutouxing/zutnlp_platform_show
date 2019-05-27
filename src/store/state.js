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
    pageSet:["待添加","待添加","待添加"],
    AllContent:[],
    Alltxt:[]
};
export default state;
