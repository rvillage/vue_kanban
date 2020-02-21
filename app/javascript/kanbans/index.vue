<template lang="pug">
  Body
    div(class="board-view")
      Nav
      p(v-if="progress" class="progress")
        | {{ message }}
      //- KbnBoardTask(:lists="lists")
</template>

<script>
  import Body from '@components/templates/body.vue'
  import Nav from '@components/molecules/nav.vue'

  export default {
    name: 'KanbansIndex',
    components: {
      Body,
      Nav
    },
    data: () => ({
      progress: false,
      message: ''
    })
  }
</script>

<style lang="scss" scoped>
  .board-view {
    border: medium solid black;
  }
  .progress {
    margin: auto;
  }
</style>
