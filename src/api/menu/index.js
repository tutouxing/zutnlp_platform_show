import fetch from '../../utils/fetch'
export function menulist() {//得到菜单列表
    return fetch({
        url:'http://127.0.0.1:8848/menu/list',
        method:'get',
    })
}
export function menuTree(id) {//得到menu树
    return fetch({
        url:'http://127.0.0.1:8848/menu/getTree/'+id,
        method:'get',
    })
}
export function addChild(id,Obj) {//添加孩子
    return fetch({
        url:'http://127.0.0.1:8848/menu/addChild'+id,
        method:'post',
        data:Obj,
    })
}
export  function getChildren(id) {//得到孩子
    return fetch({
        url:'http://127.0.0.1:8848/menu/getChildren'+id,
        method:'get',
    })
}
export function deleteObj(id) {//删除菜单
    return fetch({
        url:'http://127.0.0.1:8848/menu/'+id,
        method:'delete',
    })
}
export function updateObj(id,Obj) {//个更新菜单
    return fetch({
        url:'http://127.0.0.1:8848/menu/'+id,
        method:'put',
        data:Obj,
    })
}
