import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Hello from '../views/hello.vue'

Vue.use(VueCompositionApi)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    render: h => h(Hello)
  })
})
