<template>
    <div>
        <el-aside width="300px" style="height:1000px" >
            <el-menu class="el-menu-vertical-demo"
                     @open="handleOpen"
                     @close="handleClose"
                     background-color="#2361b9"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     v-bind:router="true">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-tickets"></i>可视化组件</template>
                    <el-menu-item-group>
                        <el-menu-item index="/user/appmain">echarts</el-menu-item>
                        <el-menu-item index="/user/treegrid">测试</el-menu-item>
                        <el-menu-item index="/user/pool">组件展示</el-menu-item>
                        <el-menu-item  index="/user/twodimensional/demo">Echarts测试</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>代码生成</template>
                    <el-menu-item-group>
                        <el-menu-item index="/user/formconfig/formoperate">表单配置</el-menu-item>
                        <el-menu-item index="/user/2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-menu"></i>服务管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/user/service">服务注册</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-menu"></i>词性分析</template>
                    <el-menu-item-group>
                        <el-menu-item index="/user/analysis_word">配置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-picture"></i>图像识别</template>
                    <el-menu-item-group>
                        <el-menu-item index="/user/identify_image">配置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title" ><i class="el-icon-menu"></i>菜单管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/user/menu">菜单操作</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
    </div>
</template>
<script>
    export default {
        name:'DefaultSideBar',
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>
<style scoped>
    @import url("http://at.alicdn.com/t/font_928693_hge148mabkl.css");
</style>
