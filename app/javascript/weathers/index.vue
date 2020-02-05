<template>
  <body class="body">
    <SlideMenu :showMenu="showMenu" @click="toggleMenu" />
    <div class="root__container">
      <Header :darkModeActive="darkModeActive" @click="toggleMenu" @change="modeToggleSwitch" />

      <main class="main__container">
        <div :class="{ 'main-container__bg': true, 'main-container__bg-dark': darkModeActive }" />
      </main>

      <footer class="main__footer">
        <small :class="{ 'copyright__text': true, 'copyright__text-dark': darkModeActive }">Copyright © VueWeather</small>
      </footer>
    </div>
  </body>
</template>

<script>
  import SlideMenu from './_slide-menu.vue'
  import Header from './_header.vue'

  export default {
    components: {
      SlideMenu,
      Header
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

      &-dark {
        color: white;
      }
    }
  }
</style>
