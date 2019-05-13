<template>
    <div class="exBox">
        <el-table
                :data="this.$store.state.channel"
                style="width: 100%"
                :header-cell-style="tableHeaderColor"
                :row-style="tableRowStyle">
            <el-table-column
                    prop="date"
                    label="内容列表"
                    width="700px">
                <mode-image-box></mode-image-box>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import modeImageBox from './modeImageBox'
    export default {
        name: "modeSecList",
        data() {
            return {
            }
        },
        methods: {
            // 修改table tr行的背景色
            tableHeaderColor({ row, column, rowIndex, columnIndex }) {
                if (rowIndex === 0) {
                    return 'font-size: 25px; height: 60px'
                }
            },
            tableRowStyle({ row, rowIndex }) {
                return 'height: 150px;'
            }
        },
        components:{
            modeImageBox
        }
    }
</script>

<style scoped>
    .exBox{
        margin-top: 1%;

    }
</style>