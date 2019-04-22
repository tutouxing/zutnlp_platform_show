<template>
  <div class="user">
    <el-container :body-style="{ padding: '0px' }" style="width: auto; height: 250px">
      <tree-grid :data="user_data" :columns="user_columns"  :v-loading="loading"border/>
    </el-container>
  </div>
</template>
<script>
    import treeGrid from '../../components/TableTree/index.vue'
    import {page} from '../../api/admin/user/index'
    import {fetchTree} from '../../api/admin/group/index'
    export default {
        components: {treeGrid},
        data() {
            return {
                flag: 1,
                listQuery: {//列表的限制
                    page: 1,
                    limit: 20,
                },
                user_columns: [
                    {
                        text: "用户组",
                        value: "name" || "username",
                    },
                    {
                        text: "创建时间",
                        value: "dateCreated"
                    },
                    {
                        text: "组类型",
                        value: "entityName"
                    },
                ],
                user_data: [
                    // {
                    //     // id: 0,
                    //     event: "用户组",
                    //     username: 50,
                    //     password: "无"
                    // },
                    // {
                    //     // id: 1,
                    //     event: "角色组",
                    //     username: 100,
                    //     password: "无",
                    //     children: [
                    //         {
                    //             id: 2,
                    //             event: "角色1",
                    //             username: 10,
                    //             password: "无",
                    //             children: [
                    //                 {
                    //                     id: 71,
                    //                     event: "事件71",
                    //                     timeLine: 25,
                    //                     comment: "xx"
                    //                 },
                    //                 {
                    //                     id: 72,
                    //                     event: "事件72",
                    //                     timeLine: 5,
                    //                     comment: "xx"
                    //                 },
                    //                 {
                    //                     id: 73,
                    //                     event: "事件73",
                    //                     timeLine: 20,
                    //                     comment: "xx"
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             id: 3,
                    //             event: "角色2",
                    //             username: 90,
                    //             password: "无",
                    //             children: [
                    //                 {
                    //                     id: 4,
                    //                     event: "用户1",
                    //                     username: 5,
                    //                     password: "无"
                    //                 },
                    //                 {
                    //                     id: 5,
                    //                     event: "用户2",
                    //                     username: 10,
                    //                     password: "无"
                    //                 },
                    //                 {
                    //                     id: 6,
                    //                     event: "用户3",
                    //                     username: 75,
                    //                     password: "无",
                    //                     children: [
                    //                         {
                    //                             id: 7,
                    //                             event: "事件7",
                    //                             username: 50,
                    //                             password: "无",
                    //                             children: [
                    //                                 {
                    //                                     id: 71,
                    //                                     event: "事件71",
                    //                                     timeLine: 25,
                    //                                     comment: "xx"
                    //                                 },
                    //                                 {
                    //                                     id: 72,
                    //                                     event: "事件72",
                    //                                     timeLine: 5,
                    //                                     comment: "xx"
                    //                                 },
                    //                                 {
                    //                                     id: 73,
                    //                                     event: "事件73",
                    //                                     timeLine: 20,
                    //                                     comment: "xx"
                    //                                 }
                    //                             ]
                    //                         },
                    //                         {
                    //                             id: 8,
                    //                             event: "事件8",
                    //                             timeLine: 25,
                    //                             comment: "无"
                    //                         }
                    //                     ]
                    //                 }
                    //             ]
                    //         }
                    //     ]
                    // }
                ],
                loading:true,
            };
        },
        mounted() {
            let that = this;
            fetchTree().then(res => {
                this.user_data = res.data;
                this.$nextTick(() => {
                    page(this.listQuery).then(response => {
                        that.$set(that.user_data[0]["children"], 0, response.data["content"]);
                    });
                });
                that.loading=false
            });
        }
    }
</script>