<template>
  <div class="pie">
    <el-card :body-style="{ padding: '0px' }">
      <tree-table :data="user_data" :columns="service_columns" v-if="this.flag === 1" border/>
      <!--<tree-table :data="code_data" :columns="code_columns" v-if="this.flag === 2" border/>-->
      <!--<tree-table :data="service_data" :columns="service_columns" v-if="this.flag === 3" border/>-->
    </el-card>
  </div>
</template>
<script>
  import treeTable from '../../components/TableTree/index.vue'
  import {page} from '../../api/admin/user/index'
  import {fetchTree} from '../../api/admin/group/index'
  import {TableFindAll} from '../../components/FormConfig/api/AxiosApi'
  import bus from '@/assets/eventBus'
  export default {
      components: { treeTable },
      data() {
          return {
              flag:1,
              listQuery: {//列表的限制
                  page: 1,
                  limit: 20,
              },
              user_columns: [
                  {
                      text: "用户组",
                      value: "name" || "username",
                      width: 200
                  },
                  {
                      text: "创建时间",
                      value: "dateCreated"
                  },
                  {
                      text: "权限",
                      value: "userAccount"
                  }
              ],
              code_columns:[
                  {
                      text: "表名",
                      value: "tablename",
                      width: 200
                  },
                  {
                      text: "说明",
                      value: "PrtysInstruct"
                  },
                  {
                      text: "包名",
                      value: "packagename"
                  },
                  {
                      text: "作者",
                      value: "tableauthor",
                      width: 200
                  }
              ],
              service_columns:[],
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
              code_data:[],
              service_data:[],
          };
      },
      mounted(){
          let that = this;
          bus.$on("passURL",() => {
              let url = this.$store.state.selection;
              console.log("url = " + url);
              if (url === "用户组") {
                  that.flag = 1;
                  fetchTree().then(res=>{
                      this.user_data=res.data;
                      this.$nextTick(() => {
                          page(this.listQuery).then(response => {
                              that.$set(that.user_data[0]["children"],0,response.data["content"]);
                          });
                      })
                  });
              }else if (url === "代码表单"){
                that.flag = 2;
                TableFindAll().then(res => {
                    that.code_data = res.data;
                    console.log("kkk");
                    console.log(res.data);
                });
              }else if (url === "服务组"){
                  that.flag = 3;
              }
          });
      }
  }
</script>
