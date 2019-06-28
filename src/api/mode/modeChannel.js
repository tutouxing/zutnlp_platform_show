import fetch from "../../utils/fetch";

export function getChannelById(id) {
    return fetch({
        url:'http://202.196.37.147:8848/Channel/'+id,
        method:'get',
    })
}

export function getChannelAll(userId) {
    return fetch({
        url:'http://202.196.37.147:8848/Channel/'+userId,
        method:'get',
    })
}