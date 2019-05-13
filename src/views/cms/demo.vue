<template>
  <div>
    <el-row>
      <el-col style="width: 20%">
        <el-card style="height: 900px">
            <el-row>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-folder"></use>
          </svg>
                <span style="font-size: 20px; font-weight:bold"> 栏目目录</span>
            </el-row>
          <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              icon-class="el-icon-tickets"
              :filter-node-method="filterNode"
              node-key="id"
              highlight-current="true"
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
                修改栏目名
              </el-button>
            </el-col>
            <el-col style="width: 20%">
              <el-button type="primary" class="el-icon-circle-plus-outline" style="float: left;margin-bottom:20px; "
                         @click="addContent">
                添加栏目内容
              </el-button>
            </el-col>
            <el-col style="width: 20%">
              <el-button type="danger" class="el-icon-delete" style="float: left;margin-bottom:20px; "
                         @click="deleChannel">
                删除栏目
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
    .icon {
        width: 1.8em;
        height: 1.8em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
<script>
    import {getChannelById} from "../../api/channel";
    import {delContentById} from "../../api/content";
    import {delChannelById} from "../../api/channel";
    import "../../assets/icon/iconfont";
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
              }
            this.tableData=this.data2[0].data;
          });
          this.$nextTick(function(){
            this.$refs.tree2.setCurrentKey(2);
          })

        },

        methods: {
          addContent () {
            // this.$store.commit('SET_COMP_STATE', add_text)
            this.$router.push("addContent")
          },
          filterNode (value, data) {
            if (!value) return true
            return data.label.indexOf(value) !== -1
          },
          loadSet () {
             this.channelId = this.$refs.tree2.getCurrentKey()
            for (let i = 0; i < this.data2.length; i++) {
              if (this.channelId === this.data2[i].id) {
                this.tableData = this.data2[i].data
              }
            }
          },
          edit (rows) {
            let id = rows.id
            this.$router.push({
              path: '/addContent',
              query: {
                id: id,
                type: 'update'
              }
            })
          },
          deleCurrentContent (rows) {this.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }) .then(() => {
            delContentById(rows.id).then(() => {
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success',
                duration: 2000
              });
              const index = this.tableData.indexOf(rows);
              this.tableData.splice(index, 1);
              this.data2[this.channelId].data.splice(index, 1);
            });
          });
          },
          deleChannel(node){
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
               delChannelById(this.channelId).then(() => {
                this.$notify({
                  title: '成功',
                  message: '删除成功',
                  type: 'success',
                  duration: 2000
                });
                 for (let i = 0; i < this.data2.length; i++) {
                   if (this.channelId === this.data2[i].id) {
                     this.$refs.tree2.remove(this.data2[i]);
                   }
                 }

              });
            });
          }
        },
        data() {
            return {
                channelId:'',
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
