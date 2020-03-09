<template lang="pug">
  button(:class="classes" :disabled="disabled" type="button" @click="$emit('click')")
    slot
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Button',
    props: {
      type: { type: String, default: 'button' },
      disabled: { type: Boolean, default: false }
    },
    computed: {
      classes (): string[] {
        const cls = this.type === 'text' ? ('-' + this.type) : ''
        return [`m-button${cls}`]
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
