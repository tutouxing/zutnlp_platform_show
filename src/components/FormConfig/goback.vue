<template>
</template>

<script>
    export default {
        name: "goback",
        data(){
                                        return {

                                                }

        },
        methods:{
            back(){
                        this.$router.push({path:"formconfig/formoperate"});
            }
        },
        created()
        {
            this.back();
        }

    }
</script>

<style scoped>

</style>