<template lang="pug">
  span(:class="classes")
    | {{ icon }}
</template>

<script>
  export default {
    name: 'Icon',
    props:{
      name: { type: String, required: true }
    },
    computed: {
      classes () {
        return ['a-icon', this.name]
      },
      icon () {
        const name = this.name
        if (name === 'close' || name === 'remove') {
          return 'x'
        } else if (name === 'add') {
          return '+'
        }
      }
    }
  }
</script>
