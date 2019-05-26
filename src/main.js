import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios'
// import 'echarts-gl';
import axiosreq from './components/FormConfig/api/AxiosApi.js'
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);
Vue.prototype.$axiosreq = axiosreq;
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios=axios;
Vue.use(ElementUI);
let VueEditable= require('./plugins/vue-editable.js');
Vue.use(VueEditable);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
