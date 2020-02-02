<template>
  <div id="hello">
    {{ message }}
    <app />
  </div>
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

<style scoped>
</style>
