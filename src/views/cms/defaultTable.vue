<template>
  <el-table
      :data="tableData"
      border
      style="width: 80%;">
    <el-table-column
        fixed
        prop="date"
        label="id"
        width="150">
    </el-table-column>
    <el-table-column
        prop="name"
        label="栏目名称"
        width="200">
    </el-table-column>
    <el-table-column
        prop="name"
        label="栏目路径"
        width="200">
    </el-table-column>
    <el-table-column
        prop="province"
        label="显示"
        width="120">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="200">
      <template slot-scope="scope">
        <el-button type="success" size="small" class="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
        <el-button @click="handleClick(scope.row)" type="danger" size="small" class="el-icon-delete">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>/**
 * author:wastelands
 * Date:2019-03-31 15:51
 */
import {delContentById, getContent} from '../../api/content'

export default {
  name: 'defaultTable',
  created () {
    getContent().then(response => {
      this.tableData = response.data.contents
    })
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
      }]
    }
  },
  methods: {
    edit (rows) {
      let id = rows.id
      this.$router.push({
        path: '/backcms1',
        query: {
          id: id,
          type: 'update'
        }})
    },
    handleClick (rows) {
      delContentById(rows.id)
      getContent().then(response => {
        this.tableData = response.data.contents
      })
    }
  }
}
</script>

<style scoped>

</style>
