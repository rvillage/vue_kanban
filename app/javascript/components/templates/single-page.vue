<template lang="pug">
  body(class="t-single-page")
    slot
</template>

<script>
  export default {
    name: 'SinglePage'
  }
</script>

<style lang="scss" scoped>
  .t-single-page {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
</style>
