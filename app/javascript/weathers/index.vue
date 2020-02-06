<template>
  <body class="body">
    <SlideMenu :showMenu="showMenu" :darkMode="darkMode" @click="toggleMenu" />

    <main :class="{ 'root__container': true, 'root__container-dark': darkMode }">
      <Header :darkMode="darkMode" @click="toggleMenu" @change="modeToggleSwitch" />

      <div :class="{ 'main-container__bg': true, 'main-container__bg-dark': darkMode }">
        <div class="main__container">
          <WeatherCard :darkMode="darkMode" />
          <AddCard :darkMode="darkMode" />
        </div>
      </div>
    </main>
  </body>
</template>

<script>
  import SlideMenu from './_slide-menu.vue'
  import Header from './_header.vue'
  import WeatherCard from './_weather-card.vue'
  import AddCard from './_add-card.vue'

  export default {
    components: {
      SlideMenu,
      Header,
      WeatherCard,
      AddCard
    },
    data: () => ({
      showMenu: false,
      darkMode: false
    }),
    methods: {
      toggleMenu () {
        this.showMenu = !this.showMenu
      },
      modeToggleSwitch () {
        this.darkMode = !this.darkMode
      }
    }
  }
</script>

<style lang="scss" scoped>
  .root__container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-flow: column;
    transition: background 300ms linear;
    background-image: linear-gradient(to top, #5ee7df 0%, #66a6ff 100%);

    &-dark {
      background: linear-gradient(to bottom, #372865, #000000);
    }
  }

  .main-container__bg {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    &-dark {
      opacity: 1;
      background: linear-gradient(to bottom, #B290FF, #2E1D65);
      transition: opacity 300ms linear;
    }

    .main__container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      min-height: 90vh;
      position: relative;
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
