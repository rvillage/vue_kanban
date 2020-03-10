<template lang="pug">
  div(id="hello")
    | {{ message }}
    App
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api'
  import App from './app.vue'

  export default defineComponent({
    components: { App },
    setup () {
      const message = ref('Can you say hello?')
      return {
        message
      }
    }
  })
</script>

<style lang="scss" scoped>
</style>
