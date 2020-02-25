import Vue from 'vue'
import Vuex from 'vuex'
import App from '@views/kanbans/index.vue'
import board from '@stores/kanbans/board'

Vue.use(Vuex)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    store: new Vuex.Store({
      modules: {
        board
      }
    }),
    render: h => h(App)
  })
})
