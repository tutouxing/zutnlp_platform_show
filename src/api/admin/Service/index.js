import fetch from '@/utils/fetch.js'
//注册服务
export function addObj(appName,data) {
    return fetch({
        url: 'http://202.196.37.147:18888/eureka/apps/'+appName,
        method: 'post',
        data
    })
}
//剔除服务
export function deleteObj(appName,instanceID) {
    return fetch({
        url: 'http://202.196.37.147:18888/eureka/apps/'+appName+'/'+instanceID,
        method: 'delete',
    })
}
//暂停服务（移除）
export function outOfObj(appName,instanceID) {
    return fetch({
        url: 'http://202.196.37.147:18888/eureka/apps/'+appName+'/'+instanceID+'/status?value=OUT_OF_SERVICE',
        method: 'put',
    })
}
//返回服务
export function backIntoObj(appName,instanceID) {
    return fetch({
        url: 'http://202.196.37.147:18888/eureka/apps/'+appName+'/'+instanceID+'/status?value=UP',
        method: 'put',
    })
}
//得到所有服务
export function getAllObj() {
    return fetch({
        url: 'http://202.196.37.147:18888/eureka/apps/',
        method: 'get',
    })
}
//根据appName查询服务实例
export function getObj(appName) {
    return fetch({
        url: 'http://202.196.37.147:18888/eureka/apps/'+appName,
        method: 'get',
        params: appName
    })
}

