import Cookies from 'js-cookie'
const TokenKey='S-Token'
export function getToken() {
    return Cookies.get(TokenKey);
    //得到token
}
export function setToken() {
    return Cookies.set(TokenKey,'token');
    //在cookies域中设置键为：s-token,值为token，然后请求后台的时候将token带回去，然后将再将其带回来
}
export function removeToken() {
    return Cookies.remove(TokenKey);
    //删除token
}