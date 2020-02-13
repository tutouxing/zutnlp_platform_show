/**
 * author:wastelands
 * Date:2020-02-07 23:07
 * introduce:
 */
import fetch from '../../utils/fetch'

export function getAllDocs() {
    return fetch({
        url: "http://localhost:8848/doc/getAllDocs/",
        method: "get",
    });
}
export function postDocs(docs) {
    return fetch({
        url: "http://localhost:8848/doc/uploadDoc",
        method: "post",
        data: docs
    })
}