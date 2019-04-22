<template>
  <div>
    <el-row>
      <el-breadcrumb separator="/" style="height: 100px; margin-top: 30px">
        <el-breadcrumb-item :to="{ path: '/templatelist' }">界面</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">模板</a></el-breadcrumb-item>
        <el-breadcrumb-item>模板管理</el-breadcrumb-item>
        <el-breadcrumb-item>模板列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-tree
            class="filter-tree"
            :data="leftContent"
            :props="defaultProps"
            icon-class="el-icon-tickets"
            :filter-node-method="filterNode"
            node-key="id"
            @node-click="handleNodeClick"
            ref="left"
            style="font-size: 20px">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span> <i class="el-icon-tickets"></i>{{ node.label }}</span>
          </span>
        </el-tree>
      </el-col>
      <el-col :span="18">
        <!--文件夹下的各文件详情-->
        <el-table
            :data="dirTable_data"
            border
            style="width: 80%;"
            v-if="flagDir==true">
          <el-table-column
              fixed
              prop="label"
              label="文件名"
              width="150">
          </el-table-column>
          <el-table-column
              prop="size"
              label="大小"
              width="200">
          </el-table-column>
          <el-table-column
              prop="last_date"
              label="最后修改时间"
              width="200">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="200">
            <template slot-scope="scope">
              <el-button type="success" size="small" class="el-icon-edit" @click="edit(index,rows)">编辑</el-button>
              <el-button @click="handleClick(scope.row)" type="danger" size="small" class="el-icon-delete">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--单个文件详细内容-->
        <div>
          <el-form label-position="left" label-width="80px" v-show="flagFile">
            <el-form-item label="文件名">
              <el-input :placeholder="file_name"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2019-04-20 12:11
     */
    export default {
        name: "templates",
        watch: {
            filterText(val) {
                this.$refs.left.filter(val);
            }
        },
        data(){
            return{
                leftContent: [{
                    id:"1",
                    label: '模板根目录',
                    children: [{
                        id:"1-1",
                        label: 'mobile',
                        children: [{
                            id:"1-1-1",
                            label: '三级 1-1-1'
                        }]
                    },{
                        id:"1-2",
                        label: 'default',
                        children: [{
                            id:"1-2-1",
                            label: '三级 1-1-1'
                        }]
                    },{
                        id:"1-3",
                        label: 'd20',
                        children: [{
                            id:"1-3-1",
                            label: '三级 1-1-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                //单个文件
                flagFile:false,
                file_name:"",
                detail:"",
                //文件夹
                dirTable_data:[],
                flagDir:false,
            }
        },
        methods: {
            handleNodeClick() {
                let node = this.$refs.left.getCurrentNode();
                if (node.children!=[]) {//不是子节点，显示子节点所有内容
                    console.log(node.children)
                    this.dirTable_data = node.children;
                    this.flagDir = true;
                    this.flagFile = false;
                }else {
                    //否则显示文件详细内容
                    this.file_name = node.label;
                    this.$set(this.flagFile,true);
                    this.flagDir = false;
                    // this.flagFile = true;
                    //从后台获得文件代码
                }
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
        }
    }
</script>

<style scoped>

</style>