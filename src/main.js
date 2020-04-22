import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from '@/router'
import axios from 'axios' ;
import Vuex from 'vuex' //引入状态管理
import '@/assets/css/reset.css'
Vue.prototype.$axios= axios ;

Vue.config.productionTip = false
Vue.use(Vuex) ;


new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')
