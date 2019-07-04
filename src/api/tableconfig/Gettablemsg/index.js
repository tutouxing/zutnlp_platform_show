import fetch from '../../../utils/fetch.js'
export function getTableMassage() {
    return fetch({
        url:"/TableMessage/list",
        method:"get"
    })
}
