<template>
        <el-card class="box-card" v-if="this.$store.state.components=='1'">
            <div v-for="(item,index) in vnews1" :key="index" class="text item">
                {{item.title }}
            </div>
        </el-card>
        <el-card class="box-card" v-else-if="this.$store.state.components=='2'" >
            <div v-for="(item,index) in vnews2" :key="index"  class="text item">
                {{item.title }}
            </div>
        </el-card>
        <el-card class="box-card" v-else-if="this.$store.state.components==='3'">
            <div v-for="(item,index) in vnews1" :key="index"  class="text item">
                {{item.title}}
            </div>
        </el-card>
        <el-card class="box-card" v-else-if="this.$store.state.components==='4'">
            <div v-for="(item,index) in vnews1" :key="index" class="text item">
                {{item.title }}
            </div>
        </el-card>
</template>

<script>
    export default {
        name: "second",
        data(){
            return{
                vnews1:[],
                vnews2:[],
                vnews3:[],
                vnews4:[],
                channels:[],
            }
        },
        created(){
            this.slice1();
        },
        methods:{
            slice1(){
               /* console.log('当前的组件是啥');
                console.log(this.$store.state.components);*/
                this.channels = this.$store.state.channel;
                console.log('channnnnn');
                console.log(this.$store.state.channel);
                console.log(this.channels);
                console.log(this.channels[1].contents);
                this.vnews1 = this.channels[0].contents;

                this.vnews2 =this.channels[1].contents;
                this.vnews3 =this.channels[2].contents;
                this.vnews4 =this.channels[3].contents;
            },
        },

    }
</script>

<style >
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px ;
    }

    .box-card {
        width: 100%;
        height: 100%;
    }
</style>