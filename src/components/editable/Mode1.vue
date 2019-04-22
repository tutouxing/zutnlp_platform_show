<template>
  <div>
    <el-row :span="8" v-for="(o, index) in flag.length" :key="o" >
        <el-button-group>
          <el-button @click="replace(index)" size="small">更换视图</el-button>
          <el-button @click="del(index)" size="small">删除视图</el-button>
          <el-button @click="replace(index)" size="small">选择数据</el-button>
        </el-button-group>
        <div>
          <component :is="flag[index]"></component>
        </div>
    </el-row>
    <!--<test v-if="flag[0]" v-show="false"></test>-->
    <Dialog></Dialog>
  </div>
</template>
<script>
    import Card from '../../views/editable/Card.vue'
    import test from '../../views/layout/Echart'
    import bus from '../../assets/eventBus.js'
    import Dialog from '../Echarts/dialog.vue'
    import Bar_2D from '../Echarts/twodimensional/Bar'
    import Line_2D from '../Echarts/twodimensional/Line'
    import Pie_2D from '../Echarts/twodimensional/Pie'
    import UserTreeGrid from '../../views/editable/UserTreeGrid'
    import CodeTreeGrid from '../../views/editable/CodeTreeGrid'
    import ServiceTreeGrid from '../../views/editable/ServiceTreeGrid'
    export default {
        name: "Mode1",
        data(){
            return {
                flag:[
                    Card,
                    Card,
                    Card,
                    Card
                ],
                temp:0,
                isLoading: true,
                loading:false
            }
        },
        watch:{
            flag:function () {
                return this.$store.state.flag;
            }
        },
        created(){
            this.flag = this.$store.state.flag;
        },
        beforeLeave(){
            this.$store.commit("SET_FLAG_STATE",this.flag)
        },
        mounted(){
            bus.$on("passComponent",() => {
                this.requestData();
                // this.$set(this.flag, this.temp, comp);
            })
        },
        methods:{
            replace(newVal){
                this.$store.commit("SET_DIALOGFORMVISIBLE_STATE",true);
                this.addCard(newVal)
            },
            del(delVal){
                this.$set(this.flag, delVal, Card);
                this.$store.commit("SET_FLAG_STATE",this.flag)
            },
            addCard(newVal){
                this.temp = newVal;
                console.log(this.flag.length);
                if (newVal === this.flag.length-1){
                    this.$nextTick(() => {
                        this.flag.push(Card);
                        this.flag.push(Card);
                        this.$store.commit("SET_FLAG_STATE",this.flag)
                    });
                }
            },
            requestData(){
                // bus.$emit("passURL",this.$store.state.selection);
                let showType = this.$store.state.showType;
                let selection = this.$store.state.selection;
                if (showType === "2DLine"){
                    this.$set(this.flag, this.temp, Line_2D);
                }else if (showType === "2DBar"){
                    this.$set(this.flag, this.temp, Bar_2D);
                } else if (showType === "2DPie"){
                    this.$set(this.flag, this.temp, Pie_2D);
                    // bus.$emit("passComponent",Pie_2D)
                } else if (showType === "网状图TreeGrid"){
                    if (selection === "用户组"){
                        this.$set(this.flag, this.temp, UserTreeGrid);
                    } else if (selection === "服务组"){
                        this.$set(this.flag, this.temp, ServiceTreeGrid);
                    } else if (selection === "代码表单"){
                        this.$set(this.flag, this.temp, CodeTreeGrid);
                    }
                }
                this.$store.commit("SET_FLAG_STATE",this.flag)
            }
        },
        components:{
            Card,test,Dialog,
        },

    }


</script>
<style>

</style>
