<template>
  <header :class="{ 'main__header': true, 'main__header-dark': darkMode }">
    <div class="left__section">
      <HamburgerIcon :darkMode="darkMode" @click="$emit('click')" />
      <Logo :darkMode="darkMode" />
    </div>

    <h3 class="date__text">Today</h3>

    <div class="mode-toggle__container">
      <span class="mode-toggle__text">Light</span>
      <label class="toggle-button__container">
        <input type="checkbox" class="mode-toggle__input" @change="$emit('change')" />
        <span :class="{ 'mode-toggle__bg': true, 'mode-toggle__bg-checked': darkMode }" />
        <span :class="{ 'mode-toggle__circle': true, 'mode-toggle__circle-checked': darkMode }" />
      </label>
      <span class="mode-toggle__text">Dark</span>
    </div>
  </header>
</template>

<script>
  import HamburgerIcon from '../components/hamburger-icon.vue'
  import Logo from '../components/logo.vue'

  export default {
    components: {
      HamburgerIcon,
      Logo
    },
    props: {
      darkMode: { type: Boolean, required: true }
    }
  }
</script>

<style lang="scss" scoped>
  .main__header {
    background-color: #fff;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 0.25fr;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    margin: 0;
    min-height: 4rem;
    align-items: center;
    animation: slidedown 0.5s ease-in-out, fadein 1s ease-in-out;

    &-dark {
      background-color: #2B244D;
      color: white;
    }
  }

  .toggle-button__container {
    cursor: pointer;
    position: relative;
    margin: 0 0.75rem 0 0.25rem;
    display: inline-flex;
  }

  .mode-toggle__container {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  .mode-toggle__input {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .mode-toggle__bg {
    height: 1rem;
    width: 2rem;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: inline-block;
    transition: background-color 300ms linear;

    &-checked {
      background-color: #FF0070;
    }
  }

  .mode-toggle__circle {
    height: 1.30rem;
    width: 1.30rem;
    background-color: #2B244D;
    position: absolute;
    top: -0.18rem;
    border-radius: 50%;
    box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);
    transition: left 300ms linear;
    left: 0.2rem;

    &-checked {
      background-color: white;
      left: 1.5rem;
    }
  }

  .mode-toggle__text {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .left__section {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 5rem;
  }

  .date__text {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    display: inline;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 959px) {
    .main__header {
      grid-template-columns: 1fr;
      justify-items: center;
      padding: 1rem 0;
      min-height: 8rem;
    }

    .left__section {
      justify-self: start;
      max-width: none;
      grid-template-columns: 0 5fr;
      width: 100%;
    }
  }
</style>
