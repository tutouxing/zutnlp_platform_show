<template>
    <div>
    <el-aside width="250px" style="height:1200px;" >
        <el-menu class="el-menu-vertical-demo"
                 background-color="#66a3e0"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 v-bind:router="true">
            <el-submenu v-for="(items,i) in this.$store.state.usermenus" :index="i.toString()">
                <template slot="title"><i class="el-icon-menu"></i>{{items.title}}</template>
                <el-menu-item-group v-for="(item,j) in items.children">
                    <el-menu-item :index="item.path">{{item.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
    </div>
</template>

<script>
    export default {
        name: "SideBarTwo"
    }
</script>

<style scoped>
    @import url("http://at.alicdn.com/t/font_928693_hge148mabkl.css");
</style>
