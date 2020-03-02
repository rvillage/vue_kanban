import Vue from 'vue'
import Hello from '@views/hello.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    render: h => h(Hello)
  })
})
