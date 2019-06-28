import fetch from '../../../utils/fetch.js'
/*export function getAllGroupTypes() {
    return fetch({
        url:'',
        method:'get',
    })
}*/
export function fetchTree(){
    return fetch({
        url: 'http://202.196.37.147:8848/group/list/',
        method:'get',
    })
}
export function addObj(id,obj) {
    return fetch({
        url:'http://202.196.37.147:8848/group/addChild/'+id,
        method:'post',
        data:obj,
    })
}
export  function getObj(id) {
    return fetch({
        url:'http://202.196.37.147:8848/group/'+id,
        method:'get',
    })
}
export function delObj(id) {
    return fetch({
        url:'http://127.0.0.1:8848/group/'+id,
        method:'delete',
    })
}
export function putObj(id,obj) {
    return fetch({
        url:'http://127.0.0.1:8848/group/'+id,
        method:'put',
        data:obj,
    })
}
export function getUsers(user) {
    return fetch({
        url: 'http://127.0.0.1:8848/group/getUsers',
        method: 'get',
        params: user,
    })
}
export function addUsers(groupId,userId) {
    return fetch({
        url:'http://127.0.0.1:8848/group/addUsers?groupId='+groupId+'&usersId='+userId,
        method:'post',
     /*   params:groupId,userId*/
    })
}
export function removesUsers(ids) {
    return fetch({
        url:'http://127.0.0.1:8848/group/removeUsers',
        method:'delete',
        params:ids,
    })
}
export function addMenus(groupId,menuId) {
    return fetch({
        url:'http://127.0.0.1:8848/group/addMenus?groupId='+groupId+'&menusId='+menuId,
        method:'post',
    })
}
