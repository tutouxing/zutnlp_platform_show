<template>
  <div>
    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-col :span="5">
        <el-input v-model="task_id" placeholder="档案编号"></el-input>
      </el-col>
      <el-col :span="5"><!--任务类型-->
        <el-select v-model="value" placeholder="标注类型">
          <el-option
              v-for="item in task_types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5"><!--任务状态-->
        <el-select v-model="value" placeholder="状态">
          <el-option
              v-for="item in status"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row style="margin-left: 50px;margin-top: 40px">
      <el-col :span="2"><el-button type="primary" @click="handleSearch()">查询</el-button></el-col>
      <el-col :span="2"><el-button @click="handleReset()">重置</el-button></el-col>
    </el-row>
    <el-row style="margin-top: 40px;margin-left: 50px">
      <el-table
          ref="multipleTable"
          :data="docsData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="doc_id"
            label="任务号"
            width="120">
          <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
        </el-table-column>
        <el-table-column
            prop="name"
            label="文档名称"
            width="120">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="annotator"
            label="审核者"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="phrase"
            label="阶段"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="annotation_type"
            label="标注类型"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="annotator"
            label="审核者"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            label="操作"
            show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="handleReview(scope.row)" type="text" size="small">审核</el-button>
            <el-dropdown>
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click="handlePass(scope.row)">通过</el-dropdown-item>
                <el-dropdown-item @click="refuseReview(scope.row)">拒绝</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
    /**
     * author:wastelands
     * Date:2020-02-13 04:25
     */
    export default {
        name: "index",
        methods:{
            refuseReview(row){},
            handleReview(){},
            handlePass(){},
        },
    }
</script>

<style scoped>

</style>