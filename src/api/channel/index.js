/**


 * Description： TODO

 * Author: hjscode

 * Date: Created in 2019/4/23 16:28

 */

import fetch from '../../utils/fetch.js'
 export function addChannel(id,obj) {
  return fetch({
    url: '/Channel/add/?userId='+id,
    method: 'post',
    data:obj,
  })
}
export function getChannelById(id) {
  return fetch({
    url: '/Channel/userid?id='+id,
    method: 'get',
  })
}
export function delChannelById(id) {
  return fetch({
    url: '/Channel/' + id,
    method: 'delete',
  })
}
  export function alterChannelById(id) {
    return fetch({
      url: '/Channel/' + id,
      method: 'put',
    })
}
export function putChannelById(id2,id1,obj) {
  return fetch({
    url: '/Channel/update/?channelId='+id2+'&userId='+id1,
    method: 'put',
    data:obj,
  })
}
export function putTodayChannel(obj) {
  return fetch({
    url: '/Channel/update/today',
    method: 'put',
    data:obj,
  })
}

