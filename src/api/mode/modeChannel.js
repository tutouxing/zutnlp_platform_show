import fetch from "../../utils/fetch";

export function getChannelById(id) {
    return fetch({
        url:'http://127.0.0.1:8848/Channel/'+id,
        method:'get',
    })
}