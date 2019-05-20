<template>
  <div>
    <el-row>
      <el-col style="width: 20%">
        <el-card style="height: 900px">
          <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              icon-class="el-icon-tickets"
              :filter-node-method="filterNode"
              node-key="id"
              @node-click="loadSet()"
              ref="tree2">
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                       <span> <i class="el-icon-tickets"></i>{{ node.label }}</span>
                    </span>
          </el-tree>
        </el-card>
      </el-col>
      <el-col style="width: 80%">
        <el-card style="height: 900px">
          <el-row>
            <el-col style="width: 20%">
              <el-button type="primary" class="el-icon-circle-plus-outline" style="float: left;margin-bottom:20px; ">
                添加目录
              </el-button>
            </el-col>
            <el-col style="width: 20%">
              <el-button type="primary" class="el-icon-circle-plus-outline" style="float: left;margin-bottom:20px; "
                         @click="addContent">
                添加内容
              </el-button>
            </el-col>
          </el-row>
          <el-table
              :data="tableData"
              border
              style="width: 80%;">
            <el-table-column
                fixed
                prop="id"
                label="id"
                width="auto">
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题"
                width="150">
            </el-table-column>
            <el-table-column
                prop="rank"
                label="置顶"
                width="auto">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型"
                width="120">
            </el-table-column>
            <el-table-column
                prop="publish"
                label="发布者"
                width="120">
            </el-table-column>
            <el-table-column
                prop="click_count"
                label="点击"
                width="auto">
            </el-table-column>
            <el-table-column
                prop="dateCreated"
                label="发布时间"
                width="120">
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
                width="120">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="200">
              <template slot-scope="scope">
                <el-button type="success" size="small" class="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
                <el-button type="danger" size="small" class="el-icon-delete" @click="deleCurrentContent(scope.row)">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>
<style>

</style>
<script>
    import {getChannelById} from "../../api/channel";
    import {delContentById} from "../../api/content";

    export default {
        name: 'demo',
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val)
            }
        },
        created() {
          getChannelById(this.$store.state.userid).then(res=>{
              for(let i=0;i<res.data.length;i++){
                  this.data2.push({
                      id:res.data[i].id,
                      label:res.data[i].chName,
                      data:res.data[i].contents,
                  })
                  this.tableData=res.data[i].contents;
              }
              console.log(this.data2)
          });

        },

        methods: {
            addContent() {
                // this.$store.commit('SET_COMP_STATE', add_text)
                this.$router.push("addContent")
            },
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            },
            loadSet() {
                let id = this.$refs.tree2.getCurrentKey()
                for(let i =0;i<this.data2.length;i++){
                    if (id==this.data2[i].id){
                        this.tableData = this.data2[i].data
                    }
                }
            },
            edit (rows) {
                let id = rows.id;
                this.$router.push({
                    path: '/addContent',
                    query: {
                        id: id,
                        type: 'update'
                    }})
            },
            deleCurrentContent (rows) {
                delContentById(rows.id)
                getChannelById('2').then(response => {
                    this.tableData = response.data.contents
                })
            }
        },

        data() {
            return {
                tableData: [],
                filterText: '',
                data2: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
            }
        }
    }
</script>
