import axios from 'axios';
import fetch from "../../../utils/fetch";
export function PropertyFindall(){
    let datas;
    let url='http://localhost:8848/Pros/list';
    this.$axios(
        {
            method:'get',
            url,
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true,
        }
    ).then(function (res) {
        datas=res;
        //"得到数据
    });
    return datas;
}
export function TableFindall(){
    let datas;
    let errors;
    let url = "http://127.0.0.1:8848/TableMessage/list";
    this.$axios.get(url).then(function (response) {
        // datas=response;
        return response.data
    }).catch(function (error) {
        errors=error;
    });
    // return datas
}export function TableFindAll(){
    return fetch({
        url: 'http://127.0.0.1:8848/TableMessage/list',
        method:'get',
    })
}
