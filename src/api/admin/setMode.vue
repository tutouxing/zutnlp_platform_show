<template>
    <component :is="mode"></component>
</template>

<script>
    import mainMode from '../../components/editable/mainMode.vue'
    import Mode1 from '../../components/editable/Mode1.vue'
    export default {
        name: "setMode",
        data(){
            return{
                mode:'',
            }
        },
        mounted(){
          this.setPageOne();
        },
        methods:{
            setPageOne()
            {
                if(this.$store.state.pageone=="页面1-2"){
                    this.mode=Mode1;
                } else {
                this.mode=mainMode;
               }
            }
        },
        comments:{
            mainMode,
            Mode1,
        }
    }
</script>

<style scoped>

</style>
