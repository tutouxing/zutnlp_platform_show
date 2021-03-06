import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
// import errLog from 'errLog'
import state from './state.js'
import line from './module/two/line'
Vue.use(Vuex);

export default new Vuex.Store({
  state,
    getters,
  mutations,
  actions,
  modules: {
    line,
  }
})
