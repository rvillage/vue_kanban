<template lang="pug">
  SinglePage
    div(class="p-kanban-index")
      Nav(@logout="handleLogout")
      p(v-if="progress" class="progress")
        | {{ message }}
      Board(:lists="lists")
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import SinglePage from '@components/templates/single-page'
  import Nav from '@components/molecules/nav'
  import Board from '@components/organisms/board'

  export default {
    name: 'KanbansIndex',
    components: {
      SinglePage,
      Nav,
      Board
    },
    data: () => ({
      progress: false,
      message: '',
    }),
    computed: {
      ...mapState('board', ['lists'])
    },
    methods: {
      ...mapActions('board', ['fetchLists']),
      handleLogout () {
        this._setProgress('ログオフ中...')
        // TODO ログオフ処理
        setTimeout(() => {
          this._resetProgress()
        }, 1000)
      },
      _setProgress (message) {
        this.progress = true
        this.message = message
      },
      _resetProgress () {
        this.progress = false
        this.message = ''
      }
    },
    created () {
      this._setProgress('読み込み中...')
      this.fetchLists().then(() => {
        this._resetProgress()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .p-kanban-index {
    border: medium solid black;
  }
  .progress {
    margin: auto;
  }
</style>
