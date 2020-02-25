<template lang="pug">
  div(class="o-card-list")
    div(class="o-card-list-header")
      div(class="o-card-list-header-title")
        h2 {{ name }}
      div(class="o-card-list-header-actions")
        Button(type="text" @click="shown = true")
          Icon(name="add")
    ul(class="o-card-list-items")
      draggable(v-model="draggableItems" :options="{ group: 'items' }" @change="handleChange" @end="handleEnd")
        li(v-for="item in draggableItems" :key="item.id" class="o-card-list-items-item")
          Card(v-bind="item" @remove="handleRemove")
    Form(v-if="shown" :listId="id" @close="shown = false")
</template>

<script>
  import { mapActions } from 'vuex'
  import draggable from 'vuedraggable'
  import Button from '@components/atoms/button'
  import Icon from '@components/atoms/icon'
  import Card from '@components/molecules/card'
  import Form from '@components/molecules/form'

  export default {
    name: 'CardList',
    components: {
      draggable,
      Button,
      Icon,
      Card,
      Form
    },
    props: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      items: { type: Array, default: () => [] }
    },
    data: () => ({
      shown: false
    }),
    computed: {
      draggableItems: {
        get () { return this.items },
        set (value) {
          // NOTE: 本来なら、Vue.Draggrableから処理されたデータをitemsに反映すれば可能だが、
          //       フロントエンドとバックエンドの状態を整合とるために、ここでは何もしない。
        }
      },
    },
    methods: {
      ...mapActions('board', ['removeTask']),
      handleChange ({ added, removed }) {
        if (added) {
          cosole.log('moveToCard')
          return
        } else if (removed) {
          cosole.log('moveCardFrom')
          return
        }
      },
      handleEnd () {
        if (this.canMove) {
          console.log('performCardMoving')
        }
      },
      handleRemove ({ id, listId }) {
        this.removeTask({ id, listId })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .o-card-list {
    &-header {
      display: flex;
      border-bottom: thin solid black;
      &-title {
        flex: 1;
        h2 {
          margin: 0px;
          padding-left: 8px;
          font-size: 1.0em;
          text-align: left;
        }
      }
      &-actions {
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          cursor: pointer;
        }
      }
    }
    &-items {
      list-style-type: none;
      margin: 0;
      padding: 0;
      &-item {
        margin: 8px;
        padding: 4px;
        border: thin solid black;
        border-radius: 0.5em;
      }
    }
  }
</style>
