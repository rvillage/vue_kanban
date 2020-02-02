import Vue from 'vue'
import Hello from '../hello.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    render: h => h(Hello)
  })
})
