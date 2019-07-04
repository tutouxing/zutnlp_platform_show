import axios from 'axios'
import {getToken} from "./auth";
//创建axios实例
const service = axios.create({
   /* baseURL: 'http://127.0.0.1:8848',*/
    // timeout:500,
    headers: {'Content-Type': 'application/json','Accept':'application/json'}
})
//http request拦截器
// service.interceptors.request.use(config => {
//     config.headers['Authorization'] = getToken();//每次请求都为http增加Authorization字段，内容为token的内容
//     return config;
// })
export default service;
