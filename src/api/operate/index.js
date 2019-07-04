/**
 * author:wastelands
 * Date:2019-07-03 09:09
 * introduce:运营模块api
 */
import fetch from '../../utils/fetch.js'
export function updateComment(comment) {
    return fetch({
        url:"http://127.0.0.1:8848/comment/"+comment.id,
        data:comment,
        method:"put"
    })
}
export function delComment(comment) {
    return fetch({
        url:"http://127.0.0.1:8848/comment/"+comment.id,
        method:"delete"
    })
}
