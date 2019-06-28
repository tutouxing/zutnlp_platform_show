import fetch from '../../utils/fetch.js'
export function PictureById(id) {
    return fetch({
        url:'http://202.196.37.147:8848/picture/content_id/'+id,
        method:'get',
    })
}
export function PicturePage() {
    return fetch({
        url:'http://202.196.37.147:8848/picture/?page='+1+'&'+'limit='+20,
        method: 'get',
    })
}