import fetch from '../../../utils/fetch.js'
export function getTableMassage() {
    return fetch({
        url:"http://127.0.0.1:8848/TableMessage/list",
        method:"get"
    })
}
