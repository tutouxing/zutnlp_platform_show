/**
 * author:wastelands
 * Date:2019-04-13 12:04
 * introduce:
 */
import fetch from '../../utils/fetch.js'
export function putContentById(id,obj) {
    return fetch({
        url:'http://127.0.0.1:8848/Content/'+id,
        method:'put',
        data:obj,
    })
}
export function getContent(query) {
    return fetch({
        url: 'http://localhost:8848/Content/?page=1&limit=20',
        method: 'get',
        // params: query,
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
export function addContent(id1,id2,obj) {
  return fetch({
    url:'http://127.0.0.1:8848/Content/add/?channelId='+id2+'&userId='+id1,
    method:'post',
    data:obj
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
