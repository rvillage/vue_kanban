<template lang="pug">
  button(:class="classes" :disabled="disabled" type="button" @click="$emit('click')")
    slot
</template>

<script lang="ts">
  import { defineComponent, computed } from '@vue/composition-api'

  export default defineComponent({
    name: 'Button',
    props: {
      type: { type: String, default: 'button' },
      disabled: { type: Boolean, default: false }
    },
    setup (props) {
      const classes = computed((): string[] => {
        const cls = props.type === 'text' ? ('-' + props.type) : ''
        return [`m-button${cls}`]
      })
      return {
        classes
      }
    }
  })
</script>

<style lang="sass" scoped>
  .m-button
    padding: .6em 1.3em
    &-text
      border: none
      padding-right: 0
      padding-left: 0
</style>
