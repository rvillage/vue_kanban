<template lang="pug">
  span(:class="classes")
    | {{ icon }}
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Icon',
    props: {
      name: { type: String, required: true }
    },
    computed: {
      classes (): string[] {
        return ['a-icon', this.name]
      },
      icon (): string {
        const name: string = this.name
        if (name === 'close' || name === 'remove') {
          return 'x'
        } else if (name === 'add') {
          return '+'
        } else {
          return ''
        }
      }
    }
  })
</script>
