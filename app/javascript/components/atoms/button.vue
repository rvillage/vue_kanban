<template lang="pug">
  button(:class="classes" :disabled="disabled" type="button" @click="$emit('click')")
    slot
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: { type: String, default: 'button' },
      disabled: { type: Boolean, default: false }
    },
    computed: {
      classes () {
        const cls = this.type === 'text' ? ('-' + this.type) : ''
        return [`button${cls}`]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    padding: .6em 1.3em;
  }
  .button-text {
    border: none;
    padding-right: 0;
    padding-left: 0;
  }
</style>
