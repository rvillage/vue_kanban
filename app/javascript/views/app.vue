<template lang="pug">
  div(id="app")
    p {{ message }}
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data: function () {
      return {
        message: 'Hello Vue!'
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
