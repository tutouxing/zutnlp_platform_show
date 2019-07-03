import fetch from '../../utils/fetch.js'
export function PictureById(id) {
    return fetch({
        url:'/picture/content_id/'+id,
        method:'get',
    })
}
export function PicturePage() {
    return fetch({
        url:'/picture/?page='+1+'&'+'limit='+20,
        method: 'get',
    })
}
