/**
 * author:wastelands
 * Date:2019-04-13 12:04
 * introduce:
 */
import fetch from '../../utils/fetch.js'
export function putContentById(id,obj) {
    return fetch({
        url:'/Content/'+id,
        method:'put',
        data:obj,
    })
}
export function getContent(query) {
    return fetch({
        url: '/Content/?page=1&limit=20',
        method: 'get',
        // params: query,
    })
}
export function getContentById(id) {
    return fetch({
        url:'/Content/'+id,
        method:'get',
    })
}
export function delContentById(id) {
    return fetch({
        url:'/Content/'+id,
        method:'delete',
    })
}
export function addContent(id1,id2,obj) {
  return fetch({
    url:'/Content/add/?channelId='+id2+'&userId='+id1,
    method:'post',
    data:obj
  })
}
export function postContent(obj) {
    return fetch({
        url:'/Content',
        method:'post',
        data:obj

    })
}
export function getChannelById(id) {
    return fetch({
        url:'/Channel/'+id,
        method:'get',
    })
}
