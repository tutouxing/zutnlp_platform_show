<template>
    <div class="exBox">
    <el-row class="box-card">
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="formData.avatar" alt="">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">更多</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    </div>
</template>

<script>
    export default {
        name: "modeImageBox",
        formData: {
            avatar: require('@/assets/img/mo.png'),
        }
    }
</script>

<style scoped>
    .box-card {
        width:90%;

    }
    .exBox{
        width: 30%;
        display:inline-block
    }
</style>