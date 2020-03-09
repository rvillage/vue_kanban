<template lang="pug">
  div(id="hello")
    | {{ message }}
    App
</template>

<script lang="ts">
  import Vue from 'vue'
  import App from './app.vue'

  export default Vue.extend({
    components: { App },
    data: () => {
      return {
        message: 'Can you say hello?'
      }
    }
  })
</script>

<style lang="scss" scoped>
</style>
