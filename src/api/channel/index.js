/**


 * Description： TODO

 * Author: hjscode

 * Date: Created in 2019/4/23 16:28

 */

import fetch from '../../utils/fetch.js'
 export function addChannel(id,obj) {
  return fetch({
    url: 'http://127.0.0.1:8848/Channel/add/?userId='+id,
    method: 'post',
    data:obj,
  })
}
export function getChannelById(id) {
    return fetch({
        url: 'http://127.0.0.1:8848/Channel/userid?id='+id,
        method: 'get',
    })
}

