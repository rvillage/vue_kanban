<template lang="pug">
  div(class="m-card")
    div(class="m-card-name")
      h3 {{ name }}
    div(class="m-card-actions")
      Button(type="text" @click="$emit('remove', { id, listId })")
        Icon(name="remove")
</template>

<script>
  import Button from '@components/atoms/button'
  import Icon from '@components/atoms/icon'

  export default {
    name: 'Card',
    components: {
      Button,
      Icon
    },
    props: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      description: { type: String, default: '' },
      listId: { type: Number, required: true }
    }
  }
</script>

<style lang="scss" scoped>
  .m-card {
    display: flex;
    &-name {
      flex: 1;
      h3 {
        margin: 0px;
        font-size: 0.75em;
        text-align: left;
        padding-left: 8px;
      }
      a {
        text-decoration: none;
        color: #2c3e50;
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
</style>
