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
        <el-button type="success" size="small" class="el-icon-edit"  @click="edit(scope.row)">编辑</el-button>
        <el-button @click="handleClick(scope.row)" type="danger" size="small" class="el-icon-delete">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>/**
 * author:wastelands
 * Date:2019-03-31 16:50
 */
import {delContentById, getChannelById} from '../../api/content'

export default {
  name: 'docTable',
  created () {
    getChannelById('2').then(response => {
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
          title: '[顶1] [推荐] [视频] 《半妖倾城》爱与恨，追与逃，人与妖再一次掀起一段的惊人的倾城传奇'
        },
        {
          id: 1,
          title: '[视频] 原来李小龙和甄子丹对打是这样制作出来的',
          type: '普通',
          top: 10,
          publisher: 'admin',
          count: 6727,
          date: '2016-10-10 13:54:05',
          status: '审核通过'
        }, {
          id: 2,
          title: '[视频] 内容管理-添加内容-只能选择当前栏目相对应的模型',
          type: '图文',
          top: 10,
          publisher: 'admin',
          count: 233,
          date: '2016-09-23 09:54:17',
          status: '审核通过'
        }, {
          id: 3,
          title: '[视频] 1.项目启动后上传资源和模板 再次重启tomcat后 资源还原了',
          type: '图文',
          top: 7,
          publisher: 'admin',
          count: 6655,
          date: '2016-09-23 09:54:17',
          status: '审核通过'
        }, {
          id: 4,
          title: '[视频] 1.项目启动后上传资源和模板 再次重启tomcat后 资源还原了',
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
      getChannelById('2').then(response => {
        this.tableData = response.data.contents
      })
    }
  }
}
</script>

<style scoped>

</style>
