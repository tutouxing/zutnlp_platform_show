<template>
  <div>
    <el-card>
      <h1>{{$route.params.content.title}}</h1>
      <span  v-html="$route.params.content.text_href"></span>
    </el-card>
  </div>
</template>
<script>
  import {getContentById} from "../../api/content";

  export default {
      name:"detail_mode",
      data(){
          return{

          }
      },
      watch:{
         '$route'(to,from){
             console.log(to)
             console.log(from)
         }
      },
      // // 路由改变前，组件就已经渲染完了
      // beforeRouteUpdate (to, from, next) {
      //     this.post = null;
      //     getPost(to.params.id, (err, post) => {
      //         this.setData(err, post)
      //         next()
      //     })
      // },
      methods: {
          // setData (err, post) {
          //     if (err) {
          //         this.error = err.toString()
          //     } else {
          //         this.post = post;
          //         getContentById().then((res)=>{
          //             this.content = res.data;
          //         })
          //     }
          // }
      }
  }
</script>
<style scoped></style>