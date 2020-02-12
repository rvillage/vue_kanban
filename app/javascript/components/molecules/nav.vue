<template>
  <nav class="board-navigation">
    <div class="title">
      <h1>VueKanban</h1>
    </div>
    <div class="actions">
      <Button type="text" @click="$emit('logout')">
        ログオフ
      </Button>
    </div>
  </nav>
</template>

<script>
  import Button from '@components/atoms/button.vue'

  export default {
    name: 'Nav',
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
  .board-navigation {
    display: flex;
    border-bottom: medium solid black;
  }
  .title {
    flex: 1;
  }
  h1 {
    margin: 0px;
  }
  .actions {
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    cursor: pointer;
  }
</style>
