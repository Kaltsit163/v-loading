import Vue from 'vue'
import App from './App.vue'
import Loading from './lib/loading/index'

Vue.use(Loading)

new Vue({
  el: '#app',
  render: h => h(App)
})
