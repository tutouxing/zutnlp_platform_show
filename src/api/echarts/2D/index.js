import axios from '../../../../node_modules/axios'
import fetch from "../../../utils/fetch";

export const getjson = (url) =>{
    return axios.get(url)
};
export const getCV = () =>{
    return fetch({
        url:'http://127.0.0.1:8848/image/?page=1&limit=8',
        method:'get',
    })
};
