/**
 * author:wastelands
 * Date:2019-04-13 12:04
 * introduce:
 */
import fetch from '../../utils/fetch.js'
export function putContentById(id,obj) {
    return {
        url:'http://127.0.0.1:8848/Content/'+id,
        method:'put',
        data:obj,
    }
}
export function getContent(query) {
    return fetch({
        url: 'http://127.0.0.1:8848/Content/',
        method: 'get',
        params: query,
    })
}
export function getContentById(id) {
    return fetch({
        url:'http://127.0.0.1:8848/Content/'+id,
        method:'get',
    })
}
export function delContentById(id) {
    return fetch({
        url:'http://127.0.0.1:8848/Content/'+id,
        method:'delete',
    })
}
export function postContent(obj) {
    return fetch({
        url:'http://127.0.0.1:8848/Content',
        method:'post',
        data:obj

    })
}
export function getChannelById(id) {
    return fetch({
        url:'http://127.0.0.1:8848/Channel/'+id,
        method:'get',
    })
}