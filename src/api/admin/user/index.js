import fetch from '../../../utils/fetch.js'
export function page(query) {
    return fetch({
        url:'http://127.0.0.1:8848/user/',
        method:'get',
        params:query,
    })
}
export function addObj(obj) {
    return fetch({
        url:'http://127.0.0.1:8848/user/',
        method:'post',
        data:obj,
    })
}
export function setObj(id,obj) {
    return fetch({
        url:'http://127.0.0.1:8848/user/setPages/?userId='+id+'&pages='+obj,
        method:'post',
    })
}
export function getObj(id) {
    return fetch({
        url:'http://127.0.0.1:8848/user/'+id,
        method:'get',
    })
}
export function delObj(id) {
    return fetch({
        url:'http://127.0.0.1:8848/user/'+id,
        method:'delete'
    })
}
export function putObj(id,obj) {
    return fetch({
        url:'http://127.0.0.1:8848/user/'+id,
        method:'put',
        data:obj,
    })
}

export function getName(username) {
    return fetch({
        url:'http://127.0.0.1:8848/user/getByName',
        method:'get',
        params: username
    })
}

