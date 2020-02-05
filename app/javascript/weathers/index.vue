<template>
  <body class="body">
    <SlideMenu :showMenu="showMenu" @click="toggleMenu" />
    <div class="root__container">
      <header :class="{ 'main__header': true, 'main__header-dark': darkModeActive }">
        <div class="left__section">
          <HamburgerIcon @click="toggleMenu" />
          <Logo />
        </div>
        <h3 class="date__text">Today</h3>
        <div class="mode-toggle__container">
          <span class="mode-toggle__text">Light</span>
          <label class="toggle-button__container">
            <input type="checkbox" class="mode-toggle__input" @click="modeToggleSwitch" />
            <span :class="{ 'mode-toggle__bg': true, 'mode-toggle__bg-checked': darkModeActive }" />
            <span :class="{ 'mode-toggle__circle': true, 'mode-toggle__circle-checked': darkModeActive }" />
          </label>
          <span class="mode-toggle__text">Dark</span>
        </div>
      </header>

      <main class="main__container">
        <div :class="{ 'main-container__bg': true, 'main-container__bg-dark': darkModeActive }" />
      </main>

      <footer class="main__footer">
        <small class="copyright__text">Copyright © VueWeather</small>
      </footer>
    </div>
  </body>
</template>

<script>
  import SlideMenu from './_slide-menu.vue'
  import HamburgerIcon from '../components/hamburger-icon.vue'
  import Logo from '../components/logo.vue'

  export default {
    components: {
      SlideMenu,
      HamburgerIcon,
      Logo
    },
    data: () => ({
      showMenu: false,
      darkModeActive: false
    }),
    methods: {
      toggleMenu () {
        this.showMenu = !this.showMenu
      },
      modeToggleSwitch () {
        this.darkModeActive = !this.darkModeActive
      }
    }
  }
</script>

<style lang="scss" scoped>
  .root__container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 0.5fr auto;
    position: relative;
  }

  .main__header {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 0.25fr;
    grid-template-rows: 1fr;
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    height: 4rem;
    margin: 0;
    align-items: center;
    transition: background-color 500ms linear;
    animation: 1s ease-in-out 0ms 1 fadein;

    &-dark {
      background-color: #2B244D;
      color: white;
    }

    .toggle-button__container {
      cursor: pointer;
      position: relative;
      margin: 0 0.5rem;
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
      top: -0.2rem;
      border-radius: 50%;
      box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);
      transition: left 300ms linear;
      left: 0.1rem;

      &-checked {
        background-color: white;
        left: 1.75rem;
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
  }

  .main-container__bg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    opacity: 0;
    background: white;
    transition: opacity 300ms linear;

    &-dark {
      opacity: 1;
      background: linear-gradient(to bottom, #B290FF, #2E1D65);
      transition: opacity 300ms linear;
    }
  }

  .main__footer {
    background: transparent;
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    z-index: 100;

    .copyright__text {
      letter-spacing: 0.1rem;
      color: #2B244D;
    }
  }
</style>
