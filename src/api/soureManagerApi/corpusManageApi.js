import fetch from "../../utils/fetch";

export function FindALLFile() {
    return fetch({
        url:'http://127.0.0.1:8848/File/FindALLFile',
        method:'get',
    })
}

export function FindALLTableMessage() {
    return fetch({
        url:'http://127.0.0.1:8848/TableMessage/list',
        method:'get',
    })
}
export function DownLoadFile(fileName) {
    return fetch({
        url:'http://127.0.0.1:8848/File/downLoadFile',
        method:'post',
        data: fileName
    })
}
export function FindOneTypeFilePIC() {
    return fetch({
        url:'http://127.0.0.1:8848/File/FindOneTypePIC',
        method:'get',
    })
}
export function FindOneTypeFileMusic() {
    return fetch({
        url:'http://127.0.0.1:8848/File/FindOneTypeFileMusic',
        method:'get',
    })
}
export function FindOneTypeFileDOCX() {
    return fetch({
        url:'http://127.0.0.1:8848/File/FindOneTypeFileDOCX',
        method:'get',
    })
}

export function FindAllTMList() {
    return fetch({
        url:'http://127.0.0.1:8848/TableMessage/FindAllTMList',
        method:'get',
    })
}

export function FindOneTypeFileOTHER() {
    return fetch({
        url:'http://127.0.0.1:8848/File/FindOneTypeFileOTHER',
        method:'get',
    })
}
export function DeleteFile(fileName) {
    return fetch({
        url:'http://127.0.0.1:8848/File/delete',
        method:'post',
        data: fileName
    })
}

export function FindByInput(input) {
    return fetch({
        url:'http://127.0.0.1:8848/File/findByInput',
        method:'post',
        data: input,
    })
}
export function FindEachProps(tableMessageName) {
    return fetch({
        url:'http://127.0.0.1:8848/TableMessage/findMyProps',
        method:'post',
        data: tableMessageName,
    })
}
export function FindEachConns(tableMessageName) {
    return fetch({
        url:'http://127.0.0.1:8848/TableMessage/findMyConnection',
        method:'post',
        data: tableMessageName,
    })
}

export function AddEachTable(tableMessageName,tableBody) {
    return fetch({
        url:'http://127.0.0.1:8848/TableMessage/add',
        method:'post',
        data: tableBody,
    })
}
export function AddEachAllProps(tableMessageName,PrpsList) {
    console.log("=============================")
    console.log(JSON.stringify(PrpsList))
    return fetch({
        url:'http://127.0.0.1:8848/Pros/addList',
        method:'post',
        data: PrpsList,
        params:{
            'TableMessageName':tableMessageName
        }
    })
}
export function AddEachAllConnection(tableMessageName,connection) {
    console.log("=============================")
    console.log(JSON.stringify(connection))
    return fetch({
        url:'http://127.0.0.1:8848/Connection/add',
        method:'post',
        data: connection,
        params:{
            'TableMessageName':tableMessageName
        }
    })
}
export function AddProps(tableMessageName) {
    return fetch({
        url:'http://127.0.0.1:8848/TableMessage/add',
        method:'post',
        data: tableMessageName,
    })
}
export function AddEachConns(tableMessageName) {
    return fetch({
        url:'http://127.0.0.1:8848/TableMessage/findMyConnection',
        method:'post',
        data: tableMessageName,
    })
}

export function GenCodePer(projectName) {
    return fetch({
        url:'http://127.0.0.1:8848/GenCode/GetEntiredProjectZip',
        method:'get',
        params:{
            'ProjectName':projectName
        }
    })
}