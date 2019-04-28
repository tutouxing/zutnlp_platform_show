const mutations = {
    SET_DIALOGFORMVISIBLE_STATE(state,flag){
        state.dialogFormVisible = flag;
    },
    set_chartType_state(state,data){
        console.log(data.type);
        state.chartType.splice(data.num,1,data.type);
    },
    set_chartDataUrl_state(state,url){
        state.chartDataUrl=url;
    },
    SET_SHOWTYPE_STATE(state,type){
        state.showType = type;
    },
    SET_SELECTION_STATE(state,selection){
        state.selection = selection;
    },
    SET_FLAG_STATE(state,flag){
        state.flag = flag;
    },
    // 请求数据时loading
    FETCH_LOADING(state, res) {
        state.fetchLoading = res
    },
    SET_USERNAME_STATE(state,username){
        state.username = username;
    },
    SET_USERMENUS_STATE(state,usermenus){
        state.usermenus = usermenus;
    },
    SET_USERTHEME_STATE(state,theme){
        state.themeColor = theme;
    },
    SET_PAGEONE_STATE(state,one){
        state.pageone = one;
    },
    SET_USERID_STATE(state,id){
        state.userid = id;
    },
    SET_COMP_STATE(state,comp){
        state.comp = comp;
    },
    SET_CHANNEL_STATE(state,channel){
        console.log("得到状态的channel");
        console.log(channel);
        state.channel=channel;
    }
};
export default mutations;
