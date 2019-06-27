import fetch from '../../utils/fetch.js'
export function login(obj) {
    return fetch({
        url:'http://202.196.37.147:8848/login',
        method:'post',
        data:obj
    })
}
export function logout(token) {
    return fetch({
        url:'',
        method:'',
        params:{token},
    })
}
export function getInfo(token) {
    return fetch({
        url:'',
        method:'',
        params: {token}
    })
}
export function getMenus(token) {
    return fetch({
        url:'',
        method:'',
        params:{token}
    })
}
export function getAllmenus() {
    return fetch({
        url:'',
        method:'',
    })
}
