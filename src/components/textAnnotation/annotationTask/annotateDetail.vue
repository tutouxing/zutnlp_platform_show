<template>
  <p>文本标注</p>
</template>

<script>
    /**
     * author:wastelands
     * Date:2020-04-07 02:28
     */
    export default {
        name: "annotateDetail",
        data(){
            return{
                task:{}
            }
        },
        mounted(){
            this.bus.$on('task',task=>{
                this.task=task;
                console.log(this.task)
            })
        },
        methods:{

        },
        beforeDestroy(){
            this.bus.$off('updateData', this.task);
        }
    }
</script>

<style scoped>

</style>