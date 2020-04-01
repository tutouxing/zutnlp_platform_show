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
export function deleteDoc(doc) {
    return fetch({
        url:"http://localhost:8848/doc/delDoc",
        method:"delete",
        data:doc
    })
}
export function updateDoc(doc) {
    return fetch({
        url:"http://localhost:8848/doc/updateDoc",
        method:"put",
        data:doc
    })
}

export function findTasks() {
    return fetch({
        url:"http://localhost:8848/doc/findTask",
        method:"get"
    })
}

export function publishTask(task) {
    return fetch({
        url:"http://localhost:8848/doc/publishTask",
        method:"put",
        data:task
    })
}

//词性分析接口
export function paragraphProcess(doc,annotation_type) {
    return fetch({
        url:"http://localhost:8848/doc/segmentWord",
        method:"post",
        data:doc,
        params:annotation_type
    })
}

export function recallPublish(doc,annotation_type) {
    return fetch({
        url:"http://localhost:8848/doc/cancelPublishTask",
        method:"post",
        data:doc,
        params: annotation_type
    })
}