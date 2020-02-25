<template lang="pug">
  ul(class="o-board")
    li(v-for="list in lists" :key="list.id" class="o-board-item")
      CardList(v-bind="list")
</template>

<script>
  import CardList from '@components/organisms/card-list'

  export default {
    name: 'Board',
    components: {
      CardList
    },
    props: {
      lists: { type: Array, default: () => [] }
    }
  }
</script>

<style lang="scss" scoped>
  .o-board {
    display: flex;
    min-height: 100vh;
    list-style-type: none;
    margin: 16px;
    padding: 0;
    &-item {
      width: 192px;
      margin-right: 8px;
      border: thin solid black;
      border-radius: 0.5em;
    }
  }
</style>
