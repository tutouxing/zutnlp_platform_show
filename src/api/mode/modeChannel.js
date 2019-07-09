import fetch from "../../utils/fetch";

export function getChannelById(id) {
    return fetch({
        url:'/Channel/'+id,
        method:'get',
    })
}

export function getChannelAll(userId) {
    return fetch({
        url:'/Channel/'+userId,
        method:'get',
    })
}
