/**
 * author:wastelands
 * Date:2019-07-03 09:09
 * introduce:运营模块api
 */
import fetch from '../../utils/fetch.js'
export function updateComment(comment) {
    return fetch({
        url:"/comment/"+comment.id,
        data:comment,
        method:"put"
    })
}
export function delComment(comment) {
    return fetch({
        url:"/comment/"+comment.id,
        method:"delete"
    })
}
export function addComment(body,id) {
    return fetch({
        url:'/comment/add?contentId='+id,
        method:'post',
        data:body
    })
}
