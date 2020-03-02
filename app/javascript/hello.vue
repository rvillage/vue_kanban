<template lang="pug">
  div(id="hello")
    | {{ message }}
    App
</template>

<script>
  import App from './app.vue'

  export default {
    components: { App },
    data: () => {
      return {
        message: 'Can you say hello?'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
