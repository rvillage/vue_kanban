<template lang="pug">
  div(id="app")
    p {{ message }}
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api'

  export default defineComponent({
    setup () {
      const message = ref('Hello Vue!')
      return {
        message
      }
    }
  })
</script>

<style lang="scss" scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
