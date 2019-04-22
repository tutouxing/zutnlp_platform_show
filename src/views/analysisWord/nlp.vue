<template>
  <div class="nlp">
    <div>
      <!--<iframe src="http://10.36.20.12:8845/" style="position:relative;top:-140px;left:-100px;width:1000px;height:9999px;"></iframe>-->
      <iframe src="http://202.196.37.147:9898/" style="frameBorder:0; width:100%; scrolling:yes; height:1000px"></iframe>
    </div>
  </div>
</template>

<script>
    import TreeGrid from '_c/TableTree/withButton.vue'
    import {getAllObj} from "../../api/admin/Service";
    export default {
        name: 'nlp',
        data () {
            return {
                columns: [
                    {
                        text: '服务名',
                        value:'appName',
                    },
                    {
                        text: 'IP地址',
                        value:'ip',
                    },
                    {
                        text: '主机名',
                        value: 'hostName'
                    },
                    {
                        text: '端口',
                        value: 'port'
                    },
                    {
                        text: '状态',
                        value: 'status'
                    }
                ],
                dataSource: [
                    {
                        id: 1,
                        parentId: 0,
                        name: '测试1',
                        age: 18,
                        sex: '男',
                        children: [
                            {
                                id: 2,
                                parentId: 1,
                                name: '测试2',
                                age: 22,
                                sex: '男'
                            }
                        ]
                    },
                    {
                        id: 3,
                        parentId: 0,
                        name: '测试3',
                        age: 23,
                        sex: '女',
                        children: [
                            {
                                id: 4,
                                parentId: 3,
                                name: '测试4',
                                age: 22,
                                sex: '男'
                            },
                            {
                                id: 5,
                                parentId: 3,
                                name: '测试5',
                                age: 25,
                                sex: '男'
                            },
                            {
                                id: 6,
                                parentId: 3,
                                name: '测试6',
                                age: 26,
                                sex: '女',
                                children: [
                                    {
                                        id: 7,
                                        parentId: 6,
                                        name: '测试7',
                                        age: 27,
                                        sex: '男'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 18,
                        parentId: 0,
                        name: '测试8',
                        age: 18,
                        sex: '男'
                    }
                ]
            }
        },
        components: {
            TreeGrid
        },
        methods:{
            getAllServices(){
                getAllObj().then(response=>{
                    console.log("app")
                    console.log(response.data)
                    this.dataSource=response.data;
                })
            },
            getRequest(index,row){
                //调用对应的组件展示到服务列表下面
                this.$router.push(row.ip)
            },
        },
        created(){
            // this.getAllServices();
        }
    }
</script>