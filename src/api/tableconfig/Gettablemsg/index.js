import fetch from '../../../utils/fetch.js'
export function getTableMassage() {
    return fetch({
        url:"http://202.196.37.147:8848/TableMessage/list",
        method:"get"
    })
}