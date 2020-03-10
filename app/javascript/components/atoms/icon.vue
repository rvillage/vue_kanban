<template lang="pug">
  span(:class="classes")
    | {{ icon }}
</template>

<script lang="ts">
  import { defineComponent, computed } from '@vue/composition-api'

  export default defineComponent({
    name: 'Icon',
    props: {
      name: { type: String, required: true }
    },
    setup (props) {
      const classes = computed((): string[] => {
        return ['a-icon', props.name]
      })
      const icon = computed((): string => {
        const name = props.name
        if (name === 'close' || name === 'remove') {
          return 'x'
        } else if (name === 'add') {
          return '+'
        } else {
          return ''
        }
      })
      return {
        classes,
        icon
      }
    }
  })
</script>
