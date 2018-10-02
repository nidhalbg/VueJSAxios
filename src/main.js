import Vue from 'vue'
import App from './App.vue'
import GetPost from './GetPost.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(GetPost)
}).$mount('#app')
