<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from './views/layout/Layout'
import Login from './views/login/login'
import { mapGetters } from 'vuex';
export default {
  name: 'app',
    beforeCreate(){
      this.$router.push("/login")
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}

</style>
