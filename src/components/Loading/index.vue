<template>
  <div class="loading">
    <i class="iconfont icon-user" style="size: A4"></i>
  </div>
</template>

<script>

    export default {
        name: 'loading',
        data () {
            return {}
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("http://at.alicdn.com/t/font_926813_2c4yoi208d.css");
  .loading{
    position: fixed;
    top:0;
    left:0;
    z-index:121;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .loading img{
    margin:5rem auto;
  }
</style>