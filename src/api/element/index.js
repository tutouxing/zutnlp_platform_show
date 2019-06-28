import fetch from '../../utils/fetch'
export function eleGet(query) {
    return fetch({
        url:'http://202.196.37.147:8848/element/',
        method:'get',
        params:query,
    })
}
export function eleCreate(Obj) {
    return fetch({
        url:'http://202.196.37.147:8848/element/',
        method:'post',
        data:Obj
    })
}
export function eleDetele(id) {
    return fetch({
        url:'http://202.196.37.147:8848/element/'+id,
        method:'delete',
    })
}
export function eleGetOne(id) {
    return fetch({
        url:'http://202.196.37.147:8848/element/'+id,
        method:'get',
    })
}
export function eleUpdate(id,Obj) {
    return fetch({
        url:'http://202.196.37.147:8848/element/'+id,
        method:'put',
        data: Obj
    })
}
