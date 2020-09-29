import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.component('Pagination',Pagination)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
