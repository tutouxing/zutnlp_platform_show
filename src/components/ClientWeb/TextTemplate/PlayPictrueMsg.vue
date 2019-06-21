<template>
    <div>
        <h1>{{obj.Introduction}}</h1>
        <img style="margin-top: 100px" :src="obj.Picture"/>
    </div>
</template>

<script>
    export default {
        name: "PlayPictrueMsg",
        data()
        {
            return{
                  obj:{},
                   url:''
            }
        },
        methods:{

        },
        created(){
            this.obj=this.$route.params.items;/////接收唯一标识/

            this.url=this.obj.Picture;
            console.log(  this.url);
        }
    }
</script>

<style scoped>

</style>