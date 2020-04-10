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

export function getDocById(doc_id) {
    return fetch({
        url:"http://localhost:8848/doc/"+doc_id,
        method:"get",
    })
}

export function postDocs(docs) {
    return fetch({
        url: "http://localhost:8848/doc/uploadDoc",
        method: "post",
        data: docs,
    })
}
export function deleteDoc(id) {
    return fetch({
        url:"http://localhost:8848/doc/delDoc/"+id,
        method:"delete"
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
        url:"http://localhost:8848/doc/getAllTasks",
        method:"get"
    })
}

export function publishTask(annotate_type,doc_id) {
    return fetch({
        url:"http://localhost:8848/doc/publishTask",
        method:"post",
        params:{annotate_type,doc_id}
    })
}

//词性分析接口
export function paragraphProcess(annotation_type,doc_id) {
    return fetch({
        url:"http://localhost:8848/doc/segmentWord",
        method:"put",
        params:annotation_type,doc_id,
    })
}

export function recallPublish(doc_id,annotation_type) {
    return fetch({
        url:"http://localhost:8848/doc/cancelPublishTask",
        method:"post",
        params:doc_id, annotation_type
    })
}