import fetch from '../../utils/fetch'
export function eleGet(query) {
    return fetch({
        url:'/element/',
        method:'get',
        params:query,
    })
}
export function eleCreate(Obj) {
    return fetch({
        url:'/element/',
        method:'post',
        data:Obj
    })
}
export function eleDetele(id) {
    return fetch({
        url:'/element/'+id,
        method:'delete',
    })
}
export function eleGetOne(id) {
    return fetch({
        url:'/element/'+id,
        method:'get',
    })
}
export function eleUpdate(id,Obj) {
    return fetch({
        url:'/element/'+id,
        method:'put',
        data: Obj
    })
}
