import {login,getInfo,getMenus,getAllmenus,logout} from '../../../api/admin/login';
import {getToken,setToken,removeToken} from '../../../utils/auth'
//用户状态
const user={
    state:{
        user:'',
        status: '',
        name:'',
        token:getToken(),
        roles:[],
        avatar: '',
        menus: undefined,
        elements: undefined,
        permissionMenus: undefined,
    },
    mutations:{//放改变state的数据的初始值
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        SET_MENUS: (state, menus) => {
            state.menus = menus;
        },
        SET_ELEMENTS: (state, elements) => {
            state.elements = elements;
        },
        SET_PERMISSION_MENUS: (state, permissionMenus) => {
            state.permissionMenus = permissionMenus;
        },
    },
    actions:{//包含任意的异步操作，这里面的方法用来异步触发mutations里面的方法
        //邮箱登录
        login({commit}, userInfo) {
            const username = userInfo.username.trim();
            commit('SET_TOKEN', '');
            commit('SET_ROLES', []);
            commit('SET_MENUS', undefined);
            commit('SET_ELEMENTS', undefined);
            removeToken();
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    setToken(response.data);
                    commit('SET_TOKEN', response.data);
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },
        //得到用户信息
        getInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const data = response;
                    commit('SET_ROLES', 'admin');
                    commit('SET_NAME', data.name);
                    commit('SET_AVATAR', 'http://git.oschina.net/uploads/42/547642_geek_qi.png?1499487420');
                    const menus = {};
                    for (let i = 0; i < data.menus.length; i++) {
                        menus[data.menus[i].code] = true;
                    }
                    commit('SET_MENUS', menus);
                    const elements = {};
                    for (let i = 0; i < data.elements.length; i++) {
                        elements[data.elements[i].code] = true;
                    }
                    commit('SET_ELEMENTS', elements);
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
                getMenus(state.token).then(response => {
                    commit('SET_PERMISSION_MENUS', response);
                });
            });
        },
        // 前端 登出
        FedLogOut({
                      commit
                  }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                commit('SET_MENUS', undefined);
                commit('SET_ELEMENTS', undefined);
                commit('SET_PERMISSION_MENUS', undefined);
                removeToken();
                resolve();
            });
        },
        // 动态修改权限
        ChangeRole({commit
                   }, role) {
            return new Promise(resolve => {
                commit('SET_ROLES', [role]);
                commit('SET_TOKEN', role);
                setToken(role);
                resolve();
            })
        }
    },

};
export default user;