import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

const base = axios.create({
  // baseURL: 'https://glacial-everglades-74306.herokuapp.com'
  // baseURL: 'http://localhost:3000'
  // baseURL: 'https://dry-reef-04014.herokuapp.com/'
  baseURL: 'https://enigmatic-bayou-22445.herokuapp.com'

})
Vue.prototype.$http = base;

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
