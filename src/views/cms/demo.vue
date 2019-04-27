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
            <el-button type="primary" class="el-icon-circle-plus-outline" style="float: left;margin-bottom:20px; " @click="addContent">
              添加内容
            </el-button>
          </el-col>
          </el-row>
          <component :is="this.$store.state.comp"></component>
        </el-card>
      </el-col>
    </el-row>

  </div>

</template>
<style>

</style>
<script>
import news_table from './news'
import default_table from './defaultTable'
import application_table from './applicationTable'
import download_table from './downloadTable'
import pic_table from './picTable'
import video_table from './videoTable'
import doc_table from './docTable'
import add_text from './addText'
export default {
  name: 'demo',
  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    addContent () {
      this.$store.commit('SET_COMP_STATE', add_text)
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    loadSet () {
      let id = this.$refs.tree2.getCurrentKey()
      if (id == 1) {
        this.$store.commit('SET_COMP_STATE', default_table)
      } else if (id == 11) {
        this.$store.commit('SET_COMP_STATE', news_table)
      } else if (id == 12) {
        this.$store.commit('SET_COMP_STATE', download_table)
      } else if (id == 13) {
        this.$store.commit('SET_COMP_STATE', video_table)
      } else if (id == 14) {
        this.$store.commit('SET_COMP_STATE', pic_table)
      } else if (id == 15) {
        this.$store.commit('SET_COMP_STATE', application_table)
      } else if (id == 16) {
        this.$store.commit('SET_COMP_STATE', doc_table)
      }
      // console.log(this.$refs.tree2.getCurrentKey())
    }
  },

  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      filterText: '',
      data2: [{
        id: 1,
        label: '首页',
        children: [{
          id: 11,
          label: '新闻'
        }, {
          id: 12,
          label: '下载'
        }, {
          id: 13,
          label: '视频'
        }, {
          id: 14,
          label: '图库'
        }, {
          id: 15,
          label: '招聘'
        }, {
          id: 16,
          label: '文库'
        }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      comp: default_table
    }
  }
}
</script>
