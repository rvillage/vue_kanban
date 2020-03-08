<template lang="pug">
  button(class="button-styles" @click="onClick")
    slot
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'my-button',

    methods: {
      onClick () {
        this.$emit('click');
      }
    }
  })
</script>

<style lang="scss" scoped>
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #FFFFFF;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
