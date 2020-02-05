<template>
  <svg class="hamburger__icon" id="Menu_Burger_Icon" data-name="Menu Burger Icon" viewBox="31.5 30 49.9 32" @click="$emit('click')">
    <defs>
    </defs>
    <rect id="Rectangle_9" width="49.9" height="4" :class="{ 'hamburger__icon__fill': true, 'hamburger__icon__fill-dark': darkModeActive }" data-name="Rectangle 9" rx="2" transform="translate(31.5 58)"/>
    <rect id="Rectangle_10" width="49.9" height="4" :class="{ 'hamburger__icon__fill': true, 'hamburger__icon__fill-dark': darkModeActive }" data-name="Rectangle 10" rx="2" transform="translate(31.5 44)"/>
    <rect id="Rectangle_11" width="49.9" height="4" :class="{ 'hamburger__icon__fill': true, 'hamburger__icon__fill-dark': darkModeActive }" data-name="Rectangle 11" rx="2" transform="translate(31.5 30)"/>
  </svg>
</template>

<script>
  export default {
    props: {
      darkModeActive: { type: Boolean, required: true }
    }
  }
</script>

<style lang="scss" scoped>
  .hamburger__icon {
    position: relative;
    z-index: 35;
    height: 1rem;
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    cursor: pointer;

    &__fill {
      fill: #2B244D;

      &-dark {
        fill: #ffff;
      }
    }
  }
</style>
