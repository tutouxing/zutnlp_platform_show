<template>
    <corpus-user-down v-on:="handleInput" ></corpus-user-down>
    <corpus-user-down-search  :input="input5"></corpus-user-down-search>
    <creat-props-and-con v-on="handleruleForm"></creat-props-and-con>
    <CreatPropsAndCon :acceptLiformParent="ruleForm"></CreatPropsAndCon>
</template>

<script>
    import corpusUserDownSearch from "./corpusUserDownSearch";
    import corpusUserDown from "./corpusUserDown";
    import creatTable from "./creatTable";
    import creatPropsAndCon from "./creatPropsAndCon";
    export default {
        name: "parentForSearchAndUser",
        components:{
            corpusUserDown,
            corpusUserDownSearch,
            creatTable,
            creatPropsAndCon,
        },
        data(){
            return {
                input5:"",
                ruleForm:[]
            }
        },
        methods:{
            handleInput(val){
                this.input5 = val
            },
            handleruleForm(val){
                this.ruleForm = val
            }
        },
    }
</script>

<style scoped>

</style>