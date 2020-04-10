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
                task:{},
                annotation_type:""
            }
        },
        mounted(){
            this.bus.$on('task',(task,annotation_type)=>{
                this.task=task;
                this.annotation_type=annotation_type;
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