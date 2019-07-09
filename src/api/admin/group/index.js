import fetch from '../../../utils/fetch.js'
/*export function getAllGroupTypes() {
    return fetch({
        url:'',
        method:'get',
    })
}*/
export function fetchTree(){
    return fetch({
        url: '/group/list/',
        method:'get',
    })
}
export function addObj(id,obj) {
    return fetch({
        url:'/group/addChild/'+id,
        method:'post',
        data:obj,
    })
}
export  function getObj(id) {
    return fetch({
        url:'/group/'+id,
        method:'get',
    })
}
export function delObj(id) {
    return fetch({
        url:'/group/'+id,
        method:'delete',
    })
}
export function putObj(id,obj) {
    return fetch({
        url:'/group/'+id,
        method:'put',
        data:obj,
    })
}
export function getUsers(user) {
    return fetch({
        url: '/group/getUsers',
        method: 'get',
        params: user,
    })
}
export function addUsers(groupId,userId) {
    return fetch({
        url:'/group/addUsers?groupId='+groupId+'&usersId='+userId,
        method:'post',
     /*   params:groupId,userId*/
    })
}
export function removesUsers(ids) {
    return fetch({
        url:'/group/removeUsers',
        method:'delete',
        params:ids,
    })
}
export function addMenus(groupId,menuId) {
    return fetch({
        url:'/group/addMenus?groupId='+groupId+'&menusId='+menuId,
        method:'post',
    })
}
