const mutations = {
    SET_DIALOGFORMVISIBLE_STATE (state, flag) {
      state.dialogFormVisible = flag;
    },
    set_chartType_state (state, data) {
      console.log(data.type);
      state.chartType.splice(data.num, 1, data.type);
    },
    set_chartDataUrl_state (state, url) {
      state.chartDataUrl = url;
    },
    SET_SHOWTYPE_STATE (state, type) {
      state.showType = type;
    },
    SET_SELECTION_STATE (state, selection) {
      state.selection = selection;
    },
    SET_FLAG_STATE (state, flag) {
      state.flag = flag;
    },
    // 请求数据时loading
    FETCH_LOADING (state, res) {
      state.fetchLoading = res
    },
    SET_USERNAME_STATE (state, username) {
      state.username = username;
    },
    SET_USERMENUS_STATE (state, usermenus) {
      state.usermenus = usermenus;
    },
    SET_USERTHEME_STATE (state, theme) {
      state.themeColor = theme;
    },
    SET_PAGEONE_STATE (state, one) {
      state.pageone = one;
    },
    SET_USERID_STATE (state, id) {
      state.userid = id;
    },
    SET_COMP_STATE (state, comp) {
      state.comp = comp;
    },
    SET_CHANNEL_STATE (state, channel) {
      console.log("得到状态的channel");
      console.log(channel);
      state.channel = channel;
    },
    SET_COMPONENTS_STATE(state,components){
        console.log('得到components');
        state.components=components;
    },
    SET_USERINFORMATION_STATE (state, information) {
      state.userInformation = information;
    },
    SET_FIRSTPAGE_STATE (state, one) {
      state.pageSet[0] = one;
    },
    SET_SECONDPAGE_STATE (state, two) {
      state.pageSet[1] = two;
    },
    SET_AllCONTENT_STATE (state, channel) {
        var contList=new Array();
        var i=0;
        var title;
        for (i=0;i<channel.length;i++){
            for (var m=0;m<channel[i].contents.length;m++) {
                title=channel[i].contents[m].title
                contList.push(title)
            }

        }
        state.AllContent = contList;
    },
    SET_AllTXT_STATE (state, channel) {
        var contList=new Array();
        var i=0;
        var title;
        for (i=0;i<channel.length;i++){
            for (var m=0;m<channel[i].contents.length;m++) {
                title=channel[i].contents[m].text
                contList.push(title)
            }

        }
        state.Alltxt = contList;
    },
    SET_TODAY_STATE(state,today){
      state.today=today;
    },
    SET_TODAYDATA_CONTENT_STATE(state,todaydata){
      state.Data.todayContentNum=todaydata;
    },
    SET_TODAYDATA_STATE(state,todaydata){
      state.Data.todayData.shift();
      state.Data.todayData.push(todaydata)
    },
    SET_ONCEDATA_STATE(state,oncedata){
      state.Data.onceData.shift();
      state.Data.onceData.push(oncedata)
    },
    SET_TODAYPAGE_STATE(state,hours){
      state.todayData=hours+state.todayData;
    },
    SET_TODAYPAGEINIT_STATE(state,hours){
    state.todayData=hours;
    },
    SET_HOURSPAGE_STATE(state,hours){
    state.hoursData=hours;
    }








};
export default mutations;
