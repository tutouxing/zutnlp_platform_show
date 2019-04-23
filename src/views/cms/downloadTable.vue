<template>
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
        <el-button @click="handleClick(scope.row)" type="danger" size="small" class="el-icon-delete">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>/**
 * author:wastelands
 * Date:2019-03-31 16:27
 */
import {delContentById, getChannelById } from '../../api/content'

export default {
  name: 'downloadTable',
  created () {
    getChannelById('3').then(response => {
      this.tableData = response.data.contents
    })
  },
  data () {
    return {
      tableData: [
        {
          id: 1,
          type: '焦点',
          top: 10,
          publisher: 'admin',
          count: 14951,
          date: '2016-10-11 13:55:46',
          status: '审核通过',
          title: '[顶1] [推荐] [系统软件] 搜狗输入法'
        },
        {
          id: 1,
          title: '[推荐] [媒体助手] 腾讯视频',
          type: '普通',
          top: 10,
          publisher: 'admin',
          count: 6727,
          date: '2016-10-10 13:54:05',
          status: '审核通过'
        }, {
          id: 2,
          title: '[推荐] [媒体助手] PPTV聚力',
          type: '图文',
          top: 10,
          publisher: 'admin',
          count: 233,
          date: '2016-09-23 09:54:17',
          status: '审核通过'
        }, {
          id: 3,
          title: '[推荐] [媒体助手] 360浏览器',
          type: '图文',
          top: 7,
          publisher: 'admin',
          count: 6655,
          date: '2016-09-23 09:54:17',
          status: '审核通过'
        }, {
          id: 4,
          title: '[推荐] [媒体助手] 谷歌浏览器',
          type: '图文',
          top: 8,
          publisher: 'admin',
          count: 3456,
          date: '2016-09-23 09:54:17',
          status: '审核通过'
        }
      ]
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
      getChannelById('3').then(response => {
        this.tableData = response.data.contents
      })
    }
  }
}
</script>

<style scoped>

</style>
