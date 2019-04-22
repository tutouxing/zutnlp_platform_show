<template>
  <div>
    <el-aside width="250px" style="height:1200px" >
      <el-menu class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               v-bind:router="true">
        <el-submenu v-for="(items,i) in this.$store.state.usermenus" :index="i.toString()">
          <template slot="title"><i class="el-icon-menu"></i>{{items.title}}</template>
          <el-menu-item-group v-for="(item,j) in items.children">
            <el-menu-item :index="item.path">{{item.title}}</el-menu-item>
            <!--                        <el-menu-item index="/treegrid">测试</el-menu-item>
                                    <el-menu-item index="/pool">组件展示</el-menu-item>
                                    <el-menu-item  index="/twodimensional/demo">Echarts测试</el-menu-item>-->
          </el-menu-item-group>
        </el-submenu>
        <!--<el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>代码生成</template>
            <el-menu-item-group>
                <el-menu-item index="/formconfig/formoperate">表单配置</el-menu-item>
                <el-menu-item index="/2-2">选项2</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>权限管理</template>
            <el-menu-item-group>
                <el-menu-item index="/admin/group">角色组管理</el-menu-item>
                <el-menu-item index="/admin/user">用户管理</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title"><i class="el-icon-menu"></i>服务管理</template>
            <el-menu-item-group>
                <el-menu-item index="/service">服务注册</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
            <template slot="title"><i class="el-icon-menu"></i>词性分析</template>
            <el-menu-item-group>
                <el-menu-item index="/analysis_word">配置</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
            <template slot="title"><i class="el-icon-menu"></i>图像识别</template>
            <el-menu-item-group>
                <el-menu-item index="/identify_image">配置</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
            <template slot="title" ><i class=" iconfont icon-caidan"></i>菜单管理</template>
            <el-menu-item-group>
                <el-menu-item index="/menu">菜单操作</el-menu-item>
            </el-menu-item-group>
        </el-submenu>-->
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
    export default {
        name:'sideBar',
        methods:{
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            }
        },
    }
</script>
<style scoped>
  @import url("http://at.alicdn.com/t/font_928693_hge148mabkl.css");
</style>

