const getObjBySplitStr = (id, splitStr) => {
    let splitArr = id.split(splitStr)
    let str = splitArr[splitArr.length - 1]
    let keyValArr = str.split('_')
    let res = {}
    let i = 0
    let len = keyValArr.length
    while (i < len) {
        res[keyValArr[i]] = keyValArr[i + 1]
        i += 2
    }
    return res
}
export const getRouteById = id => {
    let res = {}
    if (id.includes('&')) {
        res.query = getObjBySplitStr(id, '&')
        id = id.split('&')[0]
    }
    if (id.includes(':')) {
        res.params = getObjBySplitStr(id, ':')
        id = id.split(':')[0]
    }
    res.name = id
    return res
}
import Bar from '@/views/Echarts/twodimensional/Bar.vue'
export const getEchart = url =>{
    return Bar;
}