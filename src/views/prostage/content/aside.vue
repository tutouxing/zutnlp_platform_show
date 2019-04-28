<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="大家都在搜" name="first">
            <div v-for="s in search" :key="s">
                <el-card shadow="hover">
                    {{s.text}}
                </el-card>
            </div>
        </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName1" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="热门话题" name="first1">
            <div v-for="h in hots" :key="h" >
                <el-card shadow="hover">
                    {{h.text}}
                </el-card>
            </div>
        </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName2" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="专题栏目" name="first2">
            <div v-for="p in program" :key="p" >
                <el-card shadow="hover">
                    {{p.text}}
                </el-card>
            </div>
        </el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName3" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="精彩评论" name="first3">
            <div v-for="r in review" :key="r" >
                <el-card shadow="hover">
                    {{r.text}}
                </el-card>
            </div>
        </el-tab-pane>
    </el-tabs>

</template>

<script>
    export default {
        name: "aside",
        data() {
            return {
                activeName: 'first',
                activeName1:'first1',
                activeName2:'first2',
                activeName3:'first3',
                search:[
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
                hots:[
                    { text: '学习 JavaScript学习 JavaScript学习 JavaScript学习 JavaScript学习 JavaScript学习 JavaScri' },
                    { text: '学习 Vue学习 Vue学习 Vue学习 Vue学习 Vue学习 Vue学习 Vue学习 Vue学习 Vue学习 Vue学习 Vue' },
                    { text: '整个牛项目整个牛项目整个牛项目整个牛项目整个牛项目整个牛项目整个牛项目整个牛项目整个牛项目' }
                ],
                program:[
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
                review:[
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>