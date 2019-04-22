<template>
    <div>
        <p style="text-align: left">Table</p>
        <el-button-group style="float: left; margin-top: 20px">
            <el-button size="small" @click="addData">添加</el-button>
            <el-button size="small" @click="deleData">删除</el-button>
        </el-button-group>
        <el-table
                :data="data"
                border
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column prop="date" label="日期" align="center" width="150">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleCard(scope.row,scope.$index)" v-if="!scope.row.flag">{{scope.row.date}}</el-button>
                    <el-input type="text" v-show="scope.row.flag" v-model="scope.row.date" @blur="scope.row.flag=false" @change="scope.row.date=$event.target.value"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleCard(scope.row,scope.$index)" v-if="!scope.row.flag">{{scope.row.name}}</el-button>
                    <el-input type="text" v-show="scope.row.flag" v-model="scope.row.name" @blur="scope.row.flag=false" @change="scope.row.name=$event.target.value"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handleCard(scope.row,scope.$index)" v-if="!scope.row.flag">{{scope.row.address}}</el-button>
                    <el-input type="text" v-show="scope.row.flag" v-model="scope.row.address" @blur="scope.row.flag=false" @change="scope.row.address=$event.target.value"></el-input>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'myTable',
        watch:{

        },
        data() {
            return {
                props:["name","date","address"],
                data: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        flag:false
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄',
                        flag:false
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄',
                        flag:false
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄',
                        flag:false
                    }
                ]
            }
        },
        methods: {
            /*test(row,column){
                console.log(row, column, cell, event);
                if (column.label !== "顺序") {
                    event.target.innerHTML = "";
                    let cellInput = document.createElement("input");
                    cellInput.value = "";
                    cellInput.setAttribute("type", "text");
                    cellInput.style.width = "80%";
                    cell.appendChild(cellInput);
                    cellInput.onblur = function() {
                        cell.removeChild(cellInput);
                        event.target.innerHTML = cellInput.value;
                    };
                }
            },*/
            handleCard(row,id){
                this.data[id].flag = true;
                console.log(id);
            },
            addData(){
                this.data.push({
                    date: '',
                    name: '',
                    address: '',
                    flag:true
                })
            },
            deleData(){
                this.data.pop();
            }
        }
    }
</script>