<template>
    <div>
        <img src="AllMsg.TextMsg.picture"  style="width: 88%; height: 88%"/>
    </div>
</template>

<script>
    export default {
        name: "PlayPictrueMsg",
        data()
        {
            return{
                   AllMsg:{
                       TextMsg:{
                           picture:''
                       }
                   }
            }
        },
        methods:{

        },
        mounted(){
            this.AllMsg.TextMsg.picture=this.$route.params.item;//接收唯一标识
        }
    }
</script>

<style scoped>

</style>