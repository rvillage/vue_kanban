<template lang="pug">
  form(class="m-form" novalidate)
    div(class="m-form-item")
      input(v-model="name" type="text" placeholder="タスク...")
    div(class="m-form-actions")
      Button(:disabled="disableAddAction" @click="handleAdd")
        | 追加
      Button(:disabled="progress" @click="$emit('close')")
        | キャンセル
    div(class="m-form-messages")
      p(v-if="progress" class="m-form-messages_progress")
        | 追加中...
      p(v-if="error" class="m-form-messages_error")
        | {{ error }}
</template>

<script>
  import { mapActions } from 'vuex'
  import Button from '@components/atoms/button'

  export default {
    name: 'Form',
    components: {
      Button
    },
    props: {
      listId: { type: Number, required: true }
    },
    data: () => ({
      name: '',
      progress: false,
      error: ''
    }),
    computed: {
      disableAddAction () {
        return this.name.length === 0 || this.progress
      }
    },
    methods: {
      ...mapActions('board', ['addTask']),
      handleAdd () {
        this.progress = true
        this.error = ''

        const { listId, name } = this
        this.addTask({ listId, name }).then(() => {
          this.$emit('close')
          this.progress = false
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .m-form {
    margin: 8px;
    padding: 4px;
    border: thin solid black;
    border-radius: 0.5em;
    &-item {
      padding: 4px;
      input {
        width: 100%;
        padding: 0;
      }
    }
    &-actions {
      display: flex;
      justify-content: space-between;
      padding: 4px;
    }
  }
</style>
