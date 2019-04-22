/**

 * Description： 

 * Author: hjscode

 * Date: Created in 2018/11/19 16:09

 */

let echarts = require('echarts');
import {getjson} from "../api/echarts/2D";
class MyEcharts {
    constructor(echarID,url){
        this.echarID=echarID;
        this.url=url;
    }
    initBar () {
        let container = document.getElementById(this.echarID);
        let myChart = echarts.init(container);
        let  lb=getjson(this.url);
        lb.then((data) => {
            myChart.setOption({
                title: {text: data.data["name"]},
                tooltip: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    //传入的字符串用“，”分割
                    data: data.data["xAxis_data"].split(","),
                    name: '产品'
                },
                yAxis: {
                    name: '销量'
                },
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: data.data["series_data"].split(",")
                }]
            });
        })
    }
    initline () {
        let container = document.getElementById(this.echarID);
        let myChart = echarts.init(container);
        let  lb=getjson(this.url);
        lb.then((data) => {
            //console.log(data.data["series_data"]);
            myChart.setOption({
                title: {text:data.data["name"]},
                tooltip: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data:data.data["xAxis_data"].split(","),
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: data.data["series_data"].split(","),
                    type: 'line',
                    areaStyle: {}
                }]
            });
        })
    }
    //格式化数据函数（饼状图）
    initPieData(x,y){
        let temp=[];
        for(let i=0;i<x.length;i++) {
            temp.push({value:y[i],name:x[i]});
        }
        return  temp;
    }
    initScatterData(x,y){
        let temp=[];
        for(let i=0;i<x.length;i++) {
            temp.push([y[i],x[i]]);
        }
        return  temp;
    }
    initPie () {
        let container = document.getElementById(this.echarID);
        let myChart = echarts.init(container);
        let  lb=getjson(this.url);
        lb.then((data) => {
            let y=data.data["series_data"].split(",");
            let x =data.data["xAxis_data"].split(",");
            let pros=this.initPieData(x,y);//格式化传入的数据
            console.log(x.length);
            console.log(pros);
            myChart.setOption({
                title : {
                    text: data.data["name"] ,
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:x,
                },
                series : [
                    {
                        name: '产品',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:pros,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        })
    }
    initScatter() {
        let container = document.getElementById(this.echarID);
        let myChart = echarts.init(container);
        let  lb=getjson(this.url);
        lb.then((data) => {
            let x =data.data["series_data"].split(",");
            let y =data.data["xAxis_data"].split(",");
            let pros=this.initScatterData(x,y);//格式化传入的数据
            myChart.setOption({
                xAxis: {},
                yAxis: {},
                series: [{
                    symbolSize: 20,
                    data: pros,
                    type: 'scatter'
                }]
            });
        })
    }
    initRadar(){
        let container = document.getElementById(this.echarID);
        let myChart = echarts.init(container);
        let  lb=getjson(this.url);
        lb.then((data) => {
            let x = data.data["series_data"].split(",");
            let y = data.data["xAxis_data"].split(",");
            myChart.setOption({
                title: {
                    text: data.data["name"],
                },
                tooltip: {},
                legend: {
                    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        {name: '销售（sales）', max: 900},
                        {name: '管理（Administration）', max: 800},
                        {name: '信息技术（Information Techology）', max: 700},
                        {name: '客服（Customer Support）', max: 800},
                        {name: '研发（Development）', max: 1000},
                        {name: '市场（Marketing）', max: 900}
                    ]
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: x,
                            name: '预算分配（Allocated Budget）'
                        },
                        {
                            value: y,
                            name: '实际开销（Actual Spending）'
                        }
                    ]
                }]
            });
        })
    }
}
export {
    MyEcharts,
}
