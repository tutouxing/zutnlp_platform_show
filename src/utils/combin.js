/**
 * author:wastelands
 * Date:2018-12-05 17:43
 * introduce:
 */

import {fetchTree} from "../api/admin/group";
export function match(selection) {
    let dataSet = {
        title: {text: "用户组"},
        tooltip: {},
        xAxis: {
            data: [],
            name: '组名'
        },
        yAxis: {
            name: '组人数'
        },
        series: [{
            name: "",
            type: 'bar',
            data: [],
        }]
    };
    if (selection === "用户组") {
        fetchTree().then(res => {
           // dataSet.title["text"] = "用户组";
            dataSet.xAxis["name"] = "组名";
            dataSet.yAxis["name"] = "组人数";
            console.log("res:" + res.data);
            for (let i = 0;i<res.data.length;i++) {
                dataSet.xAxis.data.push(res.data[i]["name"]);
                dataSet.series[0].data.push(res.data[i]["children"].length);
            }
            console.log("x:" + dataSet.xAxis.data);
            console.log("s:" + dataSet.series[0].data);
            return dataSet;
        });
    }else if (selection === "代码表单"){

    }else if (selection === "服务组"){

    }
}

