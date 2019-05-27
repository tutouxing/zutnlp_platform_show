import fetch from '../../utils/fetch.js'
export function PictureById(id) {
    return fetch({
        url:'http://127.0.0.1:8848/picture/content_id/'+id,
        method:'get',
    })
}