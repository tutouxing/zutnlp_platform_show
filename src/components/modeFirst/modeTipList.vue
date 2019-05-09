<template>
<div>
    <ul>
        <li class="liList" v-for="tableData in tableDataList">{{tableData.date}}</li>
    </ul>
</div>
</template>

<script>
    export default {
        name: "modeTipList",
        data() {
            return {
                tableDataList: [{
                    date: '2016-05-01'
                },{
                    date: '2016-05-02'
                },{
                    date: '2016-05-03'
                },{
                    date: '2016-05-04'
                },{
                    date: '2016-05-05'
                },{
                    date: '2016-05-06'
                },{
                    date: '2016-05-04'
                },{
                    date: '2016-05-05'
                },{
                    date: '2016-05-06'
                }
                ]
            }
        }
    }
</script>

<style scoped>
    .liList{
        float:left;
        text-align:left;
        line-height:28px;
        color:#666;
        text-decoration:none;
        width: 100%;
        height: 30px;
    }
</style>