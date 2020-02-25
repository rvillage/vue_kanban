<template lang="pug">
  nav(class="m-nav")
    div(class="m-nav-title")
      h1 VueKanban
    div(class="m-nav-actions")
      Button(type="text" @click="$emit('logout')")
        | ログオフ
</template>

<script>
  import Button from '@components/atoms/button'

  export default {
    name: 'Nav',
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
  .m-nav {
    display: flex;
    border-bottom: medium solid black;
    &-title {
      flex: 1;
      h1 {
        margin: 0px;
      }
    }
    &-actions {
      width: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        cursor: pointer;
      }
    }
  }
</style>
